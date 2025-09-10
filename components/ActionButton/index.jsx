import { Pressable, StyleSheet, Text } from "react-native";

export const ActionButton = ({ active, onPress, name }) => {
    return (
        <Pressable style={active ? styles.contextButtonTextActive : null}
            onPress={onPress}>
            <Text style={styles.contextButtonText}>{name}</Text>
        </Pressable>
    )
}
const styles = StyleSheet.create({
    contextButtonText: {
        fontSize: 12.5,
        color: "#FFF",
        padding: 8
    },
    contextButtonTextActive: {
        backgroundColor: "#144480",
        borderRadius: 8
    },
});



