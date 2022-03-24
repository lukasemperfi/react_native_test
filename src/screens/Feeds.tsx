import React, { FC, useEffect } from 'react';

import { StyleSheet, Text, View } from 'react-native';
import { CardsList } from '../components/CardsList';

import globalStyles from '../../style';

import { useAppDispatch, useAppSelector } from '../hooks/redux-hooks';
import { fetchCards, loadMoreCards, pageIncrement, selectCards } from '../store/cardsSlice';

import { useDidMount } from '../hooks/useDidMount';

export const Feeds: FC = () => {
	const { error } = useAppSelector(selectCards);
	const { cards, isLoading, page, isRefreshing } = useAppSelector(selectCards);
	const isMounted = useDidMount();
	const dispatch = useAppDispatch();

	useEffect(() => {
		if (isMounted) {
			dispatch(fetchCards(1))
		}
		if (!isMounted && page > 1) {
			dispatch(loadMoreCards(page))
		}
	}, [page]);


	const onRefresh = () => {
		dispatch(fetchCards(1))
	}
	const loadMore = () => {
		dispatch(pageIncrement())
	}

	return (
		<View style={[styles.container, globalStyles.darkBackground]}>
			{error ? (<Text>An error occured: {error}</Text>) : null}
			<CardsList
				cards={cards}
				isLoading={isLoading}
				isRefreshing={isRefreshing}
				onRefresh={onRefresh}
				loadMore={loadMore}
			/>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		padding: 10,
		minHeight: '100%',
	}
})