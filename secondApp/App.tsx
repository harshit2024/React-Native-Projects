import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import FlatCards from './components/FlatCards'
import Scroller from './components/Scroller'

const App = () => {
  return (
    <View>
      <ScrollView>
        <FlatCards />
        <Scroller />
      </ScrollView>
    </View>
  )
}

export default App