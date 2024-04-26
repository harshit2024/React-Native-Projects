/* eslint-disable prettier/prettier */
// eslint-disable-next-line prettier/prettier
import { View, ScrollView } from 'react-native';
import React from "react";
import FlatCards from "./components/FlatCards";
import Scroller from "./components/Scroller";
import FancyCard from "./components/FancyCard";
import ActionCard from './components/ActionCard';
import IterationInData from './components/IterationInData';

const App = () => {
  return (
    <View>
      <ScrollView>
        <FlatCards />
        <Scroller />
        <FancyCard />
        <IterationInData />
        <ActionCard />
      </ScrollView>
    </View>
  );
};

export default App;
