import React, {useEffect, useState} from "react";
import { StyleSheet, Image, View, FlatList, Text } from "react-native";
import {Card, Button} from "../components/";
import { theme } from "../styles/theme";
import { Ionicons } from '@expo/vector-icons'; 

const ImagePreview = ({images, onClose}) => {
	const [selected, setSelected] = useState(0);

	useEffect(() => {
		setSelected(0);
	}, [images]);

	const renderItem = ({item, index }) => {
		return (
			<Card style={selected == index ? [styles.item, {borderColor: theme.colors.red100, borderWidth: 1}] : styles.item} onPress={() => setSelected(index)}>
				<Image source={item} style={styles.image} />
			</Card>
		);
	}

	const deletePhoto = () => {
		images.splice(selected, 1);
		setSelected(0);
	}

	return (
		<View style={styles.container}>
			<View style={styles.selectedImageContainer}>
				<Button name="icon" style={styles.btn} onPress={() => onClose()}><Ionicons name="close" size={25} color="white" /></Button>
				<Button name="icon" style={styles.btn} onPress={() => deletePhoto()}><Ionicons name="trash-outline" size={25} color="white" /></Button>
				<Image source={images[selected]} style={styles.selectedImage} />
			</View>
			<FlatList
				data={images ? images : []}
				renderItem={renderItem}
				keyExtractor={(item) => item.id}
				style={styles.imageList}
				horizontal={true}
			/>
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
	selectedImageContainer: {
		position: "absolute",
		top: 0,
		width: "100%",
		height: "100%",
		justifyContent: "center",
		alignItems: "center",

	},
	selectedImage: {
		width: "100%",
		height: "100%",
		resizeMode: "cover",
	},
	item: {
		padding: 0,
		width: 100
	},
	imageList: {
		position: "absolute",
		bottom: 0,
		height: 160,
		width: "100%",
		zIndex: 1,
	},
	image: {
		width: "100%",
		height: "100%",
		shadowOpacity: 0,
		resizeMode: "cover",
		zIndex: -1,
	},
	btn: {
		position: 'absolute', 
		top: 50,
		zIndex: 1, 
		width: 50,
		height: 50
	}
});

export default ImagePreview;
