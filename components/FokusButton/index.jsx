import { Pressable, StyleSheet, Text } from "react-native";

export const FokusButton = () => {
    return (

        < Pressable style={styles.button} >
            <Text style={styles.buttonText}>Começar</Text>
        </Pressable >

    )
}


const styles = StyleSheet.create({

    button: {
        borderRadius: 32,
        padding: 8,
        backgroundColor: "#BB72FF",
    },
    buttonText: {
        color: "#021123",
        textAlign: "center",
        fontSize: 18,
        fontWeight: "bold",

    },

});

