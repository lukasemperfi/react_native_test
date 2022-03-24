import React, { FC } from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'

interface UserInfoProps {
	email: string;
	name: string;
	imageUrl: string | undefined;
}

export const UserInfo: FC<UserInfoProps> = ({ email, name, imageUrl }) => {

	return (
		<View style={styles.container}>
			<View style={styles.infoBody}>
				<Image
					source={{ uri: imageUrl }}
					style={styles.avatar}
				/>
				<View style={styles.info} >
					<Text style={styles.infoText}>Name: {name}</Text>
					<Text style={styles.infoText}>Email: {email} </Text>
				</View>
			</View>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		width: '100%',
		backgroundColor: '#65727a',
		borderRadius: 10,
		padding: 20,
		justifyContent: 'center'
	},
	infoBody: {
		flexDirection: 'row',
		alignItems: 'center',
	},
	avatar: {
		width: 60,
		height: 60,
		borderRadius: 50,
		backgroundColor: '#000',
	},
	info: {
		marginLeft: 5,
	},
	infoText: {
		color: '#fff',
	},
})