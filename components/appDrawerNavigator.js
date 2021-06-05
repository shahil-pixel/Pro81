import React from 'react';
import {createDrawerNavigator} from 'react-navigation-drawer';
import {AppTabNavigator} from './AppTabNavigator';
import CustomSideBarMenu from './customSideBarMenu';
import SettingScreen from '../screens/settingsScreen';

export const DrawerNavigator = createDrawerNavigator({
    Home:{
        screen:AppTabNavigator
    },
    setting:{
        screen:SettingScreen
    }
   },
   {contentComponent:SideBarMenu},
   {
       initialRouteName:'Home'
   })