import * as React from 'react';
import {createSwitchNavigator, createAppContainer} from 'react-navigation';

import Welcome from './screens/welcome';
import Home from './screens/homeScreen';
import {DrawerNavigator} from './components/appDrawerNavigator';
import {CreateDrawerNavigator} from 'react-navigation-drawer';
import SettingScreen from './screens/SettingScreen.js';
import CustomSidebarMenu from './components/customSidebarMenu.js';


export default class App extends React.Component{
  render(){
    return(
      <AppContainer/>
    )
  }
}

const TabNavigator = createBottomTabNavigator({
  HomeScreen: {screen: HomeScreen},
  Exchange: {screen: Exchange},
},
{
  defaultNavigationOptions: ({navigation})=>({
    tabBarIcon: ()=>{
      const routeName = navigation.state.routeName;
      if(routeName === "HomeScreen"){
        return(
          <Image
          source={require("./assets/home.png")}
          style={{width:20, height:20}}
        />
        )

      }
      else if(routeName === "Exchange"){
        return(
          <Image
          source={require("./assets/exchange.png")}
          style={{width:20, height:20,}}
        />)

      }
    }
  })
}
);

const AppDrawNavigator = createDrawerNavigator({
Home : {
  screen : TabNavigator
  },
Settings : {
  screen : SettingScreen
  }
},
{
  contentComponent:customSidebarMenu
},
{
  initialRouteName : 'Home'
})

const switchNavigator = createSwitchNavigator({
WelcomeScreen:{screen: WelcomeScreen},
AppDrawNavigator : AppDrawNavigator,
})

const AppContainer =  createAppContainer(switchNavigator);