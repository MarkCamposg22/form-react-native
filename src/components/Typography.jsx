import { StyleSheet, Text } from "react-native";

export function Typography({ variant, text, ...props }) {
    return (
        <Text style={styles[`${variant}`]} {...props}>
            {text}
        </Text>
    );
}

const styles = StyleSheet.create({
    title: {
        fontSize: 30,
        color: '#FFFFFF',
        fontWeight: 'bold',
    },
    subtitle: {
        fontSize: 25,
        color: '#FFFFFF',
        maxWidth: '80%',
        textAlign: 'center'
    },
    caption: {
        fontSize: 16,
        color: '#ABABAB',
    },
    link: {
        fontSize: 16,
        color: '#ABABAB',
        textDecorationLine: 'underline'
    }
});
