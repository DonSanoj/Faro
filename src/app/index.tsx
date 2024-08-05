import { Link, Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function Home() {
    return (
        <SafeAreaView style={styles.container}>
            <StatusBar style='light' />
            <Stack.Screen options={{ headerShown: false }} />

            <Link href={"/onboarding"} asChild style={styles.continueBtn}>
                <Text>Continue</Text>
            </Link>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000',
        alignItems: 'center',
        justifyContent: 'center',
        color: '#fff',
    },
    continueBtn: {
        color: '#fff',
        fontSize: 40,
        padding: 20,
        // backgroundColor: '#606060',
        // borderRadius: 50,
    }
});
