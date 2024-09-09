import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Wheel = ({ items }) => {
    const truncatedItems = items.map(item => item.split(' ').slice(0, 3).join(' '));

    return (
        <View style={styles.wheel}>
            {truncatedItems.map((item, index) => (
                <Text key={index} style={styles.wheelText}>
                    {item}
                </Text>
            ))}
        </View>
    );
};

const styles = StyleSheet.create({
    wheel: {
        height: 300,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1,
        borderRadius: 150,
        borderColor: '#000',
    },
    wheelText: {
        fontSize: 20,
        marginVertical: 10,
    },
});

export default Wheel;
