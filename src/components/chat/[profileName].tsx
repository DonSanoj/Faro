import { View, Text, StyleSheet } from "react-native";
import { useGlobalSearchParams, useRouter } from "expo-router";

export default function ChatScreen() {
    const { profileName } = useGlobalSearchParams();

    

    return (
        <View style={styles.container}>
            <Text style={styles.header}>Chat with {profileName}</Text>
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
    header: {
        color: 'white',
        fontSize: 24,
        fontWeight: 'bold',
    }
});
