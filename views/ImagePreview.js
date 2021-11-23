import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, Image, View } from "react-native";
import Button from "../components/Button"
import logo from '../assets/logo.svg'
import { useRoute } from "@react-navigation/native";

const ImagePreview = () => {
    const route = useRoute();
	return (
		<View style={styles.container}>
            <Image source={route.params.photo} style={styles.image}/>
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
	}, 
    image : {
        width: '100%',
        height: '100%',
    }
});

export default ImagePreview;