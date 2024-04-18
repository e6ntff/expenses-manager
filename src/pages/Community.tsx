import { CommentOutlined, TeamOutlined, UserOutlined } from '@ant-design/icons';
import { Tabs } from 'antd';
import { observer } from 'mobx-react-lite';
import React, { useEffect, useState } from 'react';
import languages from 'settings/languages';
import { optionsStore } from 'utils/optionsStore';
import Chats from './Chats';
import Friends from './Friends';
import { userStore } from 'utils/userStore';
import { getMyUser } from 'utils/community';
import { communityStore } from 'utils/communityStore';

const Community: React.FC = observer(() => {
	const { userOptions } = optionsStore;
	const { isSmallScreen, UID } = userStore;
	const { setUser } = communityStore;

	const { language } = userOptions;

	const [activeKey, setActiveKey] = useState<string>('1');

	useEffect(() => {
		if (UID) {
			getMyUser(UID, setUser);
		}
		// eslint-disable-next-line
	}, [UID]);

	return (
		<Tabs
			size={isSmallScreen ? 'small' : 'middle'}
			tabPosition={isSmallScreen ? 'top' : 'left'}
			activeKey={activeKey}
			destroyInactiveTabPane
			onChange={setActiveKey}
			items={[
				{
					key: '0',
					label: languages.profile[language],
					icon: <UserOutlined />,
					children: <></>,
				},
				{
					key: '1',
					label: languages.chats[language],
					icon: <CommentOutlined />,
					children: <Chats />,
				},
				{
					key: '2',
					label: languages.friends[language],
					icon: <TeamOutlined />,
					children: <Friends />,
				},
			]}
		></Tabs>
	);
});

export default Community;