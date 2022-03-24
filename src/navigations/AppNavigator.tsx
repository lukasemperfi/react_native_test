import React, { FC } from 'react';

import { Profile } from '../screens/Profile';
import { Feeds } from '../screens/Feeds';

import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

const Tab = createMaterialTopTabNavigator();

export const AppNavigator: FC = () => {

	return (
		<Tab.Navigator screenOptions={{
			tabBarActiveTintColor: '#fff',
			tabBarIndicatorStyle: { backgroundColor: '#009688', },
			tabBarItemStyle: {
				height: 100,
				flex: 1,
				justifyContent: 'center',
				alignItems: 'flex-end',
				flexDirection: 'row',
			},
			tabBarStyle: { backgroundColor: '#65727a', },
		}}>
			<Tab.Screen
				name="Feeds"
				component={Feeds} />
			<Tab.Screen
				name="Profile"
				component={Profile} />
		</Tab.Navigator>
	)
};
