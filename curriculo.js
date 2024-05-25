import React from 'react';
import { StyleSheet, Text, View, Image, Button } from 'react-native';


const Curriculo = ({ navigation }) => {
 
  

  return (
    <View style={styles.container}>
      <Text style={styles.title}>João Pedro Brito</Text>
      <Text style={styles.text}>Idade: 21 anos</Text>
      <Text style={styles.text}>Recife, PE - Brasil </Text>
      <Text style={styles.text}>joperdobfs@gmail.com</Text>

      <Text style={styles.title}>Formação Acadêmica</Text>
      <Text style={styles.text}>Tecnólogo em Design Gráfico pelo Instituto Federal de Pernambuco(2022)</Text>
      <Text style={styles.text}>Atualmente estou cursando ADS no Senac pelo Embarque Digital</Text>
      <Text style={styles.text}>Formação no Com.Domínio Digital, curso de: Python, Banco de Dados, Java e softs kills</Text>

      <Text style={styles.title}>Objetivo</Text>
      <Text style={styles.text}>Estou buscando oportunidades de UX/UI mas também estou aberto para vagas de tecnologia no geral</Text>


      <Text style={styles.title}>Experiências</Text>
      <Text style={styles.text}>Fui bolsista PIBIC, e escrevi o artigo: “Expressividade tipográfica em livros ilustrados: uma análise comparativa entre Daqui ninguém passa! e Meu vizinho é um cão", que foi aprovado pelo P&D Design(2022)</Text>
      <Text style={styles.text}>Fui monitor da cadeira de Design de Interação no SENAC auxiliando os alunos e a professora de forma didática, aprimorando minhas habilidades de comunicação </Text>

      <Button
        title="Voltar para Home"
        onPress={() => navigation.navigate('Home')} // Use a função de navegação diretamente aqui
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 20,
  },
  text: {
    fontSize: 16,
    marginTop: 5,
  },
});

export default Curriculo;