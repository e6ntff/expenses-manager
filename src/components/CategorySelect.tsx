import React from 'react';
import { ExpenseItem, category } from '../settings/interfaces';
import { observer } from 'mobx-react-lite';
import { categoryStore } from 'utils/categoryStore';
import { Flex, Select } from 'antd';
import { EditFilled } from '@ant-design/icons';

interface Props {
	item: ExpenseItem;
	handler: (arg0: number) => void;
}

const CategorySelect: React.FC<Props> = observer(({ item, handler }) => {
	const { categories } = categoryStore;

	return (
		<Flex justify='center'>
			<Select
				value={item.category.id}
				onChange={handler}
				suffixIcon={<EditFilled style={{ color: item.category.color }} />}
			>
				{categories.map((category: category) => (
					<Select.Option
						key={category.id}
						value={category.id}
					>
						{category.name}
					</Select.Option>
				))}
			</Select>
		</Flex>
	);
});

export default CategorySelect;