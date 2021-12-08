import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import {Button} from "../components"
import { useRoute } from "@react-navigation/core";
import { connect, useSelector} from "react-redux";
import {bookFilter} from "../redux/filters/BookFilter";
import { getBookById } from "../redux/actions/BookAction";

const TradeDetails = ({getBookById, bookItem}) => {
	const {params} = useRoute();
	useEffect(() => {
		getBookById(params.id);
	}, [])

	return (
		<View style={styles.container}>
            <Text>{bookItem.title}</Text>
            <Text>{bookItem.author}</Text>

		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		backgroundColor: "#fff",
		height: "100%",
		width: "100%",
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
	}
});

export default connect(bookFilter, {getBookById})(TradeDetails);