import { StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import FooterButton from "./FooterButton";
import { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { Stack } from "expo-router";

export default function Map() {

    return (
        <View style={styles.page}>
            <StatusBar style="light" />
            <Stack.Screen options={{ headerShown: false }} />

            <View style={styles.pageContent}>
                <Text style={{ color: 'white' }}>Map View</Text>
            </View>

        </View>
    );
}

const styles = StyleSheet.create({
    page: {
        backgroundColor: '#000',
        flex: 1,
        justifyContent: 'center',
    },
    pageContent: {
        padding: 2,
        flex: 1,
    },
});