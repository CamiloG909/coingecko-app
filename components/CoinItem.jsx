import { View, Text, StyleSheet, Image } from "react-native";
import React from "react";

const CoinItem = ({ coin }) => {
	return (
		<View style={styles.containerItem}>
			<View style={styles.coinName}>
				<Image
					style={styles.coinImage}
					source={{
						uri: coin.image,
					}}
				/>
				<Text style={styles.text}>{coin.name}</Text>
				<Text style={styles.symbol}>{coin.symbol}</Text>
			</View>
			<Text
				style={[
					styles.price,
					coin.price_change_percentage_24h > 0
						? styles.priceUp
						: styles.priceDown,
				]}
			>
				$ {coin.current_price}
			</Text>
		</View>
	);
};

const styles = StyleSheet.create({
	containerItem: {
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
		paddingVertical: 12,
		paddingHorizontal: 10,
		borderBottomWidth: 1,
		borderColor: "#686868",
		color: "#ffff",
	},
	coinName: {
		flexDirection: "row",
		alignItems: "center",
	},
	coinImage: {
		width: 30,
		height: 30,
	},
	text: {
		marginLeft: 5,
		fontSize: 17,
		fontWeight: "500",
		color: "#ffff",
	},
	symbol: {
		marginLeft: 5,
		fontSize: 17,
		fontWeight: "800",
		textTransform: "uppercase",
		color: "#a1a1a1",
	},
	price: {
		fontSize: 17,
		fontWeight: "500",
	},
	priceUp: {
		color: "#1ccc5b",
	},
	priceDown: {
		color: "#ff2d2d",
	},
});

export default CoinItem;
