import React from 'react'
import { StyleSheet, Text, View,TouchableOpacity } from 'react-native'

const Detalhes = ({filme, closeModal}) => {
    return (
        <View style={styles.container}>
            <View style={styles.modalContainer}>
                <TouchableOpacity style={styles.btnVoltar} onPress={closeModal}>
                    <Text style={{color:'#FFF', fontSize:16}}>Voltar</Text>
                </TouchableOpacity>
                <Text style={styles.titulo}>{filme.nome}</Text>
                <Text style={styles.sinopse}>Sinopse:</Text>
                <Text style={styles.descricao}>{filme.sinopse}</Text>
            </View>

        </View>
    )
}

export default Detalhes

const styles = StyleSheet.create({

    container:{
        marginLeft:10,
        marginRight:10,
        flex:1,
        alignItems:'center',
        justifyContent: 'flex-end',
    },
    modalContainer:{
        height:'80%',
        backgroundColor:'#121212',
        borderTopLeftRadius:5,
        borderTopRightRadius:5,
    },
    btnVoltar:{
        backgroundColor:'#E52246',
        padding:10,
        borderTopLeftRadius:5,
        borderTopRightRadius:5,
    },
    titulo:{
        textAlign:'center',
        color:'#FFF',
        padding:10,
        fontSize:28,
        fontWeight:'bold',
    },
    sinopse:{
        color:'#FFF',
        fontSize:18,
        marginBottom:8,
        marginLeft:10
    },
    descricao:{
        color:'#FFF',
        marginLeft:10,
        marginRight:10
    }

})
