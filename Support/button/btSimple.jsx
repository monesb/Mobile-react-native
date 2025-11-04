import { View, TouchableOpacity, Text } from 'react-native';

const ButtonSimple = () => {
    return (
        <TouchableOpacity
            style={{ backgroundColor: 'blue', padding: 15, borderRadius: 8 }}
            onPress={() => console.log('cliqué')}
        >
            <Text style={{ color: 'white', textAlign: 'center' }}>
                Mon Bouton
            </Text>
        </TouchableOpacity>
    );
}

export default ButtonSimple;