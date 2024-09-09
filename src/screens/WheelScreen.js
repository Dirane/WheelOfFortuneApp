import React, { useState, useEffect } from 'react';
import { View, Text, Button, Animated } from 'react-native';
import { Svg, Circle, G, Text as SvgText } from 'react-native-svg';

const WheelScreen = ({ route }) => {
    const { items } = route.params;
    const [spinValue] = useState(new Animated.Value(0));
    const [selectedItem, setSelectedItem] = useState(null);
    const [isSpinning, setIsSpinning] = useState(false);

    const abbreviatedItems = items.map(item => item.split(' ').slice(0, 3).join(' '));

    const startSpinning = () => {
        setIsSpinning(true);
        Animated.timing(spinValue, {
            toValue: 1,
            duration: 5000, // Spin for 5 seconds
            useNativeDriver: true,
        }).start(() => {
            setIsSpinning(false);
            setSelectedItem(items[Math.floor(Math.random() * items.length)]); // Pick a random item after spin
        });
    };

    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Svg height="300" width="300" viewBox="0 0 300 300">
                <Circle cx="150" cy="150" r="100" stroke="black" strokeWidth="2" fill="none" />
                <G>
                    {abbreviatedItems.map((item, index) => (
                        <SvgText
                            key={index}
                            x={150 + 80 * Math.cos((index / abbreviatedItems.length) * 2 * Math.PI)}
                            y={150 + 80 * Math.sin((index / abbreviatedItems.length) * 2 * Math.PI)}
                            fontSize="12"
                            fill="black"
                            textAnchor="middle"
                        >
                            {item}
                        </SvgText>
                    ))}
                </G>
            </Svg>
            <Button title={isSpinning ? "Spinning..." : "Spin the Wheel"} onPress={startSpinning} disabled={isSpinning} />
            {selectedItem && !isSpinning && (
                <View style={{ marginTop: 20 }}>
                    <Text style={{ fontSize: 24 }}>Selected Item: {selectedItem}</Text>
                </View>
            )}
        </View>
    );
};

export default WheelScreen;
