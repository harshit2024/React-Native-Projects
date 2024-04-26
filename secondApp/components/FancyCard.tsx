/* eslint-disable prettier/prettier */
import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";

export default function FancyCard() {
    return (
        <View>
            <Text style={styles.headingText}>Trending Places</Text>
            <View style={[styles.card, styles.cardElevated]}>
                <Image
                    source={{
                        uri: "https://t4.ftcdn.net/jpg/01/15/24/53/240_F_115245346_vN7bdFfwD3LR4pnG4fa4EtNTArafpodb.jpg",
                    }}
                    style={styles.cardImage}
                />
                <View style={{ padding: 15 }}>
                    <Text style={styles.cardTitle}>Venice</Text>
                    <Text style={styles.cardLabel}>Italy</Text>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    headingText: {
        fontSize: 20,
        fontWeight: "bold",
        marginTop: 20,
        paddingLeft: 15,
    },
    card: {},
    cardElevated: {},
    cardImage: {
        height: 300,
        margin: 15,
        marginBottom: 0,
    },
    cardTitle: {},
    cardLabel: {},
});
