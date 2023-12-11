import React from 'react';
import {Text, View, ScrollView} from 'react-native';
import {Avatar} from 'react-native-paper';
import TarjetaProfe from './tarjetaProfe';

const LlistatProfesCicle = props => {
  const indexCurs = props.segoncurs ? 1 : 0;
  return (
    <View style={{flex:2, padding: 15, alignItems:'center'}}>
      <ScrollView>
      {props.cicleSeleccionat !== null ? (
        props.dades.unitatTics[props.cicleSeleccionat].curs[indexCurs].profes.map(
          (unModul, index) => {
            return (
              <TarjetaProfe
              key={index}
              elProfe = {unModul}
              />
            );
          },
        )
      ) : (
        <Text style={{fontSize: 18, fontWeight: '400'}}>
          Selecciona un cicle. Sempre es visualitzaran els profes de 1r curs
        </Text>
      )}
      </ScrollView>
      </View>
  );
};

export default LlistatProfesCicle;
