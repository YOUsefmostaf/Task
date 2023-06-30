import {View, Text, FlatList, TouchableOpacity} from 'react-native';
import React, {useEffect, useState} from 'react';
import Card from './Card';

const List = ({navigation}: any) => {
  const Data = require('./data.json');

  return (
    <View style={{flex: 1}}>
      <FlatList
        data={Data}
        renderItem={({item}) => (
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('Details', {title: item.title});
            }}>
            <Card
              image={item.image}
              title={item.title}
              clock={item.clock}
              type={item.type}
            />
          </TouchableOpacity>
        )}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

export default List;
