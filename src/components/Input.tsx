import React, { FC } from 'react'

import { StyleSheet, Text, View, TextInput, TextInputProps } from 'react-native'

interface Input {
	onChangeText?: (...event: any[]) => void;
	value?: any;
	placeholder?: string | undefined;
	placeholderTextColor?: string | undefined;
	secureTextEntry?: boolean | undefined;
	error?: string | undefined;
	errorText?: string | undefined;
}

export const Input: FC<Input> = (props) => {
	return (
		<View style={styles.wrapper}>
			<TextInput
				{...props}
				style={[styles.input, props.error ? styles.error : null]}
			/>
			{props.errorText
				?
				(
					<Text style={styles.errorText} >{props.errorText}</Text>
				)
				:
				null
			}
		</View>
	)
}

const styles = StyleSheet.create({
	wrapper: {
		marginBottom: 20,
	},
	input: {
		marginTop: 20,
		borderBottomWidth: 1,
		borderBottomColor: '#65727a',
		color: '#fff',
	},
	error: {
		borderBottomColor: '#e54044',
	},
	errorText: {
		marginTop: 5,
		color: '#e54044',
	},
})