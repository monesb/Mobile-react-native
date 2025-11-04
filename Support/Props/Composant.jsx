import { Text, View } from 'react-native';

const MonComposant = (props) => {
    return (
        <View style={{ marginTop:50}}><Text>{props.message}</Text></View>
    );
};
export default MonComposant;