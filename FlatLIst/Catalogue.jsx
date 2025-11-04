import { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Text, FlatList, View, TouchableOpacity } from "react-native";

import { produits } from "./Data";
import Articles from "./Article";
import Styles from "./styles";

const Catalogue3 = ({ navigation }) => {
  const [panier, setPanier] = useState([]);

  const ajouterAuPanier = (produit) => {
    setPanier((prev) => [...prev, produit]);
  };

  return (
    <SafeAreaView style={Styles.container}>
      <View style={Styles.header}>
        <Text style={Styles.title}>Liste des Produits</Text>
        <TouchableOpacity
          style={Styles.cartBadge}
          onPress={() => navigation.navigate("Panier", { panier })}
        >
          <Text style={Styles.cartText}>🛒 {panier.length}</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={produits}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Articles item={item} onAddToCart={() => ajouterAuPanier(item)} />
        )}
        contentContainerStyle={Styles.list}
      />
    </SafeAreaView>
  );
};

export default Catalogue3;