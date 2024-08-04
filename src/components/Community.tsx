import { AntDesign, FontAwesome, MaterialCommunityIcons } from "@expo/vector-icons";
import { useState } from "react";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";

const postDetails = [
    {
        profileImg: "https://images.pexels.com/photos/1704488/pexels-photo-1704488.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        profileName: "Don Sanoj",
        postTime: "12h",
        caption: "Excited to be here with you all!",
        content: "https://images.pexels.com/photos/170811/pexels-photo-170811.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
        profileImg: "https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        profileName: "John Doe",
        postTime: "12h",
        caption: "Let's share and grow together!",
        content: "Post content goes here",
    },
    {
        profileImg: "https://images.pexels.com/photos/943084/pexels-photo-943084.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        profileName: "Alice",
        postTime: "12h",
        caption: "Happy to connect with everyone!",
        content: "https://images.pexels.com/photos/593172/pexels-photo-593172.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
        profileImg: "https://images.pexels.com/photos/1310522/pexels-photo-1310522.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        profileName: "Eve",
        postTime: "12h",
        caption: "Greetings, fellow members!",
        content: "Post content goes here",
    },
    {
        profileImg: "https://images.pexels.com/photos/1040880/pexels-photo-1040880.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        profileName: "Walter",
        postTime: "12h",
        caption: "Thrilled to join this community!",
        content: "https://images.pexels.com/photos/112460/pexels-photo-112460.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
];

export default function Community() {

    const [hiddenPosts, setHiddenPosts] = useState<number[]>([]);

    const hidePost = (index: number) => {
        setHiddenPosts([...hiddenPosts, index]);
    };

    return (
        <View style={styles.content}>

            {postDetails.map((post, index) => {
                if (hiddenPosts.includes(index)) return null;

                return (
                    <View key={index} style={{ marginBottom: 30, borderBottomWidth: 2, borderBottomColor: 'grey' }}>
                        <View style={styles.profileInfo} >
                            <View style={{ flexDirection: 'row', gap: 10, alignItems: 'center' }}>
                                <Image source={{ uri: post.profileImg }} style={styles.profileImg} />

                                <View style={{ rowGap: 1 }}>
                                    <Text style={styles.profileName}>{post.profileName}</Text>
                                    <Text style={{ color: '#B4B4B8', }}>{post.postTime}</Text>
                                </View>
                            </View>

                            <Pressable onPress={() => hidePost(index)}>
                                <AntDesign name="close" size={24} color="#B4B4B8" />
                            </Pressable>
                        </View>

                        <View style={styles.caption}>
                            <Text style={styles.captionText}>{post.caption}</Text>
                        </View>

                        <View style={styles.postContent}>
                            {post.content.startsWith('http') ? (
                                <Image source={{ uri: post.content }} style={styles.postContentImage} />
                            ) : (
                                <Text style={styles.postContentText}>{post.content}</Text>
                            )}
                        </View>

                        <View style={styles.actionInfo}>
                            <Text style={styles.actionInfoText}>12 Likes</Text>
                            <View style={{ flexDirection: 'row', gap: 15 }}>
                                <Text style={styles.actionInfoText}>3 Comments</Text>
                                <Text style={styles.actionInfoText}>2 Shares</Text>
                            </View>
                        </View>

                        <View style={styles.actionBtn}>

                            <View style={{ flexDirection: 'row', gap: 5, alignItems: 'center' }}>
                                <AntDesign name="like2" size={24} color="#B4B4B8" />
                                <Text style={styles.actionBtnText}>Like</Text>
                            </View>
                            <View style={{ flexDirection: 'row', gap: 5, alignItems: 'center' }}>
                                <FontAwesome name="comment-o" size={24} color="#B4B4B8" />
                                <Text style={styles.actionBtnText}>Comment</Text>
                            </View>
                            <View style={{ flexDirection: 'row', gap: 5, alignItems: 'center' }}>
                                <MaterialCommunityIcons name="share-outline" size={24} color="#B4B4B8" />
                                <Text style={styles.actionBtnText}>Share</Text>
                            </View>

                        </View>

                    </View>
                );

            })}

        </View >
    );
}

const styles = StyleSheet.create({
    content: {
        padding: 15,
        marginTop: 8,
    },

    profileInfo: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
        justifyContent: 'space-between',
    },
    profileImg: {
        width: 45,
        height: 45,
        borderRadius: 50,
        backgroundColor: '#000',
    },
    profileName: {
        fontSize: 18,
        color: '#fff',
        fontWeight: '700',
    },

    caption: {
        marginBottom: 15,
    },
    captionText: {
        color: '#fff',
        fontSize: 15,
    },
    postContent: {
        marginBottom: 16,
    },
    postContentImage: {
        width: '100%',
        height: 200,
        borderRadius: 10,
    },
    postContentText: {
        color: '#fff',
        fontSize: 18,
    },

    actionInfo: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 15,
    },
    actionInfoText: {
        color: '#B4B4B8',
        fontSize: 15,
    },
    actionBtn: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        color: 'white',
        marginBottom: 16,
    },
    actionBtnText: {
        color: '#B4B4B8',
        fontSize: 15,
        fontWeight: '600',
    }
})