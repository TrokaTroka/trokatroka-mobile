import React from "react";
import { StyleSheet, View, Text } from "react-native";
import {Ionicons} from '@expo/vector-icons'; 
import {theme} from '../styles/theme'

const Rating = ({value}) => {

    return (
        <View style={styles.rating}> 
            <Ionicons name="star" size={16} color={theme.colors.red80} style={styles.star}/>
            <Text style={styles.value}> {value.toFixed(2)} </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    rating: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: "#fff",
        alignItems: "center",
    },
    star: {
        marginBottom: 3
    },
    value: {
        fontSize: 12,
    }
})

export default Rating;