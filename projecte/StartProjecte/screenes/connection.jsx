// Import des composants React et React Native nécessaires
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert, ScrollView } from 'react-native';
import styles from '../style/Style';

// Composant de connexion
const Connexion = ({ navigation }) => {
  // State pour gérer les données du formulaire
  const [formData, setFormData] = useState({
    email: '',
    motDePasse: ''
  });

  // State pour gérer les messages d'erreur de validation
  const [erreurs, setErreurs] = useState({});

  // Fonction pour gérer les changements dans les champs de texte
  const handleChange = (champ, valeur) => {
    // Met à jour les données du formulaire
    setFormData(prev => ({
      ...prev,
      [champ]: valeur
    }));
    
    // Efface l'erreur du champ si elle existe
    if (erreurs[champ]) {
      setErreurs(prev => ({
        ...prev,
        [champ]: ''
      }));
    }
  };

  // Fonction de validation du formulaire
  const validerFormulaire = () => {
    const nouvellesErreurs = {};

    // Expression régulière pour valider le format d'email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
    // Validation de l'email
    if (!formData.email.trim()) {
      nouvellesErreurs.email = "L'email est requis";
    } else if (!emailRegex.test(formData.email)) {
      nouvellesErreurs.email = 'Email invalide';
    }

    // Validation du mot de passe
    if (!formData.motDePasse) {
      nouvellesErreurs.motDePasse = 'Le mot de passe est requis';
    }

    // Met à jour les erreurs
    setErreurs(nouvellesErreurs);

    // Affiche une alerte si des erreurs sont présentes
    if (Object.keys(nouvellesErreurs).length > 0) {
      Alert.alert(
        'Erreur de connexion',
        'Veuillez corriger les erreurs avant de continuer.',
        [{ text: 'OK' }]
      );
      return false;
    }

    return true;
  };

  // Fonction appelée lors de la soumission du formulaire
  const handleSubmit = () => {
    // Vérifie d'abord la validité du formulaire
    if (validerFormulaire()) {
      // Affiche une alerte de succès
      Alert.alert(
        'Connexion réussie',
        'Vous êtes maintenant connecté!',
        [{ text: 'OK', onPress: () => navigation.navigate('Accueil') }]
      );

      // Réinitialise le formulaire après connexion réussie
      setFormData({ email: '', motDePasse: '' });
    }
  };

  return (
    <View style={styles.container}>
      {/* Menu de navigation horizontal */}
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.menu}
        style={styles.menuWrapper}
      >
        {/* Bouton Retour */}
        <TouchableOpacity style={styles.navButton} onPress={() => navigation.goBack()}>
          <Text style={styles.navButtonText}>Retour</Text>
        </TouchableOpacity>

        {/* Bouton vers la page d'inscription */}
        <TouchableOpacity style={styles.navButton} onPress={() => navigation.navigate('Inscription')}>
          <Text style={styles.navButtonText}>Inscription</Text>
        </TouchableOpacity>

        {/* Bouton vers la page d'accueil */}
        <TouchableOpacity style={styles.navButton} onPress={() => navigation.navigate('Accueil')}>
          <Text style={styles.navButtonText}>Accueil</Text>
        </TouchableOpacity>
      </ScrollView>

      {/* Contenu principal de la page */}
      <View style={styles.content}>
        <Text style={styles.title}>Connexion</Text>
        
        {/* Container du formulaire */}
        <View style={styles.formContainer}>
          {/* Champ Email */}
          <TextInput
            style={[styles.input, erreurs.email && styles.inputError]}
            value={formData.email}
            onChangeText={(valeur) => handleChange('email', valeur)}
            placeholder="exemple@email.com"
            keyboardType="email-address"
            autoCapitalize="none"
            autoCorrect={false}
          />
          {/* Affichage de l'erreur email si présente */}
          {erreurs.email && <Text style={styles.errorText}>{erreurs.email}</Text>}

          {/* Champ Mot de passe */}
          <TextInput
            style={[styles.input, erreurs.motDePasse && styles.inputError]}
            value={formData.motDePasse}
            onChangeText={(valeur) => handleChange('motDePasse', valeur)}
            placeholder="••••••••"
            secureTextEntry
            autoCapitalize="none"
          />
          {/* Affichage de l'erreur mot de passe si présente */}
          {erreurs.motDePasse && <Text style={styles.errorText}>{erreurs.motDePasse}</Text>}

          {/* Bouton de connexion principal */}
          <TouchableOpacity 
            style={styles.loginButton}
            onPress={handleSubmit}
          >
            <Text style={styles.loginButtonText}>Se connecter</Text>
          </TouchableOpacity>

          {/* Bouton secondaire pour rediriger vers l'inscription */}
          <TouchableOpacity 
            style={styles.secondaryButton}
            onPress={() => navigation.navigate('Inscription')}
          >
            <Text style={styles.secondaryButtonText}>Pas de compte ? S'inscrire</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Connexion;