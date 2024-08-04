import { router, Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { Text, View, StyleSheet, Pressable } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Ionicons from '@expo/vector-icons/Ionicons';
import { FontAwesome5 } from "@expo/vector-icons";
import { useState } from "react";

const onboardingSteps = [
    {
        icon: 'car',
        iconColor: '#EB3678',
        title: 'Dealership Locator',
        description: 'Find the nearest car dealerships and explore a variety of vehicle options.',
    },
    {
        icon: 'tools',
        iconColor: '#4DB6FF',
        title: 'Service Station Finder',
        description: 'Locate service stations for car repairs, body painting, and maintenance.',
    },
    {
        icon: 'key',
        iconColor: '#FFDE4D',
        title: 'Luxury Vehicle Rentals',
        description: 'Browse and rent vehicles by category, including luxury and semi-luxury options.',
    },
];

export default function Onboarding() {

    const [screenIndex, setScreenIndex] = useState(0);

    const data = onboardingSteps[screenIndex];

    const onContinue = () => {
        const isLastScreen = screenIndex === onboardingSteps.length - 1
        if (isLastScreen) {
            endOnboarding();
        } else {
            setScreenIndex(screenIndex + 1);
        }
    }

    const endOnboarding = () => {
        setScreenIndex(0);
        router.navigate('/home');
    }

    return (
        <SafeAreaView style={styles.page}>
            <StatusBar style="light" />
            <Stack.Screen options={{ headerShown: false }} />

            <View style={styles.pageContent}>

                <View style={styles.stepIndicatorContainer}>
                    {onboardingSteps.map((step, index) => (
                        <View
                            key={index}
                            style={[styles.stepIndicator, { backgroundColor: index === screenIndex ? `${data.iconColor}` : '#302E38' }]} />
                    ))}
                </View>

                <View style={styles.content}>

                    <FontAwesome5
                        style={styles.image}
                        name={data.icon}
                        size={150}
                        color={data.iconColor}
                    />

                    <Text style={styles.title}>{data.title}</Text>
                    <Text style={styles.description}>
                        {data.description}
                    </Text>
                </View>

            </View>

            <View style={styles.buttonRow}>

                <Text
                    style={[styles.buttonText, { color: 'grey' }]}
                    onPress={endOnboarding}
                >
                    Skip
                </Text>

                <Pressable onPress={onContinue} style={styles.button}>
                    <Text style={styles.buttonText}>Continue</Text>
                </Pressable>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    page: {
        backgroundColor: '#000',
        flex: 1,
        justifyContent: 'center',
    },

    pageContent: {
        padding: 20,
        flex: 1,
    },

    content: {
        marginTop: 'auto',
    },
    image: {
        alignSelf: 'center',
        margin: 20,
        marginTop: 50,
    },
    title: {
        color: 'white',
        fontSize: 50,
        fontWeight: '700',
        marginVertical: 15,
    },
    description: {
        color: 'grey',
        fontSize: 18,
        lineHeight: 28,
    },

    buttonRow: {
        padding: 20,
        marginTop: 80,
        flexDirection: 'row',
        alignItems: 'center',
        gap: 20,
    },
    button: {
        backgroundColor: '#302E38',
        borderRadius: 50,
        alignItems: 'center',
        flex: 1,
    },
    buttonText: {
        color: '#FDFDFD',
        fontSize: 18,
        padding: 15,
        paddingHorizontal: 25,
    },

    stepIndicatorContainer: {
        flexDirection: 'row',
        gap: 8,
    },
    stepIndicator: {
        flex: 1,
        height: 5,
        backgroundColor: '#302E38',
        borderRadius: 50,
    },
})