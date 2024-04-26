/* eslint-disable prettier/prettier */
import { ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";

export default function Scroller() {
    return (
        <View>
            <Text style={styles.header}>Scroller</Text>
            <ScrollView horizontal={true}>
                <View style={[styles.card, styles.elevatedCard]}>
                    <Text>Card 1</Text>
                </View>
                <View style={[styles.card, styles.elevatedCard]}>
                    <Text>Card 2</Text>
                </View>
                <View style={[styles.card, styles.elevatedCard]}>
                    <Text>Card 3</Text>
                </View>
                <View style={[styles.card, styles.elevatedCard]}>
                    <Text>Card 4</Text>
                </View>
                <View style={[styles.card, styles.elevatedCard]}>
                    <Text>Card 5</Text>
                </View>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    header: {
        fontSize: 20,
        fontWeight: "bold",
        marginLeft: 15,
    },
    card: {
        width: 100,
        height: 100,
        justifyContent: "center",
        alignItems: "center",
        margin: 15,
        marginBottom: 0,
    },
    elevatedCard: {
        backgroundColor: "#FFC3A0",
        shadowColor: "#000",
        shadowOffset: {
            width: 1,
            height: 1,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
});
