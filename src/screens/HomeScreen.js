import React, { useState } from 'react';
import { View, Text, TextInput, Button, ScrollView } from 'react-native';

const HomeScreen = ({ navigation }) => {
    const [numItems, setNumItems] = useState('');
    const [items, setItems] = useState([]);

    const handleNumItemsChange = (text) => {
        const number = parseInt(text, 10);

        if (!isNaN(number) && number >= 1 && number <= 20) {
            let newItems = [];
            for (let i = 0; i < number; i++) {
                newItems.push('');
            }
            setItems(newItems);
            setNumItems(text);
        } else if (text === '') {
            // Allow clearing the input
            setNumItems('');
            setItems([]);
        }
    };

    const handleItemChange = (value, index) => {
        let newItems = [...items];
        newItems[index] = value;
        setItems(newItems);
    };

    return (
        <View style={{ flex: 1, padding: 20 }}>
            <Text>Enter the number of items (between 1 and 20):</Text>
            <TextInput
                style={{ height: 40, borderColor: 'gray', borderWidth: 1, marginBottom: 20 }}
                keyboardType="numeric"
                value={numItems}
                onChangeText={handleNumItemsChange}
                placeholder="Enter a number"
            />
            <ScrollView style={{ marginBottom: 20 }}>
                {items.map((item, index) => (
                    <TextInput
                        key={index}
                        style={{ height: 40, borderColor: 'gray', borderWidth: 1, marginBottom: 10 }}
                        placeholder={`Item ${index + 1}`}
                        value={item}
                        onChangeText={(text) => handleItemChange(text, index)}
                    />
                ))}
            </ScrollView>
            <Button
                title="Create Wheel"
                onPress={() => navigation.navigate('Wheel', { items })}
                disabled={items.length === 0 || items.some((item) => item === '')}
            />
        </View>
    );
};

export default HomeScreen;
