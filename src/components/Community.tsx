import { AntDesign, FontAwesome, MaterialCommunityIcons } from "@expo/vector-icons";
import { useState } from "react";
import { Image, Pressable, StyleSheet, Text, View, Share, Modal } from "react-native";

const postDetails = [
    {
        profileImg: "https://images.pexels.com/photos/1704488/pexels-photo-1704488.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        profileName: "Don Sanoj",
        postTime: "12h",
        caption: "Excited to be here with you all!",
        content: "https://images.pexels.com/photos/170811/pexels-photo-170811.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        likes: 0,
        liked: false,
        comments: 0,
        shares: 0,
    },
    {
        profileImg: "https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        profileName: "John Doe",
        postTime: "12h",
        caption: "Let's share and grow together!",
        content: "Post content goes here",
        likes: 0,
        liked: false,
        comments: 0,
        shares: 0,
    },
    {
        profileImg: "https://images.pexels.com/photos/943084/pexels-photo-943084.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        profileName: "Alice",
        postTime: "12h",
        caption: "Happy to connect with everyone!",
        content: "https://images.pexels.com/photos/593172/pexels-photo-593172.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        likes: 0,
        liked: false,
        comments: 0,
        shares: 0,
    },
    {
        profileImg: "https://images.pexels.com/photos/1310522/pexels-photo-1310522.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        profileName: "Eve",
        postTime: "12h",
        caption: "Greetings, fellow members!",
        content: "Post content goes here",
        likes: 0,
        liked: false,
        comments: 0,
        shares: 0,
    },
    {
        profileImg: "https://images.pexels.com/photos/1040880/pexels-photo-1040880.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        profileName: "Walter",
        postTime: "12h",
        caption: "Thrilled to join this community!",
        content: "https://images.pexels.com/photos/112460/pexels-photo-112460.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        likes: 0,
        liked: false,
        comments: 0,
        shares: 0,
    },
];

export default function Community() {

    const [posts, setPosts] = useState(postDetails);

    const [isModalVisible, setIsModalVisible] = useState(false);
    const [selectedPost, setSelectedPost] = useState<any>(null);

    const hidePost = (index: number) => {
        setPosts(posts.filter((_, i) => i !== index));
    };

    const handleLike = (index: number) => {
        const updatedPosts = [...posts];
        updatedPosts[index].likes += updatedPosts[index].liked ? -1 : 1;
        updatedPosts[index].liked = !updatedPosts[index].liked;
        setPosts(updatedPosts);
    };

    const handleComment = (index: number) => {
        const updatedPosts = [...posts];
        updatedPosts[index].comments += 1;
        setPosts(updatedPosts);
    }

    // const handleShare = (index: number) => {
    // const updatedPosts = [...posts];
    // updatedPosts[index].shares += 1;
    // setPosts(updatedPosts);
    // }

    const showModal = (post: any) => {
        setSelectedPost(post);
        setIsModalVisible(true);
    };

    const hideModal = () => {
        setIsModalVisible(false);
        setSelectedPost(null);
    };

    const handleShare = async () => {
        if (!selectedPost) return;
        try {
            // Use Share API or any custom logic for sharing
            const result = await Share.share({
                message: `Check out this post from ${selectedPost.profileName}: ${selectedPost.caption} ${selectedPost.content}`,
            });

            if (result.action === Share.sharedAction) {
                if (result.activityType) {
                    // shared with activity type of result.activityType
                } else {
                    // shared
                    const updatedPosts = posts.map(p =>
                        p === selectedPost ? { ...p, shares: p.shares + 1 } : p
                    );
                    setPosts(updatedPosts);
                }
            } else if (result.action === Share.dismissedAction) {
                // dismissed
            }
        } catch (error: any) {
            alert(error.message);
        } finally {
            hideModal();
        }
    };


    return (
        <View style={styles.content}>

            {posts.map((post, index) => {

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
                            <Text style={styles.actionInfoText}>{post.likes} Likes</Text>
                            <View style={{ flexDirection: 'row', gap: 15 }}>
                                <Text style={styles.actionInfoText}>{post.comments} Comments</Text>
                                <Text style={styles.actionInfoText}>{post.shares} Shares</Text>
                            </View>
                        </View>

                        <View style={styles.actionBtn}>

                            <Pressable onPress={() => handleLike(index)}>
                                <View style={{ flexDirection: 'row', gap: 5, alignItems: 'center' }}>
                                    <AntDesign name="like1" size={24} color={post.liked ? "blue" : "#B4B4B8"} />
                                    <Text style={styles.actionBtnText}>Like</Text>
                                </View>
                            </Pressable>

                            <Pressable onPress={() => handleComment(index)}>
                                <View style={{ flexDirection: 'row', gap: 5, alignItems: 'center' }}>
                                    <FontAwesome name="comment-o" size={24} color="#B4B4B8" />
                                    <Text style={styles.actionBtnText}>Comment</Text>
                                </View>
                            </Pressable>

                            <Pressable onPress={() => showModal(post)}>
                                <View style={{ flexDirection: 'row', gap: 5, alignItems: 'center' }}>
                                    <MaterialCommunityIcons name="share-outline" size={24} color="#B4B4B8" />
                                    <Text style={styles.actionBtnText}>Share</Text>
                                </View>
                            </Pressable>

                        </View>

                    </View>
                );

            })}

            <Modal
                visible={isModalVisible}
                transparent={true}
                animationType="slide"
                onRequestClose={hideModal}
            >
                <View style={styles.modalContainer}>
                    <View style={styles.modalContent}>
                        <Text style={styles.modalTitle}>Share this Post</Text>
                        <Text style={styles.modalText}>{selectedPost?.caption}</Text>
                        <View style={styles.postContent}>
                            {selectedPost?.content.startsWith('http') ? (
                                <Image source={{ uri: selectedPost?.content }} style={styles.postContentImage} />
                            ) : (
                                <Text style={styles.postContentText}>{selectedPost?.content}</Text>
                            )}
                        </View>
                        <Pressable style={styles.modalButton} onPress={handleShare}>
                            <Text style={styles.modalButtonText}>Share</Text>
                        </Pressable>
                        <Pressable style={styles.modalButton} onPress={hideModal}>
                            <Text style={[styles.modalButtonText, {color: 'red'}]}>Cancel</Text>
                        </Pressable>
                    </View>
                </View>
            </Modal>

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
    },

    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    modalContent: {
        backgroundColor: '#333',
        padding: 20,
        borderRadius: 10,
        width: '80%',
        alignItems: 'center',
    },
    modalTitle: {
        color: '#fff',
        fontSize: 18,
        marginBottom: 10,
    },
    modalText: {
        color: '#fff',
        fontSize: 16,
        marginBottom: 20,
        textAlign: 'center',
    },
    modalButton: {
        backgroundColor: '#555',
        padding: 10,
        borderRadius: 10,
        marginVertical: 5,
        width: '100%',
        alignItems: 'center',
    },
    modalButtonText: {
        color: '#fff',
        fontSize: 16,
    },
})