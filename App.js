import React, { useState } from 'react';
import { View, Text, FlatList, StyleSheet, Image, TextInput, ImageBackground } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export default function App() {
  const books = [
    {
      id: '1',
      title: 'The Truth About Horses',
      author: 'Author 1',
      price: 300,
      image: require('./assets/bookpic/book1.png'),
      description: 'A thrilling adventure novel.',
    },
    {
      id: '2',
      title: 'Miss Mary',
      author: 'Author 2',
      price: 500,
      image: require('./assets/bookpic/book2.jpg'),
      description: 'An intriguing mystery book.',
    },

    {
      id: '3',
      title: 'Pieces of Me',
      author: 'Carrigan Richards ',
      price: 900,
      image: require('./assets/bookpic/book3.jpg'),
      description: 'Pieces of Me is a gripping young adult contemporary fiction novel.',
    },

    {
      id: '4',
      title: 'Every Summer After',
      author: 'Carley Fortune ',
      price: 800,
      image: require('./assets/bookpic/book4.jpg'),
      description: 'Pieces of Me is a gripping young adult contemporary fiction novel.',
    },

    {
      id: '5',
      title: 'Believe in Yourself',
      author: ' Dr Joseph Murphy ',
      price: 600,
      image: require('./assets/bookpic/book5.jpg'),
      description: 'Ream in this sense is from Arabic rizma, which literally means "bundle";',
    },
    // Add more book entries as needed
  ];

  const [searchText, setSearchText] = useState(''); // State to store the search input

  // Filter the books based on the search text
  const filteredBooks = books.filter((book) =>
    book.title.toLowerCase().includes(searchText.toLowerCase())
  );

  return (
    <ImageBackground
      source={require('./assets/background/bg10.jpg')} // Replace with your background image
      style={styles.backgroundImage}
    >
      <View style={styles.container}>
        <LinearGradient
          colors={['#6B9CFF', '#9C6BFF']}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
          style={styles.header}
        >
          <Text style={styles.headerText}>Book App</Text>
        </LinearGradient>

        <TextInput
          style={styles.searchInput}
          placeholder="Search for books"
          onChangeText={setSearchText}
          value={searchText}
        />

        <FlatList
          data={filteredBooks}
          keyExtractor={(book) => book.id}
          renderItem={({ item }) => (
            <View style={styles.bookItem}>
              <Image source={item.image} style={styles.bookCover} />
              <View style={styles.bookDetails}>
                <Text style={styles.bookTitle}>{item.title}</Text>
                <Text style={styles.bookAuthor}>{item.author}</Text>
                <Text style={styles.bookPrice}>${item.price.toFixed(2)}</Text>
                <Text style={styles.bookDescription}>{item.description}</Text>
              </View>
            </View>
          )}
        />
        <View style={styles.footer}>
          <View style={styles.categoryContainer}>
            <Text style={styles.category}>Categories</Text>
          </View>
        </View>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
  },
  container: {
    flex: 1,
    padding: 20,
  },
  header: {
    padding: 15,
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'white', // Change the text color to white
  },
  searchInput: {
    backgroundColor: 'white',
    padding: 10,
    margin: 10,
    borderRadius: 10,
  },
  bookItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
  },
  bookCover: {
    width: 80,
    height: 80,
    borderRadius: 10,
    marginRight: 10,
  },
  bookDetails: {
    flex: 1,
  },
  bookTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  bookAuthor: {
    fontSize: 14,
    color: 'gray',
  },
  bookPrice: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'green',
  },
  bookDescription: {
    fontSize: 14,
    color: 'black',
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'white',
    padding: 10,
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
  },
  footerIcon: {
    width: 30,
    height: 30,
  },
  categoryContainer: {
    flex: 1,
    alignItems: 'center',
  },
  category: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});
