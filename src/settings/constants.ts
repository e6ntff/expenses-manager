import dayjs from 'dayjs';
import { ListType } from './interfaces';

const pageSizeOptions = [20, 40, 80];

const defaultCategory = {
	type: 'all' as ListType,
	color: '#cccccc',
	name: '-',
	deleted: false,
};

const constants = {
	optionsDebounceDelay: 250,
	tourPeriod: 5000,
	spinDelay: 1500,
	deleteDelay: 5000,
	savingDelay: 5000,
	errorDelay: 5000,
	windowBreakpoint: 750,
	maxAppWidthLarge: 900,
	maxAppWidthSmall: 500,
	defaultPageSize: pageSizeOptions[0],
	defaultAlgoritm: 'date',
	defaultMode: 'list',
	pageSizeOptions: pageSizeOptions,
	baseCurrency: 'USD',
	startDate: dayjs(new Date(2020, 0, 1)),
	defaultCategory: defaultCategory,
	defaultData: {
		list: {},
		categories: { '0': defaultCategory },
	},
	emptyItem: {
		type: 'expense' as ListType,
		title: '',
		date: dayjs().valueOf(),
		categoryId: '0',
		price: {
			USD: 0,
			EUR: 0,
			RUB: 0,
		},
		createdAt: 0,
		updatedAt: 0,
		deleted: false,
	},
	colors: {
		expense: '#f00',
		income: '#0a0',
		expenseLight: '#f005',
		incomeLight: '#0a05',
	},
};

export default constants;
