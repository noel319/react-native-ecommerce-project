import { createAppContainer, createSwitchNavigator } from 'react-navigation'
import { createBottomTabNavigator } from 'react-navigation-tabs'
import { createStackNavigator } from 'react-navigation-stack'

import AuthLoading from '../screens/authLoading'
import Home from '../screens/home'
import SignIn from '../screens/signIn'
import SignUp from '../screens/signUp'
import Products from '../screens/products'
import ProductDetail from '../screens/productDetail'
import TrackOrder from '../screens/trackOrder'
import Cart from '../screens/cart'
import Checkout from '../screens/checkout'
import Menu from '../screens/menu'
import StoryComponents from '../screens/storyComponents'

import { tabBarIcon, tabBarOptions } from './optionsRouter'

const AuthStack = createStackNavigator(
  {
    Home,
    SignIn,
    SignUp,
  },
  {
    initialRouteName: 'Home',
    headerMode: 'none',
  },
)

const MainStack = createBottomTabNavigator(
  {
    Products: {
      screen: Products,
      navigationOptions: {
        tabBarLabel: 'Produtos',
      },
    },
    Cart: {
      screen: Cart,
      navigationOptions: {
        tabBarLabel: 'Carrinho',
      },
    },
    TrackOrder: {
      screen: TrackOrder,
      navigationOptions: {
        tabBarLabel: 'Meus Pedidos',
      },
    },
    Menu,
  },
  {
    initialRouteName: 'Products',
    defaultNavigationOptions: ({ navigation }) => {
      const { routeName } = navigation.state
      return {
        tabBarIcon: options => tabBarIcon(options, routeName),
      }
    },
    tabBarOptions,
  },
)

const AppStack = createStackNavigator(
  {
    Main: MainStack,
    ProductDetail: ProductDetail,
    Checkout: Checkout,
    StoryComponents: StoryComponents,
  },
  {
    mode: 'modal',
    headerMode: 'none',
  },
)

const SwitchApp = createSwitchNavigator(
  {
    AuthLoading,
    Auth: AuthStack,
    App: AppStack,
  },
  {
    initialRouteName: 'AuthLoading',
  },
)

const createRootNavigation = createAppContainer(SwitchApp)

export default createRootNavigation
