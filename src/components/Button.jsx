import { TouchableOpacity, StyleSheet } from "react-native";
import { Typography } from "./Typography";

export function Button(props) {
    return (
        <TouchableOpacity style={styles.button} {...props}>
            <Typography text="Entrar" variant="title" />
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: '#BB86FC',
        padding: 20,
        borderRadius: 10,
        width: '100%',
        alignItems: 'center',
    }
})
