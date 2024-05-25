import React from 'react';
import { StyleSheet, Text, View, Image, Button } from 'react-native';

const Home = ({ navigation }) => {

  return (
    <View style={styles.container}>
      <Image source={require('./assets/eu.jpg')} style={styles.image} />
      <Text style={styles.name}>João Pedro Brito</Text>
      <Button
        title="Ir para Currículo"
        onPress={() => navigation.navigate('Curriculo')}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginBottom: 10,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 10,
  },
});

export default Home;