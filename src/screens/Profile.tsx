import React, { FC, useEffect } from 'react';

import { StyleSheet, Text, View } from 'react-native';
import { UserInfo } from '../components/UserInfo';
import { CustomButton } from '../components/CustomButton';

import globalStyles from '../../style';

import { selectUserAuth, setSignOut } from '../store/authSlice';
import { fetchUserById, selectUserInfo } from '../store/userSlice';

import { useAppDispatch, useAppSelector } from '../hooks/redux-hooks';

export const Profile: FC = () => {
	const { first_name = '', avatar } = useAppSelector(selectUserInfo);
	const { id, email } = useAppSelector(selectUserAuth);
	const dispatch = useAppDispatch();

	useEffect(() => {
		dispatch(fetchUserById(id))
	}, [dispatch])

	const onPress = () => {
		dispatch(setSignOut());
	}

	return (
		<View style={[styles.container, globalStyles.darkBackground]}>
			<UserInfo
				email={email}
				name={first_name}
				imageUrl={avatar}
			/>
			<CustomButton
				text='Logout'
				onPress={onPress}
			/>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		padding: 20,
		flex: 1,
		justifyContent: 'space-between',
	},
})