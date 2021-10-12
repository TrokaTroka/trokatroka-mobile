import React from "react";
import { StyleSheet, View, Pressable} from "react-native";


const Card = ({children, onPress}) => {

    return (
        <Pressable style={styles.card} onPress={onPress}> 
            {children}
        </Pressable>
    );
}

const styles = StyleSheet.create({
    card: {
        margin: 5,
        borderWidth: 1,
        borderColor: "#c8c8c8",
        borderRadius: 3,
        padding: 15,
        width: 300,
        height: 150    
    }
})

export default Card;