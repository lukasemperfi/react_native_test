import React, { FC } from 'react';

import { NavigationContainer } from '@react-navigation/native';

import { AppNavigator } from './AppNavigator';
import { AuthNavigator } from './AuthNavigator';

import { selectIsLoggedIn } from '../store/authSlice';
import { useAppSelector } from '../hooks/redux-hooks';

export const AppRoute: FC = () => {
	const isLoggedIn = useAppSelector(selectIsLoggedIn);

	return (
		<NavigationContainer>
			{isLoggedIn ? <AppNavigator /> : <AuthNavigator />}
		</NavigationContainer>
	);
};