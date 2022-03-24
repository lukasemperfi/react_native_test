import React, { FC } from 'react';

import { StyleSheet, View, } from 'react-native';
import { CustomButton } from '../components/CustomButton';
import { Input } from '../components/Input';

import globalStyles from '../../style';

import { useForm, Controller, SubmitHandler } from 'react-hook-form';

import { setSignIn } from '../store/authSlice';

import { randomInteger } from '../utils/randomNum';
import { EMAIL_REGEX } from '../constans';

import { useAppDispatch } from '../hooks/redux-hooks';


export const Login: FC = () => {
	const dispatch = useAppDispatch();
	const {
		control,
		handleSubmit,
		formState: { errors }
	} = useForm({ mode: 'all' });


	const handleLogin = (data: any): void => {
		
		const user = {
			isLoggedIn: true,
			email: data.email,
			id: randomInteger(1, 12),
		};
		dispatch(setSignIn(user));
	}


	
	return (
		<View style={[styles.container, globalStyles.darkBackground]}>
			<Controller
				name="email"
				control={control}
				render={({ field: { onChange, value } }) => (
					<Input
						onChangeText={onChange}
						value={value}
						placeholder="Email"
						placeholderTextColor="#65727a"
						error={errors.email}
						errorText={errors?.email?.message}
					/>
				)}
				rules={{
					required: {
						value: true,
						message: 'Field is required!'
					},
					pattern: {
						value: EMAIL_REGEX,
						message: 'Email is not valid'
					},
				}}

			/>
			<Controller
				name="password"
				control={control}
				render={({ field: { onChange, value } }) => (
					<Input
						onChangeText={onChange}
						value={value}
						placeholder="Password"
						placeholderTextColor="#65727a"
						secureTextEntry={true}
						error={errors?.password}
						errorText={errors?.password?.message}
					/>
				)}
				rules={{
					required: {
						value: true,
						message: 'Field is required!'
					},
					minLength: {
						value: 8,
						message: 'Password length min 8 chars'
					},
				}}
			/>
			<CustomButton
				text='Login'
				onPress={handleSubmit(handleLogin)}
			/>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		padding: 40,
	},
})

