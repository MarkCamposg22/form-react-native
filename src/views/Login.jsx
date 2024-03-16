import { Alert, StyleSheet, View } from "react-native";

import { Input, Button, Typography, OrDivider } from "../components";

export function Login() {
    return (
        <View style={styles.container}>
            <Typography text="Bem vindo!" variant="title" />
            <View style={styles.form}>
                <Typography variant="subtitle" text="Entre na sua conta para acessar nossa plataforma." />
                <Input placeholder="E-mail" />
                <Input placeholder="Senha" secureTextEntry />
                <Button onPress={() => Alert.alert('Entrar')} />
                <OrDivider />
            </View>
            <Typography
                text="Criar uma conta"
                variant="link"
                onPress={() => Alert.alert("Criar conta")}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-evenly',
        maxHeight: '90%'
    },
    form: {
        width: '90%',
        height: '50%',
        alignItems: 'center',
        gap: 16
    },
});
