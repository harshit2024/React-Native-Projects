/* eslint-disable prettier/prettier */
import { StyleSheet, Text, View, Image, Linking, TouchableOpacity } from 'react-native';
import React from 'react';


export default function ActionCard() {
    function openWebsite(websiteUrl: string) {
        Linking.openURL(websiteUrl);
    }

    return (
        <View>
            <Text style={styles.action} >ActionCard</Text>
            <View style={[styles.card, styles.elevatedCard]}>
                <View style={styles.headingContainer}>
                    <Text style={styles.headerText}>What's New in javascript 21- ES11</Text>
                </View>
                <Image
                    source={{ uri: 'https://images.pexels.com/photos/12190795/pexels-photo-12190795.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' }}
                    style={styles.cardImage}
                />
                <View style={styles.bodyContainer}>
                    <Text numberOfLines={3} >
                        Swami Vivekananda was a Hindu monk and a key figure in the introduction of Indian philosophy and spirituality to the Western world. Born in Calcutta in 1863, he was known for his inspiring speeches and writings on Hinduism, spirituality, and the importance of individual self-realization.
                    </Text>
                </View>
                <View style={styles.bodyfooter}>
                    <TouchableOpacity onPress={() => openWebsite('https://www.google.com')}>
                        <Text style={styles.socialLink}>Read More</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => openWebsite('https://www.instagram.com')}>
                        <Text style={styles.socialLink}>follow me</Text>
                    </TouchableOpacity>
                </View>

            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    action: {

        fontSize: 20,
        fontWeight: "bold",
        paddingLeft: 15,
    },
    card: {
        height: 500,
        marginHorizontal: 15,
        marginVertical: 10,
        backgroundColor: '#34dbeb',
        borderRadius: 10,

    },
    elevatedCard: {
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    headingContainer: {
        height: 40,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",

    },
    headerText: {
        fontSize: 20,
        fontWeight: "bold",
    },
    cardImage: {
        height: 300,
        padding: 15,
        marginBottom: 0,
    },
    bodyContainer: {
        marginHorizontal: 10,
        marginVertical: 10,
    },
    bodyfooter: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginHorizontal: 10,
    },
    socialLink: {
        color: '#000000',
        backgroundColor: '#87CEEB',
        padding: 10,
        fontSize: 15,
    },
});