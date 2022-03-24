import React, { FC } from 'react'
import { StyleSheet, Text, TouchableOpacity } from 'react-native'

interface CustomButtonProps {
	text: string;
	onPress: () => void;
}

export const CustomButton: FC<CustomButtonProps> = ({ text, onPress }) => {

	return (
		<TouchableOpacity
			style={styles.customButton}
			onPress={onPress}
		>
			<Text style={styles.customButtonText}>{text}</Text>
		</TouchableOpacity>
	)
}

const styles = StyleSheet.create({
	customButton: {
		elevation: 8,
		backgroundColor: "#009688",
		borderRadius: 10,
		paddingVertical: 10,
		paddingHorizontal: 12
	},
	customButtonText: {
		color: "#fff",
		alignSelf: "center",
		fontSize: 14,
	}
});