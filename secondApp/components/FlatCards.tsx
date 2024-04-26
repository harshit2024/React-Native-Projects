/* eslint-disable prettier/prettier */
import { StyleSheet, Text, View } from "react-native";
import React from "react";

export default function FlatCards() {
    return (
        <View>
            <Text style={styles.text}>FlatCards</Text>
            <View style={styles.container}>
                <View style={styles.cardOne}>
                    <Text>Card 1</Text>
                </View>
                <View style={styles.cardTwo}>
                    <Text>Card 2</Text>
                </View>
                <View style={styles.cardThree}>
                    <Text>Card 3</Text>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    text: {
        fontSize: 20,
        fontWeight: "bold",
        marginTop: 20,
        paddingLeft: 15,
    },
    container: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        padding: 15,
    },
    cardOne: {
        backgroundColor: "#FFC3A0",
        width: 100,
        height: 100,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    },
    cardTwo: {
        backgroundColor: "#C0D6E4",
        width: 100,
        height: 100,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    },
    cardThree: {
        backgroundColor: "#66CDAA",
        width: 100,
        height: 100,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    },
});
