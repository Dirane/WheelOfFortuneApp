// src/screens/WheelScreen.js
import React, { useState } from 'react';
import { View, Button, Text } from 'react-native';
import Wheel from '../components/Wheel';

const WheelScreen = ({ route }) => {
    const { items } = route.params;
    const [selectedItem, setSelectedItem] = useState(null);

    const spinWheel = () => {
        const randomIndex = Math.floor(Math.random() * items.length);
        setSelectedItem(items[randomIndex]);
    };

    return (
        <View>
            <Wheel items={items} />
            <Button title="Spin" onPress={spinWheel} />
            {selectedItem && <Text>Selected Item: {selectedItem}</Text>}
        </View>
    );
};

export default WheelScreen;
