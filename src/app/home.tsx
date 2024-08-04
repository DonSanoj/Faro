import { FontAwesome5, Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { Pressable, StyleSheet, Text, View, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import HomeTopButton from "../components/HomeTopButton";
import Community from "../components/Community";
import Rentals from "../components/Rentals";

export default function HomeScreen() {

    const [activeButton, setActiveButton] = useState('community');

    return (
        <SafeAreaView style={styles.page}>
            <StatusBar style='light' />
            <Stack.Screen options={{ headerShown: false }} />

            <View style={styles.pageContent}>

                <HomeTopButton activeButton={activeButton} setActiveButton={setActiveButton} />

                <ScrollView>
                    {activeButton === 'community' && <Community />}
                    {activeButton === 'rentals' && <Rentals />}
                </ScrollView>

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