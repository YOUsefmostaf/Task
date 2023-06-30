import {StyleSheet, Platform} from 'react-native';

export const styles = StyleSheet.create({
  search: {
    flexDirection: 'row',
    height:70,
  },
  input: {
    flex: 4,
  },
  filter: {
    flex: 1.3,
  },
  menu:{
    borderWidth: 1,
    borderColor: '#6f7486',
    borderRadius: 50,
    transform: [{rotate: '90deg'}],
    width: 50,
    marginLeft: 15,
    marginTop:-20
  }
});
