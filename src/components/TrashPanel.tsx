import { DeleteOutlined, UndoOutlined } from '@ant-design/icons';
import { Button, Flex, Popconfirm, Tooltip } from 'antd';
import { observer } from 'mobx-react-lite';
import React, { useCallback } from 'react';
import languages from 'settings/languages';
import { categoryStore } from 'utils/categoryStore';
import { listStore } from 'utils/listStore';
import { optionsStore } from 'utils/optionsStore';
import { userStore } from 'utils/userStore';

const TrashPanel: React.FC = observer(() => {
	const { list, deleteItem, restoreItem } = listStore;
	const { categories, deleteCategory, restoreCategory } = categoryStore;
	const { isSmallScreen } = userStore;
	const { userOptions } = optionsStore;

	const { language } = userOptions;

	const deleteAll = useCallback(() => {
		Object.keys(list).forEach((key: string) => {
			list[key].deleted && deleteItem(key);
		});

		Object.keys(categories).forEach((key: string) => {
			categories[key].deleted && deleteCategory(key);
		});
	}, [list, categories, deleteCategory, deleteItem]);

	const restoreAll = useCallback(() => {
		Object.keys(list).forEach((key: string) => {
			list[key].deleted && restoreItem(key);
		});

		Object.keys(categories).forEach((key: string) => {
			categories[key].deleted && restoreCategory(key);
		});
	}, [list, categories, restoreCategory, restoreItem]);

	return (
		<Flex gap={16}>
			<Popconfirm
				title={languages.deleteAllConfirm[language]}
				onConfirm={deleteAll}
			>
				<Tooltip title={languages.deleteAll[language]}>
					<Button size={isSmallScreen ? 'small' : 'middle'}>
						<DeleteOutlined style={{ scale: isSmallScreen ? '1' : '1.5' }} />
					</Button>
				</Tooltip>
			</Popconfirm>
			<Tooltip title={languages.restoreAll[language]}>
				<Popconfirm
					title={languages.restoreAllConfirm[language]}
					onConfirm={restoreAll}
				>
					<Button size={isSmallScreen ? 'small' : 'middle'}>
						<UndoOutlined style={{ scale: isSmallScreen ? '1' : '1.5' }} />
					</Button>
				</Popconfirm>
			</Tooltip>
		</Flex>
	);
});

export default TrashPanel;