import { View, Text, StyleSheet, Pressable } from "react-native";
import { router, Stack, useLocalSearchParams, useRouter } from "expo-router";
import { FontAwesome, Ionicons } from "@expo/vector-icons";
import { StatusBar } from "expo-status-bar";

export default function ChatScreen() {

    const { profileName } = useLocalSearchParams();

    const handleBackBtn = () => {
        router.back();
    }

    const handleCall = () => {
        console.log('Make Call');
    }

    return (
        <View style={styles.container}>
            <StatusBar style='light' />
            <Stack.Screen options={{ headerShown: false }} />

            <View style={styles.chatScreenHeader}>
                <View style={{ flexDirection: 'row', alignItems: 'center', gap: 10 }}>
                    <Pressable onPress={handleBackBtn}>
                        <Ionicons name="chevron-back" size={40} color="white" />
                    </Pressable>
                    <Text style={{ color: 'white', fontSize: 22, fontWeight: '500' }}>{profileName}</Text>
                </View>
                <Pressable onPress={handleCall}>
                    <FontAwesome name="phone" size={35} color="white" style={styles.makeCalls} />
                </Pressable>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#000',
    },

    chatScreenHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
        padding: 8,
        flex: 1,
    },
    makeCalls: {
        padding: 10,
        // backgroundColor: '#fff',
        borderRadius: 30,
        alignItems: 'center',
        justifyContent: 'center',
    },
});
