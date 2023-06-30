import {View, Image, Platform} from 'react-native';
import React, {useState, useRef, useEffect} from 'react';
import Carousel, {Pagination} from 'react-native-new-snap-carousel';

import {styles} from './styles';
import {Dimensions} from 'react-native';
import {images} from '../../../../assets/images';

const AdSec = () => {
  const carouselRef = useRef<any>();
  const [indexSelected, setIndexSelected] = useState(0);
  const renderItem = () => {
    return (
      <Image
        source={
          [
            require('../../../../assets/images/fortnite1.jpg'),
            require('../../../../assets/images/fortnite2.jpeg'),
            require('../../../../assets/images/fortnite3.jpeg'),
          ][indexSelected]
        }
        style={styles.img}
      />
    );
  };

  useEffect(() => {
    const interval = setInterval(() => {
      carouselRef?.current?.snapToNext();
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <View style={styles.paginationContainer}>
      <View
        style={{
          direction: 'ltr',
          flexDirection: 'row',
          transform: [{rotateY: '0deg'}],
        }}>
        <Carousel
          ref={carouselRef}
          data={[
            require('../../../../assets/images/fortnite1.jpg'),
            require('../../../../assets/images/fortnite2.jpeg'),
            require('../../../../assets/images/fortnite3.jpeg'),
          ]}
          renderItem={renderItem}
          sliderWidth={Dimensions.get('window').width}
          itemWidth={Dimensions.get('window').width}
          onSnapToItem={(index: number) => setIndexSelected(index)}
          loop
          autoplay={false}
        />
      </View>
      <View
        style={{
          marginTop: Dimensions.get('window').height * -0.05,
        }}>
        <Pagination
          inactiveDotColor="white"
          dotColor={'#58ffee'}
          activeDotIndex={indexSelected}
          dotsLength={
            [
              require('../../../../assets/images/fortnite1.jpg'),
              require('../../../../assets/images/fortnite2.jpeg'),
              require('../../../../assets/images/fortnite3.jpeg'),
            ].length
          }
          animatedDuration={50}
          inactiveDotScale={1}
          dotStyle={{width: 25, height: 6}}
          containerStyle={{
            height: Dimensions.get('window').height * 0.08,
            marginTop: -10,
            transform: [{rotateY: '0deg'}],
          }}
        />
      </View>
    </View>
  );
};

export default AdSec;
