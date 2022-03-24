import React, { FC } from 'react'

import { ActivityIndicator, FlatList, View } from 'react-native'
import { Card } from './Card';

import { ICard } from '../models/ICard';

interface CardsListProps {
	cards: ICard[];
	isLoading: boolean;
	isRefreshing: boolean;
	onRefresh: () => void;
	loadMore: () => void;
}

export const CardsList: FC<CardsListProps> = ({ cards, isLoading, isRefreshing, onRefresh, loadMore }) => {

	const renderItem = ({ item }: { item: any }): JSX.Element => (
		<Card url={item.download_url} author={item.author} />
	);

	const renderLoader = (): JSX.Element => (
		<View>
			<ActivityIndicator size='large' color='#fff' animating={isLoading} />
		</View>
	);

	return (
		<FlatList
			data={cards}
			renderItem={renderItem}
			keyExtractor={item => item.id}
			onEndReached={loadMore}
			onEndReachedThreshold={0}
			ListFooterComponent={renderLoader}
			refreshing={isRefreshing}
			onRefresh={onRefresh}
		/>
	)
}
