import React from 'react';
import { TextInput } from 'react-native';

const ItemInput = ({ placeholder, value, onChangeText }) => {
    return (
        <TextInput
            placeholder={placeholder}
            value={value}
            onChangeText={onChangeText}
            style={{
                borderWidth: 1,
                borderColor: '#ccc',
                marginBottom: 10,
                paddingHorizontal: 10,
                height: 40,
            }}
        />
    );
};

export default ItemInput;
