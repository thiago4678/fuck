import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import styles from './styles';

const App = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = () => {
    // Aqui você pode realizar as ações necessárias com os dados inseridos, como enviar para um servidor ou armazená-los localmente.
    console.log('Nome:', name);
    console.log('Telefone:', phone);
    console.log('E-mail:', email);

    // Reiniciar os campos após a submissão
    setName('');
    setPhone('');
    setEmail('');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Nome:</Text>
      <TextInput
        style={styles.input}
        value={name}
        onChangeText={(text) => setName(text)}
      />

      <Text style={styles.label}>Telefone:</Text>
      <TextInput
        style={styles.input}
        value={phone}
        onChangeText={(text) => setPhone(text)}
        keyboardType="phone-pad"
      />

      <Text style={styles.label}>E-mail:</Text>
      <TextInput
        style={styles.input}
        value={email}
        onChangeText={(text) => setEmail(text)}
        keyboardType="email-address"
      />

      <Button title="Enviar" onPress={handleSubmit} />
    </View>
  );
};

export default App;