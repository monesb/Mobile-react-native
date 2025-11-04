import { StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

export default StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
	},
	header: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		paddingHorizontal: 16,
		paddingVertical: 12,
		backgroundColor: '#f8f8f8',
		borderBottomWidth: 1,
		borderBottomColor: '#e0e0e0',
	},
	navContainer: {
		flexDirection: 'row',
		alignItems: 'center',
	},
	navButton: {
		backgroundColor: '#007AFF',
		paddingHorizontal: 20,
		paddingVertical: 10,
		borderRadius: 20,
		marginRight: 12,
		shadowColor: '#000',
		shadowOffset: {
			width: 0,
			height: 2,
		},
		shadowOpacity: 0.25,
		shadowRadius: 3.84,
		elevation: 5,
	},
	navButtonText: {
		color: 'white',
		fontWeight: '600',
		fontSize: 14,
	},
	panierContainer: {
		flexDirection: 'row',
		alignItems: 'center',
		backgroundColor: 'white',
		paddingHorizontal: 12,
		paddingVertical: 8,
		borderRadius: 20,
		borderWidth: 1,
		borderColor: '#007AFF',
		shadowColor: '#000',
		shadowOffset: {
			width: 0,
			height: 1,
		},
		shadowOpacity: 0.2,
		shadowRadius: 1.41,
		elevation: 2,
	},
	panierIcon: {
		fontSize: 20,
		marginLeft: 6,
	},
	panierBadge: {
		backgroundColor: '#FF3B30',
		borderRadius: 10,
		minWidth: 20,
		height: 20,
		justifyContent: 'center',
		alignItems: 'center',
		position: 'absolute',
		top: -5,
		right: -5,
		zIndex: 1,
	},
	panierCount: {
		color: 'white',
		fontSize: 12,
		fontWeight: 'bold',
	},
	title: {
		fontSize: 24,
		fontWeight: 'bold',
		margin: 16,
		textAlign: 'center',
		color: '#333',
	},
	list: {
		paddingHorizontal: 16,
	},
	articleContainer: {
		flexDirection: 'row',
		marginBottom: 16,
		backgroundColor: '#f2f2f2',
		borderRadius: 8,
		padding: 12,
	},
	image: {
		width: 80,
		height: 80,
		borderRadius: 8,
	},
	info: {
		marginLeft: 12,
		justifyContent: 'center',
		flex: 1,
	},
	nom: {
		fontSize: 18,
		fontWeight: '500',
		color: '#333',
	},
	prix: {
		fontSize: 16,
		color: '#007AFF',
		fontWeight: '600',
		marginTop: 4,
	},
	separator: {
		height: 12,
	},
	cartContainer: {
		marginTop: 20,
		padding: 16,
		backgroundColor: '#f9f9f9',
		borderTopWidth: 1,
		borderColor: '#ccc',
	},
	cartTitle: {
		fontSize: 20,
		fontWeight: 'bold',
		marginBottom: 8,
	},
	cartItem: {
		fontSize: 16,
		marginBottom: 4,
	},

	// ===== NOUVEAUX STYLES =====
	
	// Styles pour le menu horizontal
	menuWrapper: {
		paddingTop: 10,
		maxHeight: 70,
		marginBottom: 10,
	},
	menu: {
		paddingHorizontal: 10,
		alignItems: 'center',
	},
	
	// Styles pour les écrans avec menu horizontal
	content: {
		flex: 1,
	},
	
	// Styles pour les formulaires
	formContainer: {
		padding: 20,
		width: '100%',
	},
	input: {
		height: 50,
		backgroundColor: '#fff',
		borderWidth: 1,
		borderColor: '#ddd',
		borderRadius: 8,
		paddingHorizontal: 15,
		fontSize: 16,
		color: '#333',
		marginBottom: 15,
	},
	inputError: {
		borderColor: '#e74c3c',
		borderWidth: 2,
	},
	errorText: {
		color: '#e74c3c',
		fontSize: 12,
		marginTop: -10,
		marginBottom: 10,
		marginLeft: 5,
	},
	loginButton: {
		backgroundColor: '#007AFF',
		height: 50,
		borderRadius: 8,
		justifyContent: 'center',
		alignItems: 'center',
		marginTop: 10,
		marginBottom: 15,
	},
	loginButtonText: {
		color: '#fff',
		fontSize: 18,
		fontWeight: 'bold',
	},
	registerButton: {
		backgroundColor: '#007AFF',
		height: 50,
		borderRadius: 8,
		justifyContent: 'center',
		alignItems: 'center',
		marginTop: 10,
		marginBottom: 15,
	},
	registerButtonText: {
		color: '#fff',
		fontSize: 18,
		fontWeight: 'bold',
	},
	secondaryButton: {
		backgroundColor: '#8E8E93',
		height: 50,
		borderRadius: 8,
		justifyContent: 'center',
		alignItems: 'center',
		marginTop: 10,
		marginBottom: 15,
	},
	secondaryButtonText: {
		color: '#fff',
		fontSize: 16,
		fontWeight: '600',
	},
	linkText: {
		color: '#007AFF',
		fontSize: 14,
		textAlign: 'center',
		fontWeight: '500',
	},
	
	// Styles pour le panier (version simple)
	totalContainer: {
		padding: 16,
		borderTopWidth: 1,
		borderTopColor: '#ccc',
		backgroundColor: '#f9f9f9',
	},
	totalText: {
		fontSize: 18,
		fontWeight: 'bold',
		textAlign: 'center',
	},

	// Styles pour le conteneur de la liste
listContainer: {
  flex: 1,
  width: '100%',
},

// Style existant pour la liste (à conserver)
list: {
  paddingHorizontal: 20,
  paddingBottom: 10,
},

// Style pour le conteneur vide
emptyContainer: {
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center',
  paddingHorizontal: 20,
},

// Style pour le texte vide
emptyText: {
  fontSize: 18,
  color: '#666',
  marginBottom: 20,
  textAlign: 'center',
},

// Style pour le bouton vider le panier
viderButton: {
  backgroundColor: '#ff4444',
  paddingVertical: 15,
  paddingHorizontal: 30,
  borderRadius: 8,
  alignItems: 'center',
  marginTop: 10,
  marginBottom: 10,
  shadowColor: '#000',
  shadowOffset: {
    width: 0,
    height: 2,
  },
  shadowOpacity: 0.25,
  shadowRadius: 3.84,
  elevation: 5,
},

viderButtonText: {
  color: 'white',
  fontSize: 16,
  fontWeight: 'bold',
  // Ajoutez ces styles à votre fichier Style.js

container: {
  flex: 1,
  backgroundColor: '#fff',
},

// Pour le contenu scrollable
contentScroll: {
  flex: 1,
},

scrollContent: {
  flexGrow: 1,
  padding: 20,
},

// Styles existants (gardez-les)
formContainer: {
  width: '100%',
},

input: {
  height: 50,
  borderWidth: 1,
  borderColor: '#ddd',
  borderRadius: 8,
  paddingHorizontal: 15,
  marginBottom: 10,
  fontSize: 16,
  backgroundColor: '#fff',
},

inputError: {
  borderColor: '#ff4444',
  borderWidth: 2,
},

errorText: {
  color: '#ff4444',
  fontSize: 12,
  marginBottom: 10,
  marginLeft: 5,
},

registerButton: {
  backgroundColor: '#007AFF',
  paddingVertical: 15,
  borderRadius: 8,
  alignItems: 'center',
  marginTop: 20,
  marginBottom: 15,
},

registerButtonText: {
  color: 'white',
  fontSize: 16,
  fontWeight: 'bold',
},

secondaryButton: {
  alignItems: 'center',
  paddingVertical: 10,
},

secondaryButtonText: {
  color: '#007AFF',
  fontSize: 14,
},

// Styles pour la navigation (gardez les vôtres)
menuWrapper: {
  backgroundColor: '#f8f8f8',
  paddingVertical: 10,
},
menu: {
  flexDirection: 'row',
  paddingHorizontal: 10,
},
navButton: {
  backgroundColor: '#007AFF',
  paddingHorizontal: 15,
  paddingVertical: 8,
  borderRadius: 5,
  marginHorizontal: 5,
},
navButtonText: {
  color: 'white',
  fontSize: 14,
  fontWeight: 'bold',
},
title: {
  fontSize: 24,
  fontWeight: 'bold',
  marginBottom: 30,
  textAlign: 'center',
},
},
});