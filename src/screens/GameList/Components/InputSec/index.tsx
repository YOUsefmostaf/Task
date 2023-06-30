import {Image, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {Formik} from 'formik';
import {styles} from './styles';
import {Icon, Input} from 'react-native-elements';
import {Svg} from 'react-native-svg';
import Search from '../../../../assets/svgs/Search';
import Menu from '../../../../assets/svgs/Menu';

const InputSec = () => {
  return (
    <View style={styles.search}>
      <View style={styles.input}>
        <Formik
          initialValues={{search: ''}}
          onSubmit={values => console.log(values)}>
          {props => (
            <>
              <Input
                value={props.values.search}
                inputContainerStyle={{
                  borderWidth: 1,
                  borderRadius: 25,
                  paddingHorizontal: 10,
                  borderColor: '#6f7486',
                }}
                placeholder={'Search'}
                leftIcon={<Search />}
              />
            </>
          )}
        </Formik>
      </View>
      <View style={styles.filter}>
        <TouchableOpacity onPress={() => {}} style={styles.menu}>
          <Menu />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default InputSec;
