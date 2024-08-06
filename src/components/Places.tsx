import { Image, StyleSheet, Text, View } from "react-native";

export default function Places({ place }: { place: any }) {
    return (
        <View style={styles.card}>
            <Image source={{ uri: place.image }} style={styles.image} />
            <View style={styles.rightContainer}>
                <Text style={styles.title}>{place.title}</Text>
                <Text style={styles.description}>
                    Stay at this apartment for an affordable price
                </Text>

                <View style={styles.footer}>
                    <Text style={styles.price}>${place.price}</Text>
                    <Text style={styles.price}>
                        ★ {place.rating} ({place.numberOfStars})
                    </Text>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    card: {
        backgroundColor: 'white',
        position: 'absolute',
        bottom: 30,
        padding: 10,
        left: 8,
        right: 12,
        flexDirection: 'row',
        borderRadius: 10,
    },
    image: {
        width: 150,
        aspectRatio: 1,
        borderRadius: 10,
    },
    rightContainer: {
        padding: 10,
        flex: 1,
    },
    title: {
        fontSize: 18,
        marginBottom: 10,
        fontWeight: 'bold',
    },
    description: {
        color: 'gray',
    },
    price: {
        fontWeight: 'bold',
    },
    footer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 'auto',
    },
});