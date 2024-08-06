import { Text, View } from "react-native";
import { Marker } from "react-native-maps";

export default function CustomMarker({ places, onPress }: { places: any, onPress: any }) {
    return (
        <Marker
            onPress={onPress}
            coordinate={{
                latitude: places.latitude,
                longitude: places.longitude,
            }}
        >
            <View
                style={{
                    backgroundColor: 'white',
                    padding: 5,
                    paddingHorizontal: 10,
                    borderWidth: 1,
                    borderColor: 'grey',
                    borderRadius: 20
                }}
            >
                <Text style={{ fontWeight: 'bold' }}>$ {places.price}</Text>
            </View>
        </Marker>
    );
}