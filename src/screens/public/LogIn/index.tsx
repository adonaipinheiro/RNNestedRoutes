import React from 'react';
import { 
  View, 
  Text, 
  TouchableOpacity, 
  StyleSheet } from 'react-native';

interface Props {
  navigation: any;
}

const LogIn: React.FC<Props> = ({ navigation  }) => {
  const navigateTo = (screen: string) => {
    navigation.navigate(screen);
  }

  const navigateToNested = () => {
    navigation.navigate('PrivateNavigator')
  }

  return (
    <View style={styles.container}>

      <Text style={styles.title}>LogIn</Text>

      <TouchableOpacity 
        onPress={()=>{
          navigateTo('Register')
        }} 
        style={styles.button}
      >
        <Text style={styles.buttonText}>Register</Text>
      </TouchableOpacity>

      <TouchableOpacity 
        onPress={()=>{
          navigateToNested();
        }} 
        style={styles.button}
      >
        <Text style={styles.buttonText}>Dashboard</Text>
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

export default LogIn;