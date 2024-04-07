import React, { useState, useCallback, useMemo } from 'react';
import { ExpenseItem, ItemWithSearch, Mode } from '../settings/interfaces';
import Item from 'antd/es/list/Item';
import { Card, Col, Flex } from 'antd';
import { observer } from 'mobx-react-lite';
import { listStore } from 'utils/listStore';
import { userStore } from 'utils/userStore';
import ItemModal from './ItemModal';
import { optionsStore } from 'utils/optionsStore';
import languages from 'settings/languages';
import { categoryStore } from 'utils/categoryStore';
import dayjs from 'dayjs';
import {
	MyCategory,
	MyCheckbox,
	MyDate,
	MyIconWithTooltip,
	MyImage,
	MyPrice,
	MyTitle,
} from './Items';
import { CheckboxChangeEvent } from 'antd/es/checkbox';
import {
	DeleteOutlined,
	EditOutlined,
	InfoCircleOutlined,
} from '@ant-design/icons';

interface Props {
	mode: Mode;
	initialItem: ItemWithSearch;
	deleteAll?: () => void;
	restoreAll?: () => void;
	handleSelection?: (event: CheckboxChangeEvent) => void;
	selected?: boolean;
	disabled?: boolean;
}

const ListItem: React.FC<Props> = observer(
	({ mode, initialItem, deleteAll, handleSelection, selected, disabled }) => {
		const { isSmallScreen } = userStore;
		const { replaceItem, setLastDeletedItemIds, lastDeletedItemIds, list } =
			listStore;
		const { userOptions } = optionsStore;
		const { categories } = categoryStore;

		const { currency, language } = userOptions;

		const [isModalOpened, setIsModalOpened] = useState<boolean>(false);
		const [currentItem, setCurrentItem] = useState<ExpenseItem>(
			list[initialItem.id]
		);

		const toggleIsModalOpened = useCallback(() => {
			setIsModalOpened((prevValue: boolean) => !prevValue);
		}, [setIsModalOpened]);

		const updateCurrentItem = useCallback(
			(item: ExpenseItem) => {
				setCurrentItem((prevItem: ExpenseItem) => {
					if (JSON.stringify(prevItem) !== JSON.stringify(item)) {
						const newItem: ExpenseItem = {
							...item,
							updatedAt: dayjs().valueOf(),
						};
						replaceItem(initialItem.id, newItem);
						return newItem;
					}
					return prevItem;
				});
				toggleIsModalOpened();
			},
			[setCurrentItem, replaceItem, toggleIsModalOpened, initialItem.id]
		);

		const deleteItem = useCallback(() => {
			setLastDeletedItemIds([...lastDeletedItemIds, initialItem.id]);
		}, [setLastDeletedItemIds, initialItem.id, lastDeletedItemIds]);

		const ActionsJSX = (
			<Flex justify='space-evenly'>
				{MyIconWithTooltip(
					languages.edit[language],
					isSmallScreen,
					EditOutlined,
					false,
					toggleIsModalOpened
				)}
				{MyPrice(currentItem.price, isSmallScreen, currency)}
				{MyIconWithTooltip(
					languages.delete[language],
					isSmallScreen,
					DeleteOutlined,
					false,
					deleteItem
				)}
			</Flex>
		);

		const ImageAndDateJSX = (
			<Flex align='center'>
				{MyImage(
					currentItem.image,
					isSmallScreen,
					language,
					toggleIsModalOpened
				)}
				{MyDate(currentItem.date, isSmallScreen)}
			</Flex>
		);

		const tooltipTitle = useMemo(() => {
			if (!currentItem.updatedAt) {
				return (
					<>
						{`${languages.createdAt[language]} ${dayjs(
							currentItem.createdAt
						).format('HH:mm:ss DD.MM.YY')}`}
					</>
				);
			} else {
				return (
					<>
						{`${languages.createdAt[language]} ${dayjs(
							currentItem.createdAt
						).format('HH:mm:ss DD.MM.YY')}`}
						<br></br>
						{`${languages.updatedAt[language]} ${dayjs(
							currentItem.updatedAt
						).format('HH:mm:ss DD.MM.YY')}`}
					</>
				);
			}
		}, [currentItem, language]);

		const CheckboxAndTitle = (
			<Flex>
				{MyCheckbox(
					selected,
					language,
					isSmallScreen,
					handleSelection,
					deleteAll
				)}
				{MyTitle(
					currentItem.title,
					isSmallScreen,
					language,
					false,
					initialItem.overlaps
				)}
			</Flex>
		);

		return (
			<>
				<ItemModal
					opened={isModalOpened}
					initialItemId={initialItem.id}
					toggleOpened={toggleIsModalOpened}
					submitItem={updateCurrentItem}
				/>
				{mode === 'list' ? (
					<Item
						style={{
							pointerEvents: disabled ? 'none' : 'auto',
						}}
					>
						<Col span={1}>
							{MyCheckbox(
								selected,
								language,
								isSmallScreen,
								handleSelection,
								deleteAll
							)}
						</Col>
						<Col>{ImageAndDateJSX}</Col>
						<Col span={8}>
							{MyTitle(
								currentItem.title,
								isSmallScreen,
								language,
								false,
								initialItem.overlaps
							)}
						</Col>
						<Col span={3}>{MyCategory(categories[currentItem.categoryId])}</Col>
						<Col span={5}>
							{MyPrice(currentItem.price, isSmallScreen, currency)}
						</Col>
						<Col span={1}>
							{MyIconWithTooltip(
								languages.edit[language],
								isSmallScreen,
								EditOutlined,
								false,
								toggleIsModalOpened
							)}
						</Col>
						<Col span={1}>
							{MyIconWithTooltip(
								languages.delete[language],
								isSmallScreen,
								DeleteOutlined,
								false,
								deleteItem
							)}
						</Col>
						<Col span={1}>
							{MyIconWithTooltip(
								tooltipTitle,
								isSmallScreen,
								InfoCircleOutlined,
								false
							)}
						</Col>
					</Item>
				) : (
					<Card
						extra={[
							MyIconWithTooltip(
								tooltipTitle,
								isSmallScreen,
								InfoCircleOutlined,
								false
							),
						]}
						size={isSmallScreen ? 'small' : 'default'}
						bordered
						title={CheckboxAndTitle}
						actions={[ActionsJSX]}
						style={{
							inlineSize: isSmallScreen ? '9em' : '12em',
							pointerEvents: disabled ? 'none' : 'auto',
						}}
					>
						<Flex justify='center'>
							<Flex
								vertical
								align='stretch'
								gap={4}
							>
								{ImageAndDateJSX}
								{MyCategory(categories[currentItem.categoryId])}
							</Flex>
						</Flex>
					</Card>
				)}
			</>
		);
	}
);

export default ListItem;
