import { DatabaseOutlined } from '@ant-design/icons';
import { Avatar, Popconfirm, Tooltip } from 'antd';
import { observer } from 'mobx-react-lite';
import React, { useCallback } from 'react';
import languages from 'settings/languages';
import { categoryStore } from 'utils/categoryStore';
import { listStore } from 'utils/listStore';
import { optionsStore } from 'utils/optionsStore';
import { userStore } from 'utils/userStore';
import { getRandomData } from 'utils/transformData';

const RandomizeButton: React.FC = observer(() => {
	const { isSmallScreen, currencyRates } = userStore;
	const { userOptions } = optionsStore;
	const { setUserList } = listStore;
	const { setUserCategories } = categoryStore;

	const { language } = userOptions;

	const addRandomData = useCallback(() => {
		const itemsValue = { expense: 500, income: 100 };
		const categoriesValue = { expense: 15, income: 5 };
		const deletedItemsValue = { expense: 50, income: 10 };
		const deletedCategoriesValue = { expense: 3, income: 1 };

		const data = getRandomData(
			itemsValue,
			categoriesValue,
			deletedItemsValue,
			deletedCategoriesValue,
			currencyRates
		);

		setUserList(data.items);
		setUserCategories(data.categories);
	}, [setUserList, setUserCategories, currencyRates]);

	return (
		<Tooltip title={languages.randomize[language]}>
			<Popconfirm
				title={languages.randomizeConfirm[language]}
				onConfirm={addRandomData}
			>
				<Avatar
					size={isSmallScreen ? 'small' : 'default'}
					style={{ cursor: 'pointer', background: '#0000' }}
				>
					<DatabaseOutlined />
				</Avatar>
			</Popconfirm>
		</Tooltip>
	);
});

export default RandomizeButton;