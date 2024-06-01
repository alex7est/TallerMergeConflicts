import {View, Text, StyleSheet, Button} from 'react-native'

export const Product = ({navigation}) =>{
    return <View style={styles.container}> 
        <Text>Bienvenidos a mi tienda soy Ivan</Text>
        <Text style={{color:"blue"}}>Botella de agua: $1.00</Text>
        <Text style={{color:"orange"}}>Bolsa de papas fritas: $0.50</Text>
        <Text style={{color:"red"}}>Refresco en lata: $1.25</Text>
        <Button
            title='HOME'
            onPress={()=>{
                navigation.navigate('HomeNav');
            }}
        />
    </View>

}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'beige',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });