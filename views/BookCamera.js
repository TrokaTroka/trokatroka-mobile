import React, { useState, useEffect, useRef } from 'react';
import { StyleSheet, Text, View, Modal, Image } from 'react-native';
import { Camera } from 'expo-camera';
import { theme } from '../styles/theme';
import {Button} from '../components';
import {MaterialIcons, MaterialCommunityIcons } from '@expo/vector-icons'; 
import {useNavigation} from '@react-navigation/native';
import ImagePreview from './ImagePreview';

const BookCamera = () => {
	const [hasPermission, setHasPermission] = useState(null);
	const [type, setType] = useState(Camera.Constants.Type.back);
	const [ready, setReady] = useState(false);
	const [images, setImages] = useState([]);
	const [counter, setCounter] = useState(0);
	const [previewModalVisible, setPreviewModalVisible] = useState(false);

	const navigation = useNavigation();

	const camRef = useRef(null);

	useEffect(() => {
		(async () => {
			const { status } = await Camera.requestPermissionsAsync();
			setHasPermission(status === 'granted');
		})();
	}, []);

	if (hasPermission === null) {
		return <View />;
	}
	if (hasPermission === false) {
		return <Text>Sem acesso a camera</Text>;
	}

	async function takePicture() {
		if (!ready) {
			return;
		}
		if (camRef) {
			const photo = await camRef.current.takePictureAsync();
			setCounter(counter + 1);
			if(images.length < 5) {

				setImages([...images, {...photo, id: counter.toString()}]);
			} else {
				images.shift()
				setImages([...images, {...photo, id: counter.toString()}]);
			}
			console.log(camRef.current)
		}
	}
	return (
		<View style={[styles.container, { width: '100%' }]}>
			<Modal
				animationType="slide"
				transparent={true}
				visible={previewModalVisible}
				onRequestClose={() => {
					setPreviewModalVisible(!previewModalVisible);
				}}> 
				<ImagePreview images={images} onClose={() => setPreviewModalVisible(false)}/>
			</Modal>
			<Camera
				ref={camRef}
				style={styles.camera}
				pictureSize={'241x346'}
				type={type}
				onCameraReady={() => {
					setReady(true);
				}}
				onBarCodeScanned={(e) => {console.log(e)}}
			>
				<View style={{alignSelf: 'center'}}>
					<Text style={styles.text}>Posicione o livro dentro do retângulo</Text>
				</View>
				<View style={styles.camMask} />
                <View style={styles.buttonContainer}>
					<Button
						style={styles.button}
						onPress={() => setPreviewModalVisible(true)}
						title={'images preview'}
						textStyle={styles.text}
					> 
						<MaterialCommunityIcons name='camera-burst' size={25} color={'#fff'} /> 
					</Button>
					<Button
						style={[styles.button, {width: 80}]}
						onPress={takePicture}
						title='Tirar'
						textStyle={styles.text}
					> 
						<MaterialCommunityIcons name='camera-iris' size={40} color={'#fff'} /> 
					</Button>
					<Button
						style={styles.button}
						onPress={() => {
							setType(
								type === Camera.Constants.Type.back
									? Camera.Constants.Type.front
									: Camera.Constants.Type.back
							);
						}}
						title='Flip'
						textStyle={styles.text}
					> 
						<MaterialIcons name='flip-camera-android' size={25} color={'#fff'} /> 
					</Button>
				</View>
			</Camera>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		height: '100%',
		alignItems: 'center',
		justifyContent: 'center',
	},
	camera: {
		flex: 1,
		width: '100%',
		height: '100%',
	},
	buttonContainer: {
		position: 'absolute',
		bottom: 0,
		width: '100%',
		height: '10%',
		flexDirection: 'row',
		justifyContent: 'space-around',
		alignItems: 'center',
		alignSelf: 'center',
        backgroundColor: 'transparent'
	},
	button: {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		height: 50,
		width: 50,
		backgroundColor: 'transparent',
		borderWidth: 0,
	},
	text: {
		color: '#fff',
	},
	camMask: {
		borderWidth: 2,
		borderColor: 'rgba(255, 255, 255, 0.5)',
		backgroundColor: 'transparent',
		width: 241,
		height: 346,
		alignSelf: 'center',
		margin: 150,
	},
	imagePreview: {
		width: 241,
		height: 346,
	}
});
export default BookCamera;
