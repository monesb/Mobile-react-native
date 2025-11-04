import { View, TouchableOpacity, Text, Pressable, StyleSheet } from 'react-native';

const ButtonSimple2 = () => {
    return (
        <Pressable
            onPress={() => console.log('cliqué')}
            onLongPress={() => console.log('appui long')}
            style={({ pressed }) => [
                styles.button,
                { backgroundColor: pressed ? 'darkblue' : 'blue' }
            ]}
        >
            {({ pressed }) => (
                <Text style={styles.buttonText}>
                    {pressed ? 'appuyé' : 'Appuyer-moi'}
                </Text>
            )}
        </Pressable>
    );
}

const styles = StyleSheet.create({
    button: {
        padding: 15,
        borderRadius: 8,
        alignItems: 'center',
        margin: 10,
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
    },
});

export default ButtonSimple2;