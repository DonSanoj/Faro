import { StyleSheet, Text, View, Alert, TouchableOpacity } from "react-native";
import { StatusBar } from "expo-status-bar";
import { Stack } from "expo-router";
import MapView, { Marker } from "react-native-maps";
import { useEffect, useRef, useState } from "react";
import * as Location from 'expo-location'; // Import the Location module

import places from "../../assets/map/place.json";
import CustomMarker from "./CustomMarker";
import Places from "./Places";
import { FontAwesome5 } from "@expo/vector-icons";

export default function Map() {

    const [selectedApartment, setSelectedApartment] = useState<{ id: number; latitude: number; longitude: number; price: number; title: string; numberOfStars: number; rating: number; image: string; } | null>(null);
    const [currentLocation, setCurrentLocation] = useState<Location.LocationObjectCoords | null>(null);
    const mapRef = useRef<MapView>(null); // Create a ref for MapView

    useEffect(() => {
        (async () => {
            let { status } = await Location.requestForegroundPermissionsAsync();
            if (status !== 'granted') {
                Alert.alert(
                    "Permission Denied",
                    "Permission to access location was denied. Please enable location services in your device settings.",
                    [{ text: "OK" }]
                );
                return;
            }

            let location = await Location.getCurrentPositionAsync({});
            setCurrentLocation(location.coords);

            // Center the map on the current location
            if (mapRef.current && location.coords) {
                mapRef.current.animateToRegion({
                    latitude: location.coords.latitude,
                    longitude: location.coords.longitude,
                    latitudeDelta: 0.0922,
                    longitudeDelta: 0.0421
                }, 1000);
            }
        })();
    }, []);

    const handleRecenter = async () => {
        if (currentLocation && mapRef.current) {

            mapRef.current.animateToRegion({
                latitude: currentLocation.latitude,
                longitude: currentLocation.longitude,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421
            }, 1000);
        } else {

            let location = await Location.getCurrentPositionAsync({});
            setCurrentLocation(location.coords);
            mapRef.current?.animateToRegion({
                latitude: location.coords.latitude,
                longitude: location.coords.longitude,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421
            }, 1000);
        }
    };

    return (
        <View style={styles.page}>
            <StatusBar style="light" />
            <Stack.Screen options={{ headerShown: false }} />

            <View>
                <MapView
                    ref={mapRef} // Attach the ref to MapView
                    style={styles.map}
                    initialRegion={{
                        latitude: currentLocation ? currentLocation.latitude : 37.78825,
                        longitude: currentLocation ? currentLocation.longitude : -122.4324,
                        latitudeDelta: 0.0922,
                        longitudeDelta: 0.0421
                    }}
                >
                    {places.map((place) => (
                        <CustomMarker
                            key={place.id}
                            places={place}
                            onPress={() => setSelectedApartment(place)}
                        />
                    ))}

                    {currentLocation && (
                        <Marker
                            coordinate={{ latitude: currentLocation.latitude, longitude: currentLocation.longitude }}
                            title="You are here"
                            pinColor="blue"
                        />
                    )}
                </MapView>

                <TouchableOpacity style={styles.recenterButton} onPress={handleRecenter}>
                    <FontAwesome5 name="location-arrow" size={28} color="white" />
                </TouchableOpacity>

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
    map: {
        width: '100%',
        height: '100%',
    },

    recenterButton: {
        position: 'absolute',
        bottom: 20,
        right: 20,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        padding: 10,
        borderRadius: 50,
        borderWidth: 3,
        borderColor: 'black',
        zIndex: 1,
        width: 60,
        height: 60,

        alignItems: 'center',
        justifyContent: 'center',
    },
});
