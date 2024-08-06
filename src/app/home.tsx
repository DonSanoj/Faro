import { FontAwesome5, Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { Pressable, StyleSheet, Text, View, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import HomeTopButton from "../components/HomeTopButton";
import Community from "../components/Community";
import Rentals from "../components/Rentals";
import FooterButton from "../components/FooterButton";
import Map from "../components/Map";
import Message from "../components/Message";
import Account from "../components/Account";

export default function HomeScreen() {

    const [activeButton, setActiveButton] = useState('community');
    const [activeFooterBtn, setActiveFooterBtn] = useState('Home');

    const handleFooterPress = (button: any) => {
        setActiveFooterBtn(button);
        if (button === 'Home') {
            setActiveButton('community');
        } else if (button === 'Map') {
            setActiveButton('map');
        } else if (button === 'Message') {
            setActiveButton('message');
        } else if (button === 'Account') {
            setActiveButton('account');
        }
    }

    return (
        <SafeAreaView style={styles.page}>
            <StatusBar style='light' />
            <Stack.Screen options={{ headerShown: false }} />

            <View style={styles.pageContent}>

                {activeButton !== 'map' && activeButton !== 'message' && activeButton !== 'account' && (
                    <HomeTopButton activeButton={activeButton} setActiveButton={setActiveButton} />)
                }

                {activeButton === 'map' ? (
                    <Map />
                ) : (
                    <ScrollView>
                        {activeButton === 'community' && <Community />}
                        {activeButton === 'rentals' && <Rentals />}
                        {activeButton === 'message' && <Message />}
                        {activeButton === 'account' && <Account />}
                    </ScrollView>
                )}

            </View>

            <FooterButton activeFooterBtn={activeFooterBtn} setActiveFooterBtn={handleFooterPress} />

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