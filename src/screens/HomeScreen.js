// src/screens/HomeScreen.js
import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';

const HomeScreen = ({ navigation }) => {
    const [numItems, setNumItems] = useState(2);
    const [items, setItems] = useState(['', '']);

    const handleInputChange = (text, index) => {
        const newItems = [...items];
        newItems[index] = text;
        setItems(newItems);
    };

    const handleStart = () => {
        navigation.navigate('WheelScreen', { items });
    };

    return (
        <View>
            <Text>Enter number of items (2-20):</Text>
            <TextInput
                value={String(numItems)}
                onChangeText={text => {
                    const val = Math.max(2, Math.min(20, Number(text)));
                    setNumItems(val);
                    setItems(new Array(val).fill(''));
                }}
                keyboardType="numeric"
            />
            {items.map((item, index) => (
                <TextInput
                    key={index}
                    placeholder={`Item ${index + 1}`}
                    value={item}
                    onChangeText={text => handleInputChange(text, index)}
                />
            ))}
            <Button title="Create Wheel" onPress={handleStart} />
        </View>
    );
};

export default HomeScreen;
