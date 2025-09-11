import { Pressable, StyleSheet, Text } from "react-native";

export const FokusButton = ({onPress, title, icon}) => {
    return (

        < Pressable style={styles.button} onPress={onPress} >
            {icon}
            <Text style={styles.buttonText}>{title}</Text>
        </Pressable >

    )
}

const styles = StyleSheet.create({

    button: {
        borderRadius: 32,
        padding: 8,
        backgroundColor: "#BB72FF",
        flexDirection:"row",
        gap:12,
        alignItems:"center",
        justifyContent:"center"
    },
    buttonText: {
        color: "#021123",
        textAlign: "center",
        fontSize: 18,
        fontWeight: "bold",

    },

});

