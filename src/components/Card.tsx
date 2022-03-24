import React, { FC } from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'

interface CardProps {
	url: string;
	author: string;
}

export const Card: FC<CardProps> = ({ url, author }) => {

	return (
		<View style={styles.card}>
			<Image
				source={{ uri: url }}
				style={styles.image}
			/>
			<View style={styles.textContainer}>
				<Text style={styles.cardText}>{author}</Text>
			</View>
		</View>
	)
}


const styles = StyleSheet.create({
	card: {
		borderRadius: 15,
		backgroundColor: '#e2e5e7',
		position: 'relative',
		marginBottom: 10,
	},
	image: {
		width: '100%',
		height: 200,
		borderRadius: 15,
	},
	textContainer: {
		width: '100%',
		backgroundColor: 'rgba(0, 0, 0, 0.5)',
		borderBottomLeftRadius: 15,
		borderBottomRightRadius: 15,
		position: 'absolute',
		bottom: 0,
		padding: 10,
	},
	cardText: {
		color: '#fff',
	},
})