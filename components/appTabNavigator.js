import React from 'react';
import { Image } from 'react-native';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import Home from '../screens/homeScreen';
import Exchange from '../screens/exchangeScreen';

export const AppTabNavigator = createBottomTabNavigator({
    Home: {
        screen: Home,
        navigationOptions: {
            tabBarIcon: <Image source = {require("../assets/home.png")} style={{width:20, height:20}}/>,
            tabBarLabel: "HOME SCREEN"
        }
    },
    Exchange: {
        screen: Exchange,
        navigationOptions: {
            tabBarIcon: <Image source = {require("../assets/reload.png")} style={{width:20, height:20}}/>,
            tabBarLabel: "EXCHANGE SCREEN"
        }
    }
})