import React, { useState } from 'react';
import { 
  View, 
  Text, 
  TextInput, 
  TouchableOpacity, 
  Alert, 
  ScrollView,
  KeyboardAvoidingView,
  Platform 
} from 'react-native';
import styles from '../style/Style';

const Inscription = ({ navigation }) => {
  const [formData, setFormData] = useState({
    nom: '', 
    prenom: '', 
    email: '', 
    telephone: '', 
    motDePasse: '', 
    confirmMotDePasse: ''
  });

  const [erreurs, setErreurs] = useState({});

  const handleChange = (champ, valeur) => {
    setFormData(prev => ({
      ...prev,
      [champ]: valeur
    }));

    if (erreurs[champ]) {
      setErreurs(prev => ({
        ...prev,
        [champ]: ''
      }));
    }
  };

  const validerFormulaire = () => {
    const nouvellesErreurs = {};

    if (!formData.nom.trim()) {
      nouvellesErreurs.nom = 'Le nom est requis';
    }

    if (!formData.prenom.trim()) {
      nouvellesErreurs.prenom = 'Le prénom est requis';
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      nouvellesErreurs.email = 'L\'email est requis';
    } else if (!emailRegex.test(formData.email)) {
      nouvellesErreurs.email = 'Email invalide';
    }

    const telRegex = /^[0-9]{10}$/;
    if (!formData.telephone.trim()) {
      nouvellesErreurs.telephone = 'Le téléphone est requis';
    } else if (!telRegex.test(formData.telephone.replace(/\s/g, ''))) {
      nouvellesErreurs.telephone = 'Téléphone invalide (10 chiffres)';
    }

    if (!formData.motDePasse) {
      nouvellesErreurs.motDePasse = 'Le mot de passe est requis';
    } else if (formData.motDePasse.length < 8) {
      nouvellesErreurs.motDePasse = 'Minimum 8 caractères';
    }

    if (formData.motDePasse !== formData.confirmMotDePasse) {
      nouvellesErreurs.confirmMotDePasse = 'Les mots de passe ne correspondent pas';
    }

    setErreurs(nouvellesErreurs);
    return Object.keys(nouvellesErreurs).length === 0;
  };

  const handleSubmit = () => {
    if (validerFormulaire()) {
      Alert.alert(
        'Succès', 
        `Bienvenue ${formData.prenom} ${formData.nom}!\n\nVotre compte a été créé avec succès.`,
        [{ text: 'OK' }]
      );

      setFormData({
        nom: '', prenom: '', email: '', telephone: '', motDePasse: '', confirmMotDePasse: ''
      });
    }
  };

  return (
    <KeyboardAvoidingView 
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      {/* Menu de navigation horizontale */}
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.menu}
        style={styles.menuWrapper}
      >
        <TouchableOpacity style={styles.navButton} onPress={() => navigation.goBack()}>
          <Text style={styles.navButtonText}>Retour</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.navButton} onPress={() => navigation.navigate('Connexion')}>
          <Text style={styles.navButtonText}>Connexion</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.navButton} onPress={() => navigation.navigate('Accueil')}>
          <Text style={styles.navButtonText}>Accueil</Text>
        </TouchableOpacity>
      </ScrollView>

      {/* CONTENU PRINCIPAL AVEC SCROLL */}
      <ScrollView 
        style={styles.contentScroll}
        contentContainerStyle={styles.scrollContent}
        keyboardShouldPersistTaps="handled"
        showsVerticalScrollIndicator={false}
      >
        <Text style={styles.title}>Inscription</Text>
        
        <View style={styles.formContainer}>
          {/* Champ Nom */}
          <TextInput
            style={[styles.input, erreurs.nom && styles.inputError]}
            value={formData.nom}
            onChangeText={(valeur) => handleChange('nom', valeur)}
            placeholder="Nom"
            autoCapitalize="words"
          />
          {erreurs.nom && <Text style={styles.errorText}>{erreurs.nom}</Text>}

          {/* Champ Prénom */}
          <TextInput
            style={[styles.input, erreurs.prenom && styles.inputError]}
            value={formData.prenom}
            onChangeText={(valeur) => handleChange('prenom', valeur)}
            placeholder="Prénom"
            autoCapitalize="words"
          />
          {erreurs.prenom && <Text style={styles.errorText}>{erreurs.prenom}</Text>}

          {/* Champ Email */}
          <TextInput
            style={[styles.input, erreurs.email && styles.inputError]}
            value={formData.email}
            onChangeText={(valeur) => handleChange('email', valeur)}
            placeholder="Email"
            keyboardType="email-address"
            autoCapitalize="none"
          />
          {erreurs.email && <Text style={styles.errorText}>{erreurs.email}</Text>}

          {/* Champ Téléphone */}
          <TextInput
            style={[styles.input, erreurs.telephone && styles.inputError]}
            value={formData.telephone}
            onChangeText={(valeur) => handleChange('telephone', valeur)}
            placeholder="Téléphone"
            keyboardType="phone-pad"
            maxLength={10}
          />
          {erreurs.telephone && <Text style={styles.errorText}>{erreurs.telephone}</Text>}

          {/* Champ Mot de passe */}
          <TextInput
            style={[styles.input, erreurs.motDePasse && styles.inputError]}
            value={formData.motDePasse}
            onChangeText={(valeur) => handleChange('motDePasse', valeur)}
            placeholder="Mot de passe"
            secureTextEntry
          />
          {erreurs.motDePasse && <Text style={styles.errorText}>{erreurs.motDePasse}</Text>}

          {/* Champ Confirmation du mot de passe */}
          <TextInput
            style={[styles.input, erreurs.confirmMotDePasse && styles.inputError]}
            value={formData.confirmMotDePasse}
            onChangeText={(valeur) => handleChange('confirmMotDePasse', valeur)}
            placeholder="Confirmer le mot de passe"
            secureTextEntry
          />
          {erreurs.confirmMotDePasse && <Text style={styles.errorText}>{erreurs.confirmMotDePasse}</Text>}

          {/* Bouton d'inscription */}
          <TouchableOpacity 
            style={styles.registerButton}
            onPress={handleSubmit}
          >
            <Text style={styles.registerButtonText}>S'inscrire</Text>
          </TouchableOpacity>

          {/* Lien vers la page de connexion */}
          <TouchableOpacity 
            style={styles.secondaryButton}
            onPress={() => navigation.navigate('Connexion')}
          >
            <Text style={styles.secondaryButtonText}>Déjà un compte ? Se connecter</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default Inscription;