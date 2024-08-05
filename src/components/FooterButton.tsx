import { FontAwesome5, MaterialCommunityIcons } from "@expo/vector-icons";
import { Link } from "expo-router";
import { useState } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";

export default function FooterButton({ activeFooterBtn, setActiveFooterBtn }: { activeFooterBtn: string, setActiveFooterBtn: React.Dispatch<React.SetStateAction<string>> }) {

    return (
        <View style={styles.footerButton}>

            <Link href={"/home"} asChild>
                <Pressable style={{ alignItems: 'center', justifyContent: 'center' }} onPress={() => setActiveFooterBtn('Home')}>
                    <MaterialCommunityIcons name="home-variant" size={24} color={activeFooterBtn === 'Home' ? "#fff" : "#B4B4B8"} />
                    <Text style={[styles.footerText, activeFooterBtn === 'Home' && styles.activeText]}>Home</Text>
                </Pressable>
            </Link>

            {/* <Link href={"/map"} asChild> */}
                <Pressable style={{ alignItems: 'center', justifyContent: 'center' }} onPress={() => setActiveFooterBtn('Map')}>
                    <MaterialCommunityIcons name="map" size={24} color={activeFooterBtn === 'Map' ? "#fff" : "#B4B4B8"} />
                    <Text style={[styles.footerText, activeFooterBtn === 'Map' && styles.activeText]}>Map</Text>
                </Pressable>
            {/* </Link> */}

            <Pressable style={{ alignItems: 'center', justifyContent: 'center' }} onPress={() => setActiveFooterBtn('Message')}>
                <MaterialCommunityIcons name="message-text" size={24} color={activeFooterBtn === 'Message' ? "#fff" : "#B4B4B8"} />
                <Text style={[styles.footerText, activeFooterBtn === 'Message' && styles.activeText]}>Message</Text>
            </Pressable>

            <Pressable style={{ alignItems: 'center', justifyContent: 'center' }} onPress={() => setActiveFooterBtn('Account')}>
                <FontAwesome5 name="user-alt" size={24} color={activeFooterBtn === 'Account' ? "#fff" : "#B4B4B8"} />
                <Text style={[styles.footerText, activeFooterBtn === 'Account' && styles.activeText]}>Account</Text>
            </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
    footerButton: {
        padding: 10,
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    footerText: {
        color: '#B4B4B8',
        fontSize: 12,
        fontWeight: '600',
    },

    activeText: {
        color: '#fff',
    }
})