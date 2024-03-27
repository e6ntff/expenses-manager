import { makeAutoObservable } from 'mobx';
import { category } from '../settings/interfaces';
import { userStore } from './userStore';
import { configure } from 'mobx';
import { debounce } from 'lodash';
import constants from 'settings/constants';
import saveData from './saveData';
import uniqid from 'uniqid';

configure({
	enforceActions: 'never',
});

class CategoryStore {
	userStore;
	categories: { [key: string]: category } = {};

	saveData = () => {
		if (this.userStore.user.uid) {
			saveData(
				this.userStore.user,
				this.userStore.setStatus,
				this.userStore.decreaseRecentChanges,
				this.userStore.recentChanges,
				'categories',
				this.categories
			);
		}
	};

	debouncedSaveData = debounce(this.saveData, constants.savingDelay);

	setCategories = (
		categories: { [key: string]: category },
		save: boolean = true
	) => {
		this.categories = { ...categories } || { 0: constants.defaultCategory };
		save && this.debouncedSaveData();
		save && this.userStore.increaseRecentChanges();
	};

	addCategory = (payload: category) => {
		this.setCategories({ ...this.categories, [uniqid()]: payload });
	};

	removeCategory = (id: string) => {
		const newCategories = this.categories;
		delete newCategories[id];
		this.setCategories(newCategories);
	};

	replaceCategory = (id: string, payload: category) => {
		this.setCategories({ ...this.categories, [id]: payload });
	};

	constructor(userStore: any) {
		this.userStore = userStore;
		makeAutoObservable(this);
	}
}

export const categoryStore = new CategoryStore(userStore);
