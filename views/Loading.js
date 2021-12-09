import React from 'react';
import { theme } from "../styles/theme";
import {StyleSheet, View, ActivityIndicator} from 'react-native';

const Loading = () => {
    return (
        <View style={styles.container}>
            <ActivityIndicator size="large" color={theme.colors.red80} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        height: "100%",
    }
})

export default Loading;