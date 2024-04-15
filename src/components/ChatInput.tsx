import { ArrowDownOutlined, SendOutlined } from '@ant-design/icons';
import { Badge, Flex } from 'antd';
import Search from 'antd/es/input/Search';
import { observer } from 'mobx-react-lite';
import React, { ChangeEvent, useCallback, useState } from 'react';
import { sendMessage } from 'utils/community';
import { userStore } from 'utils/userStore';
import { MyIconWithTooltip } from './Items';
import Scrollbars from 'react-custom-scrollbars';

interface Props {
	chatId: string;
	scrollbarsRef: React.MutableRefObject<Scrollbars | null>;
	stuck: boolean;
	hasNewMessages: boolean;
}

const ChatInput: React.FC<Props> = observer(
	({ chatId, scrollbarsRef, stuck, hasNewMessages }) => {
		const { user, isSmallScreen } = userStore;

		const [message, setMessage] = useState<string>('');

		const handleChange = useCallback(
			(event: ChangeEvent<HTMLInputElement>) => {
				setMessage(event.target.value);
			},
			[setMessage]
		);

		const send = useCallback(() => {
			setMessage((prevMessage: string) => {
				prevMessage && sendMessage(user.uid, chatId, message);
				return '';
			});
		}, [user.uid, chatId, message]);

		return (
			<Flex style={{ position: 'relative' }}>
				{!stuck && (
					<Flex style={{ position: 'absolute', right: '0', bottom: '4em' }}>
						<Badge dot={hasNewMessages}>
							{MyIconWithTooltip(
								'',
								isSmallScreen,
								ArrowDownOutlined,
								false,
								scrollbarsRef.current?.scrollToBottom
							)}
						</Badge>
					</Flex>
				)}
				<Search
					value={message}
					onChange={handleChange}
					allowClear
					enterButton={<SendOutlined />}
					size='large'
					onSearch={send}
				/>
			</Flex>
		);
	}
);

export default ChatInput;
