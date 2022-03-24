import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet } from 'react-native';

import { AppRoute } from './src/navigations/AppRoute';

import { Provider } from 'react-redux';

import { PersistGate } from 'redux-persist/integration/react';
import store, { persistor } from './src/store';


export default function App() {
	return (
		<Provider store={store}>
			<PersistGate loading={null} persistor={persistor}>
				<SafeAreaView style={styles.container}>
					<AppRoute />
					<StatusBar style="auto" />
				</SafeAreaView>
			</PersistGate>
		</Provider>
	);
}

const styles = StyleSheet.create({
	container: {
	  flex: 1,
	},
  });