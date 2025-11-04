import React, { useState } from 'react';
import { View, Text, FlatList, ScrollView, TouchableOpacity } from 'react-native';
import styles from '../style/Style';

const PanierScreen = ({ route, navigation }) => {
  // Reçois le panier ET setPanier depuis l'Accueil
  const { panier, setPanier } = route.params || {};
  
  // État local basé sur le panier reçu
  const [panierLocal, setPanierLocal] = useState(panier || []);

  // VIDER LE PANIER - Met à jour les DEUX états
  const viderPanier = () => {
    // 1. Vide l'état local
    setPanierLocal([]);
    
    // 2. Vide le panier dans l'Accueil (important !)
    if (setPanier) {
      setPanier([]);
    }
    
    alert('Panier vidé !');
  };

  return (
    <View style={styles.container}>
      {/* Menu de navigation */}
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.menu}
        style={styles.menuWrapper}
      >
        <TouchableOpacity style={styles.navButton} onPress={() => navigation.goBack()}>
          <Text style={styles.navButtonText}>Retour</Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.navButton} onPress={() => navigation.navigate('Accueil')}>
          <Text style={styles.navButtonText}>Accueil</Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.navButton} onPress={() => navigation.navigate('Inscription')}>
          <Text style={styles.navButtonText}>Inscription</Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.navButton} onPress={() => navigation.navigate('Connexion')}>
          <Text style={styles.navButtonText}>Connexion</Text>
        </TouchableOpacity>
      </ScrollView>

      {/* Contenu principal */}
      <View style={styles.content}>
        <Text style={styles.title}>🛒 Mon Panier</Text>
        
        <View style={styles.listContainer}>
          <FlatList
            data={panierLocal} // utilise l'état LOCAL
            keyExtractor={(item, index) => (item.id || index) + '-' + index}
            renderItem={({ item }) => (
              <Text style={styles.cartItem}>
                • {item.name || item.designation || item.nom} - {item.prix}€
              </Text>
            )}
            contentContainerStyle={[
              styles.list,
              panierLocal.length === 0 && styles.emptyList
            ]}
            ListEmptyComponent={
              <Text style={styles.emptyText}>Aucun produit dans le panier</Text>
            }
            ListFooterComponent={
              <TouchableOpacity 
                style={styles.viderButton} 
                onPress={viderPanier}
              >
                <Text style={styles.viderButtonText}>Vider le panier</Text>
              </TouchableOpacity>
            }
          />
        </View>
      </View>
    </View>
  );
};

export default PanierScreen;