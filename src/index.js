import React,{ useState, useEffect } from 'react';
import { View,Text, StyleSheet, FlatList, ActivityIndicator } from 'react-native';
import api from './services/api';
import Filmes from './Filmes/index';
export default function Index() {
const [filmes, setFilmes] = useState([]);
const [loading, setLoading] = useState(true);


useEffect(() => {

    async function loadFilmes() {
        const response = await api.get('r-api/?api=filmes');

        setFilmes(response.data);
        setLoading(false)

    }

    loadFilmes();
},[])

 if(loading){
     return(
         <View style={{alignItems:'center', justifyContent: 'center', flex:1}}>
             <ActivityIndicator color='#121212' size={45}/>
         </View>
     )
 }else{

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.titleHeader}>FILMES EM CARTAZ</Text>
             </View>
             <FlatList
                 data={filmes}
                 keyExtractor={item => String(item.id)}
                 renderItem={({item}) => <Filmes data={item}/> }
             
             />
         
        </View>
       );
     }
     

 }
 
const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#ccc'
    },
    header:{
        backgroundColor:'#FFF',
        height:50,
        alignItems: 'center',
        justifyContent:'center'
    },
    titleHeader:{
        fontSize:25,
        fontWeight:'bold',
    }

})