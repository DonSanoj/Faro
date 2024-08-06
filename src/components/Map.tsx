import { StyleSheet, Text, View } from "react-native";
import { StatusBar } from "expo-status-bar";
import { Stack } from "expo-router";
import MapView from "react-native-maps";
import { useState } from "react";

import places from "../../assets/map/place.json";
import CustomMarker from "./CustomMarker";
import Places from "./Places";

export default function Map() {

    const [selectedApartment, setSelectedApartment] = useState<{ id: number; latitude: number; longitude: number; price: number; title: string; numberOfStars: number; rating: number; image: string; } | null>(null);

    return (
        <View style={styles.page}>
            <StatusBar style="light" />
            <Stack.Screen options={{ headerShown: false }} />

            <View>
                <MapView
                    // provider={PROVIDER_GOOGLE}
                    style={styles.map}
                    initialRegion={{
                        latitude: 37.78825,
                        longitude: -122.4324,
                        latitudeDelta: 0.0922,
                        longitudeDelta: 0.0421
                    }}
                >
                    {places.map((places) => (
                        <CustomMarker
                            key={places.id}
                            places={places}
                            onPress={() => setSelectedApartment(places)}
                        />
                    ))}
                </MapView>

                {selectedApartment && <Places place={selectedApartment} />}
            </View>

        </View>
    );
}

const styles = StyleSheet.create({
    page: {
        backgroundColor: '#fff',
        flex: 1,
        justifyContent: 'center',
    },
    pageContent: {
        // padding: 2,
        // flex: 1,
    },

    map: {
        width: '100%',
        height: '100%',
    }
});