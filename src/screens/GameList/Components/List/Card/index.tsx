import {View, Text, Image} from 'react-native';
import React from 'react';
import {styles} from './styles';

const Card = ({
  image,
  title,
  clock,
  type,
}: {
  image: string;
  title: string;
  clock: string;
  type: string;
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.first}>
        <Image
          source={{uri: image}}
          width={70}
          height={70}
          style={{borderRadius: 20}}
        />
        <View>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.clock}>{clock}</Text>
        </View>
      </View>

      <View style={styles.type}>
        <Text
          style={{
            backgroundColor:
              type === 'Fantasy'
                ? '#f19abf'
                : type === 'Strategy'
                ? '#9f94e0'
                : type === 'Drama'
                ? '#6391ce'
                : '#fff',
            paddingHorizontal: 10,
            paddingVertical: 5,
            borderRadius: 10,
          }}>
          {type}
        </Text>
      </View>
    </View>
  );
};

export default Card;
