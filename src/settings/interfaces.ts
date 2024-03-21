import dayjs from 'dayjs';
import { theme } from 'antd';

const { defaultAlgorithm, darkAlgorithm } = theme;
export interface category {
	id: number;
	color: string;
	name: string;
}
export interface ExpenseItem {
	id: number;
	date: dayjs.Dayjs;
	title: string;
	category: category;
	price: currencies;
}

export interface currencies {
	[key: string]: number;
	USD: number;
	EUR: number;
	RUB: number;
}

export interface rates {
	EUR: number;
	RUB: number;
}
export interface AuthUser<T> {
	email: T;
	password: T;
	passwordAgain?: T;
}

export type language = 'en' | 'ru';

export type ThemeAlgorithm = typeof darkAlgorithm | typeof defaultAlgorithm;

export type Theme = 'dark' | 'default';

export type Sort = 'date' | 'title' | 'price';

export type Mode = 'list' | 'grid';

export type Interval = 'year' | 'month' | 'day';

export type currency = 'USD' | 'EUR' | 'RUB';

export interface ListOptions {
	years: string[];
	sortingAlgorithm: Sort;
	isSortingReversed: boolean;
	pageSize: number;
	currentPage: number;
	categoriesToFilter: category[];
	mode: Mode;
}

export interface StatsOptions {
	year: number | null;
	month: number | null;
	day: number | null;
}

export interface Value {
	category: category;
	value: number;
}

export interface UserOptions {
	language: language;
	currency: currency;
	theme: Theme;
	themeAlgorithm: ThemeAlgorithm;
	deleteDelay: number
}
