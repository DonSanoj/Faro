import { FontAwesome5, Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function HomeTopButton() {

    const [activeButton, setActiveButton] = useState<string>('community');

    return (

        <View style={styles.topButton}>

            <Pressable
                style={[styles.button, activeButton === 'community' && styles.activeButton]}
                onPress={() => setActiveButton('community')}
            >

                <Ionicons name="people" size={26} color="white" />
                <Text style={styles.topBtnText}>Community</Text>
            </Pressable>

            <Pressable
                style={[styles.button, activeButton === 'rentals' && styles.activeButton]}
                onPress={() => setActiveButton('rentals')}
            >

                <MaterialCommunityIcons name="car-key" size={26} color="white" />
                <Text style={styles.topBtnText}>Rentals</Text>
            </Pressable>

        </View>
    );
}

const styles = StyleSheet.create({
    topButton: {
        flexDirection: 'row',
        justifyContent: 'center',
        // gap: 20,
    },
    button: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 10,
        padding: 15,

        borderBottomWidth: 3,
        width: '50%',
    },
    topBtnText: {
        color: '#fff',
        fontSize: 19,
        fontWeight: '700'
    },
    activeButton: {
        borderBottomColor: '#fff',
    },
});