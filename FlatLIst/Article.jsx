import { Button, Image, Text, View, TouchableOpacity } from "react-native";
import styles from "./styles";

// Composant pour afficher un produit
 const Articles = ({item, onAddToCart}) => (

   <View style={styles.articleContainer}>
    <Image source={{ uri: item.image}} style={styles.image}/>
    <View style={styles.info}>
      <Text style={styles.nom}>{item.name}</Text>
      <Text style={styles.prix}>{item.prix}</Text>
            <Button title="Ajouter au panier" onPress={onAddToCart}/>
    </View>
  </View>
);

export default Articles