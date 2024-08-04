import { FontAwesome5, Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import HomeTopButton from "../components/HomeTopButton";

export default function HomeScreen() {
    return (
        <SafeAreaView style={styles.page}>
            <StatusBar style='light' />
            <Stack.Screen options={{ headerShown: false }} />

            <View style={styles.pageContent}>

                <HomeTopButton />

                <View>
                    
                </View>

            </View>
        </SafeAreaView>
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