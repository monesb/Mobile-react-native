// styles/productStyles.js
import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    margin: 16,
  },
  list: {
    paddingHorizontal: 16,
  },
  itemContainer: {
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
  },
  designation: {
    fontSize: 18,
    fontWeight: '500',
  },
  prix: {
    fontSize: 16,
    color: '#888',
  },

  //style panier

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
//afficher le panier en haut et a droite de l'ecran

header: {
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
  paddingHorizontal: 16,
  paddingTop: 16,
  paddingBottom: 8,
  backgroundColor: '#fff',
},

cartBadge: {
  backgroundColor: '#eee',
  paddingVertical: 6,
  paddingHorizontal: 12,
  borderRadius: 20,
},

cartText: {
  fontSize: 16,
  fontWeight: 'bold',
},

});