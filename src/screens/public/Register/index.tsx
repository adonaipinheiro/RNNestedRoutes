import React from 'react';
import { 
  View, 
  Text, 
  TouchableOpacity, 
  StyleSheet } from 'react-native';

interface Props {
  navigation: any;
}

const Register: React.FC<Props> = ({ navigation  }) => {
  return (
    <View style={styles.container}>

      <Text style={styles.title}>Register</Text>

      <TouchableOpacity onPress={()=>{
        navigation.goBack();
      }} style={styles.button}>
        <Text style={styles.buttonText}>Voltar</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  title: {
    fontWeight: 'bold',
    fontSize: 18
  },
  button: {
    marginTop: 20,
    paddingVertical: 10,
    paddingHorizontal: 15,
    backgroundColor: '#0066CC',
    borderRadius: 5
  },
  buttonText: {
    fontWeight: 'bold',
    color: '#FFF'
  }
});

export default Register;