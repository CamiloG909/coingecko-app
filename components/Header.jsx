import { View, Text, TextInput, StyleSheet, Image } from "react-native";
import React from "react";

const Header = ({ setSearch }) => {
	return (
		<View style={styles.header}>
			<View style={styles.containerTitle}>
				<Image style={styles.logo} source={require("../assets/icon.png")} />
				<Text style={styles.title}>COINGECKO</Text>
			</View>
			<TextInput
				placeholder="Search"
				placeholderTextColor="#c1c1c1"
				style={styles.input}
				onChangeText={(text) => setSearch(text)}
			/>
		</View>
	);
};

const styles = StyleSheet.create({
	header: {
		position: "absolute",
		left: 0,
		top: 0,
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
		paddingHorizontal: 10,
		width: "100%",
		height: 60,
		backgroundColor: "#2B2B2B",
		shadowColor: "#000",
		shadowOffset: {
			width: 0,
			height: 7,
		},
		shadowOpacity: 0.2,
		shadowRadius: 10,
		zIndex: 99,
	},
	containerTitle: {
		flexDirection: "row",
		alignItems: "center",
	},
	logo: {
		width: 30,
		height: 30,
	},
	title: {
		marginLeft: 10,
		fontWeight: "800",
		fontSize: 20,
		color: "#1ccc5b",
	},
	input: {
		width: "40%",
		borderBottomColor: "#1ccc5b",
		borderBottomWidth: 2,
		fontSize: 17,
		color: "#ffff",
	},
});

export default Header;
