import { registerRootComponent } from 'expo';
import { SafeAreaView, StyleSheet } from 'react-native';
import { StatusBar } from 'expo-status-bar';

import { Login } from './views/Login';

function App() {
    return (
        <SafeAreaView style={styles.safeAreaView}>
            <StatusBar translucent style="light" />
            <Login />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    safeAreaView: {
        flex: 1,
        backgroundColor: '#141414',
    }
});

export default registerRootComponent(App);
