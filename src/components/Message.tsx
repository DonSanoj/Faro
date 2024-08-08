import { Link, Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Message() {

    const users = [
        {
            profileImg: "https://images.pexels.com/photos/1704488/pexels-photo-1704488.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
            profileName: "Don Sanoj",
            lastMessageTime: "10:00",
            lastMessage: "Happy to connect with everyone!",
        },
        {
            profileImg: "https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
            profileName: "John Doe",
            lastMessageTime: "10:00",
            lastMessage: "Greetings, fellow members!",
        },
        {
            profileImg: "https://images.pexels.com/photos/943084/pexels-photo-943084.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
            profileName: "Alice",
            lastMessageTime: "10:00",
            lastMessage: "Thrilled to join this community!",
        },
        {
            profileImg: "https://images.pexels.com/photos/1310522/pexels-photo-1310522.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
            profileName: "Eve",
            lastMessageTime: "10:00",
            lastMessage: "Happy to connect with everyone!",
        },
        {
            profileImg: "https://images.pexels.com/photos/1040880/pexels-photo-1040880.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
            profileName: "Walter",
            lastMessageTime: "10:00",
            lastMessage: "Happy to connect with everyone!",
        },
    ]

    const handlePressChat = () => {
        console.log("Chat Open")
    };

    const truncateText = (text: string, length: number) => {
        return text.length > length ? text.substring(0, length - 3) + '...' : text;
    };

    return (
        <View style={styles.page}>
            <StatusBar style='light' />
            <Stack.Screen options={{ headerShown: false }} />

            <View>
                <Text style={{ color: 'white', fontSize: 38, fontWeight: '700' }}>Chats</Text>
            </View>

            {users.map((users, index) => {
                return (

                    <View key={index} style={styles.chats}>

                        <Link href={`/chat/${users.profileName}`}>
                            <View style={styles.chatContainer}>
                                <View style={{ flexDirection: 'row', gap: 10 }}>
                                    <Image source={{ uri: users.profileImg }} style={styles.profileImg} />

                                    <View style={{ justifyContent: 'center' }}>
                                        <Text style={styles.userName}>{users.profileName}</Text>
                                        <Text style={styles.lastMessage}>{truncateText(users.lastMessage, 30)}</Text>
                                    </View>
                                </View>

                                <Text style={styles.lastMessageTime}>{users.lastMessageTime}</Text>
                            </View>
                        </Link>
                    </View>

                );
            })}

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

    chats: {
        flexDirection: 'row',
        paddingTop: 20,
        paddingBottom: 8,
        borderBottomWidth: 1,
        borderBottomColor: 'grey'
    },
    chatContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: 10,
        width: '100%',

    },
    profileImg: {
        width: 50,
        height: 50,
        borderRadius: 50,
    },
    userName: {
        color: 'white',
        fontSize: 20,
        fontWeight: '500',
        marginTop: 10
    },
    lastMessage: {
        color: 'grey',
        fontSize: 16,
    },
    lastMessageTime: {
        color: 'grey',
        fontSize: 16,
    }
})