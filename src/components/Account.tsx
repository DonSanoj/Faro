import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

export default function Account() {
    return (
        <View style={styles.page}>
            <StatusBar style='light' />
            <Stack.Screen options={{ headerShown: false }} />

            <View>
                <Text style={{ color: 'white', fontSize: 38, fontWeight: '700' }}>Account</Text>
            </View>

        </View>
    );
}

const styles = StyleSheet.create({
    page: {
        backgroundColor: '#000',
        flex: 1,
        justifyContent: 'center',
        padding: 20
    },
})