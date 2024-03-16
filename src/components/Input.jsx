import { StyleSheet, TextInput } from "react-native"

export function Input(props) {
    return (
        <TextInput
            {...props}
            style={styles.input}
            placeholderTextColor={'#ABABAB'}
        />
    )
}

const styles = StyleSheet.create({
    input: {
        backgroundColor: '#1A1A1A',
        color: '#FFFFFF',
        fontSize: 25,
        padding: 20,
        width: '100%',
        borderRadius: 10,
    },
})
