import { View, Text } from 'react-native'
import React from 'react'
import { styles } from './styles'
import InputSec from './Components/InputSec'
import AdSec from './Components/AdSec'
import List from './Components/List'

const GameList = () => {
  return (
    <View style={styles.container}>
      <InputSec/>
      <AdSec/>
      <List/>
    </View>
  )
}

export default GameList