import { configureStore, combineReducers } from "@reduxjs/toolkit";

import {
	persistStore,
	persistReducer,
	FLUSH,
	REHYDRATE,
	PAUSE,
	PERSIST,
	PURGE,
	REGISTER,
} from 'redux-persist'
import AsyncStorage from "@react-native-async-storage/async-storage";

import cardsReducer from './cardsSlice';
import authSlice from './authSlice';
import userSlice from "./userSlice";

const rootReducer = combineReducers({
	cards: cardsReducer,
	userAuth: authSlice,
	user: userSlice,
});

const persistConfig = {
	key: 'root',
	storage: AsyncStorage,
	whitelist: ['userAuth']
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

const store = configureStore({
	reducer: persistedReducer,
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware({
			serializableCheck: {
				ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
			},
		}),
});

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof rootReducer>


export const persistor = persistStore(store);
export default store;

