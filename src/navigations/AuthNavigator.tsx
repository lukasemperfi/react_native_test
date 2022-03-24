import React, { FC } from 'react';

import { createStackNavigator } from '@react-navigation/stack';

import { Login } from '../screens/Login';

const Stack = createStackNavigator();

export const AuthNavigator: FC = () => {

	return (
		<Stack.Navigator>
			<Stack.Screen
				name="Sign In Screen"
				component={Login}
				options={{
					headerShown: false,
				}}
			/>
		</Stack.Navigator>
	);
}; 