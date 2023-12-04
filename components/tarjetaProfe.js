import React from 'react';
import { StyleSheet, Text, View, Dimensions, ScrollView } from 'react-native';
import { Surface, Avatar } from 'react-native-paper';


const TarjetaProfe = props => {

    return (
        <Surface
            style={styles.estilCard}
            elevation={4}>
            <View style={styles.titolModul}>
                <Text
                    style={styles.sectionTitle}
                >
                    {props.elProfe.modul}
                </Text>
            </View>
            <View style={{ flex: 1.5, flexDirection: 'row', padding:25 }}>
                <View style={{ flex: 1 }}>
                    <Avatar.Icon size={45} icon={props.elProfe.foto} />
                </View>
                <View style={{ flex: 1 }}>
                    <Text
                        style={styles.sectionNom}
                    >
                        {props.elProfe.nom}
                    </Text>
                </View>
            </View>
            <View style={{ flex: 1.5, padding:10, alignItems:'center' }}>
                <Text
                    style={styles.sectionDescription}
                >
                    {props.elProfe.nomCompletModul}
                </Text>
            </View>
            <View style={{ flex: 1.5, padding:10, alignItems:'center' }}>
                <Text
                    style={styles.sectionDescription}
                >
                    Hores setmanals: {props.elProfe.horesSetmanals}
                </Text>
            </View>
        </Surface>
    );
};

const styles = StyleSheet.create({
    estilCard: {
        width: Dimensions.get('window').width / 1.5,
        margin: 5,
        padding: 20,
        alignItems: 'stretch',
        borderWidth: 1,
        borderColor: 'black',
        borderRadius: 9,
    },
    sectionTitle: {
        fontSize: 24,
        fontWeight: '600',
        color: 'white',
    },
    sectionNom:{
        fontSize: 24,
        fontWeight: '600',
        color: 'grey',
    },
    titolModul:{
        borderRadius: 9,
        flex: 1, 
        padding:10,
        alignItems: 'center',
        backgroundColor: '#a3a8b7',
        
    },
    sectionDescription: {
        flexWrap: 'wrap',
        fontSize: 16,
        fontWeight: '400',
    },
});
export default TarjetaProfe;
{/* <Text
          style={styles.sectionTitle}
          >
          {props.elProfe.nom}
        </Text>
        <Text
          style={styles.sectionDescription}
          >
          {props.elProfe.modul}
        </Text> */}