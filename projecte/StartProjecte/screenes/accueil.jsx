import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { View, Text, FlatList, ScrollView, TouchableOpacity } from 'react-native';
import styles from '../style/Style';
import { produits } from './Datas';
import Articles from './articles';

const Accueil = ({ navigation }) => {
	const [panier, setPanier] = useState([]);
	const ajouterAuPanier = (produit) => {
		setPanier((prev) => [...prev, produit]);
	};
	const ItemSeparator = () => <View style={styles.separator} />;

	return (
		<SafeAreaView style={styles.container}>
			{/* Menu horizontal en haut*/}
			<ScrollView
				horizontal
				showsHorizontalScrollIndicator={false}
				contentContainerStyle={styles.menu}
				style={styles.menuWrapper}
			>
				<TouchableOpacity 
					style={styles.navButton} 
					onPress={() => navigation.navigate('Inscription')}
				>
					<Text style={styles.navButtonText}>Inscription</Text>
				</TouchableOpacity>

				<TouchableOpacity 
					style={styles.navButton} 
					onPress={() => navigation.navigate('Connexion')}
				>
					<Text style={styles.navButtonText}>Connexion</Text>
				</TouchableOpacity>

				{/* SEULE MODIFICATION : ajoute setPanier dans les params */}
				<TouchableOpacity 
					style={styles.panierButton} 
					onPress={() => navigation.navigate('Panier', { 
						panier: panier, 
						setPanier: setPanier  // ← AJOUTE CETTE LIGNE
					})}
				>
					<View style={styles.panierBadge}>
						<Text style={styles.panierCount}>{panier.length}</Text>
					</View>
					<Text style={styles.panierButtonText}>🛒 {panier.length}</Text>
				</TouchableOpacity>
			</ScrollView>

			{/* Contenu principal */}
			<View style={styles.content}>
				<Text style={styles.title}>Liste des Produits</Text>
				
				{/* Liste des produits */}
				<FlatList
					data={produits}
					keyExtractor={(item) => item.id}
					renderItem={({ item }) => (
						<Articles item={item} onAddToCart={() => ajouterAuPanier(item)} />
					)}
					ItemSeparatorComponent={ItemSeparator}
					contentContainerStyle={styles.list}
				/>
			</View>
		</SafeAreaView>
	);
};

export default Accueil;