import { View, Text, FlatList, StyleSheet, StatusBar } from "react-native";
import React, { useEffect, useState } from "react";
import Header from "./components/Header";
import CoinItem from "./components/CoinItem";

const App = () => {
	const [loading, setLoading] = useState(false);
	const [refreshing, setRefreshing] = useState(false);
	const [search, setSearch] = useState("");
	const [coins, setCoins] = useState([]);

	const getData = async () => {
		setLoading(true);
		const response = await fetch(
			"https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false"
		);
		const data = await response.json();
		setCoins(data);
		setLoading(false);
	};

	useEffect(() => {
		getData();
	}, []);

	return (
		<View style={styles.container}>
			<StatusBar backgroundColor="#2B2B2B" barStyle={"light-content"} />
			<Header setSearch={setSearch} />
			{loading ? (
				<Text style={styles.loading}>Loading...</Text>
			) : (
				<FlatList
					data={coins.filter(
						(coin) =>
							coin.name.toLowerCase().includes(search.toLowerCase()) ||
							coin.symbol.toLowerCase().includes(search.toLowerCase())
					)}
					renderItem={({ item }) => {
						return <CoinItem coin={item} />;
					}}
					onRefresh={async () => {
						setRefreshing(true);
						await getData();
						setRefreshing(false);
					}}
					refreshing={refreshing}
					style={styles.listCoins}
					showsVerticalScrollIndicator={false}
				/>
			)}
		</View>
	);
};

const styles = StyleSheet.create({
	loading: {
		marginTop: 60,
		paddingVertical: 15,
		fontSize: 20,
		fontWeight: "600",
		color: "#ffff",
	},
	container: {
		position: "relative",
		flex: 1,
		backgroundColor: "#1b1b1b",
		alignItems: "center",
	},
	listCoins: {
		marginTop: 60,
		width: "100%",
	},
});

export default App;
