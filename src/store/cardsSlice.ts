import { AppDispatch, RootState } from './index';
import { ICard } from '../models/ICard';
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

interface CardsState {
	cards: ICard[];
	isLoading: boolean;
	isRefreshing: boolean,
	error: string | unknown;
	page: number;
}

const initialState: CardsState = {
	cards: [],
	isLoading: false,
	isRefreshing: false,
	error: '',
	page: 1
}

export const fetchCards = createAsyncThunk<void, number, { rejectValue?: unknown, dispatch?: AppDispatch }>(
	'cards/fetchCards',
	async function (currPage, { rejectWithValue, dispatch }) {

		try {
			const response = await fetch(`https://picsum.photos/v2/list?page=${currPage}&limit=5`);

			if (!response.ok) {
				throw new Error('Server Error!');
			}

			const data = await response.json();

			dispatch(refreshCards(data))

		} catch (error) {
			if (error instanceof Error) {
				return rejectWithValue(error.message);
			}
		}
	}
);

export const loadMoreCards = createAsyncThunk<void, number, { rejectValue?: unknown, dispatch?: AppDispatch }>(
	'cards/loadMoreCards',
	async function (currPage, { rejectWithValue, dispatch }) {

		try {
			const response = await fetch(`https://picsum.photos/v2/list?page=${currPage}&limit=5`);

			if (!response.ok) {
				throw new Error('Server Error!');
			}

			const data = await response.json();

			dispatch(loadMore(data))

		} catch (error) {
			if (error instanceof Error) {
				return rejectWithValue(error.message);
			}
		}
	}
);

const cardsSlice = createSlice({
	name: 'cards',
	initialState,
	reducers: {
		refreshCards(state, action) {
			state.cards = action.payload;
			state.page = 1;
		},
		loadMore(state, action) {
			state.cards.push(...action.payload);
		},
		pageIncrement(state) {
			state.page += 1;
		},
	},
	extraReducers: (builder) => {
		builder.addCase(fetchCards.pending, (state) => {
			state.isRefreshing = true;
			state.error = '';
		})

		builder.addCase(fetchCards.fulfilled, (state) => {
			state.isRefreshing = false;
		})

		builder.addCase(fetchCards.rejected, (state, action) => {
			state.error = action.payload;
		})

		builder.addCase(loadMoreCards.pending, (state) => {
			state.isLoading = true;
			state.error = '';
		})

		builder.addCase(loadMoreCards.fulfilled, (state) => {
			state.isLoading = false;
		})

		builder.addCase(loadMoreCards.rejected, (state, action) => {
			state.error = action.payload;
		})
	},
});

export const { loadMore, refreshCards, pageIncrement } = cardsSlice.actions;

export const selectCards = (state: RootState) => state.cards;

export default cardsSlice.reducer;


