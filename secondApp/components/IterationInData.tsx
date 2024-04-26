/* eslint-disable prettier/prettier */
import { Image, Text, View, StyleSheet, ScrollView } from 'react-native';
import React from 'react';

export default function IterationInData() {
    const contents = [
        {
            'uid': '1',
            'name': 'John Doe',
            'status': 'Active',
            'imageUrl': 'https://images.pexels.com/photos/12190795/pexels-photo-12190795.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        },
        {
            'uid': '2',
            'name': 'Jane Smith',
            'status': 'Inactive',
            'imageUrl': 'https://images.pexels.com/photos/12190795/pexels-photo-12190795.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        },
        {
            'uid': '3',
            'name': 'Michael Johnson',
            'status': 'Active',
            'imageUrl': 'https://images.pexels.com/photos/12190795/pexels-photo-12190795.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        },
        {
            'uid': '4',
            'name': 'Emily Williams',
            'status': 'Active',
            'imageUrl': 'https://images.pexels.com/photos/12190795/pexels-photo-12190795.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        },
        {
            'uid': '5',
            'name': 'David Brown',
            'status': 'Inactive',
            'imageUrl': 'https://images.pexels.com/photos/12190795/pexels-photo-12190795.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        },
        {
            'uid': '6',
            'name': 'Sarah Taylor',
            'status': 'Active',
            'imageUrl': 'https://images.pexels.com/photos/12190795/pexels-photo-12190795.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        },
        {
            'uid': '7',
            'name': 'Christopher Lee',
            'status': 'Active',
            'imageUrl': 'https://images.pexels.com/photos/12190795/pexels-photo-12190795.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        },
        {
            'uid': '8',
            'name': 'Amanda Garcia',
            'status': 'Inactive',
            'imageUrl': 'https://images.pexels.com/photos/12190795/pexels-photo-12190795.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        },
    ];

    return (
        <View>
            <Text style={styles.textHeading}>Contact Info</Text>
            <ScrollView style={styles.container} scrollEnabled={false}>
                {contents.map(({ uid, name, status, imageUrl }) => (


                    <View key={uid} style={styles.userCard}>
                        <Image style={styles.userImage} source={{ uri: imageUrl }} />

                        <View style={styles.text}>
                            <Text style={styles.userName}>{name}</Text>
                            <Text style={styles.userStatus}>{status}</Text>
                        </View>

                    </View>

                ))}
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    userImage: {
        width: 60,
        height: 60,
        borderRadius: 30,
        marginVertical: 5,
        marginLeft: 15,
    },
    userCard: {
        display: 'flex',
        flexDirection: 'row',
        backgroundColor: '#ac00e6',
        borderRadius: 10,
        marginVertical: 5,

    },
    userName: {
        fontSize: 18,
        fontWeight: '600',

    },
    userStatus: {},
    container: {
        paddingHorizontal: 15,

    },
    textHeading: {
        fontSize: 20,
        fontWeight: 'bold',
        paddingLeft: 15,
    },
    text: {
        marginLeft: 15,
        justifyContent: 'center',
    }

});