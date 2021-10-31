import React,{useState} from 'react'
import { View, Text, StyleSheet, Image, TouchableOpacity, Modal } from 'react-native'
import Detalhes from '../Detalhes';
const Filmes = ({data}) => {
    const [open, setOpen] = useState(false);

    return (
        <View>
            <View style={styles.card}>
            <Text style={styles.titulo}>{data.nome}</Text>

            <Image
            source={{uri: data.foto}}
            style={styles.capa}
            />

            <View style={styles.areaBotao}>
                <TouchableOpacity style={styles.botao} onPress={() => setOpen(!open)}>
                    <Text style={styles.botaoTexto}>
                        LEIA MAIS
                    </Text>
                </TouchableOpacity>
            </View>
            </View>
            <Modal 
            animationType='slide' 
            visible={open}
            transparent={true}
            >
                <Detalhes filme={data} closeModal={() => setOpen(false)}/>
            </Modal>
        </View>
    )
}

export default Filmes


const styles = StyleSheet.create({
    card:{
        backgroundColor:'#FFF',
        margin:15,
        elevation:2
    },
    titulo:{
        fontSize:18,
        padding:15,
        fontWeight: 'bold'
    },
    capa:{
        height:250,
        zIndex:2
    },
    areaBotao:{
        alignItems:'flex-end',
        marginTop:-45,
        zIndex:9
    },
    botao:{
        width:100,
        backgroundColor:'#09A6FF',
        opacity:1,
        padding:8,
        borderTopLeftRadius:5,
        borderBottomLeftRadius:5 
    },
    botaoTexto:{
        color:'#FFF',
        textAlign:'center',
    }
})