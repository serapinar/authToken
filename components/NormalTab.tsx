import React from 'react';
import HomeScreen from '../screens/HomeScreen.tsx';
import {HomeIcon} from 'react-native-heroicons/solid';
import CategoriesScreen from '../screens/CategoriesScreen.tsx';
import {
  HeartIcon,
  MegaphoneIcon,
  ShoppingCartIcon,
  Squares2X2Icon,
} from 'react-native-heroicons/mini';
import BasketScreen from '../screens/BasketScreen.tsx';
import FavoritesScreen from '../screens/FavoritesScreen.tsx';
import CampaignsScreen from '../screens/CampaignsScreen.tsx';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

export default function NormalTab() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerStyle: {backgroundColor: '#84e8d5'},
        headerTintColor: 'white',
      }}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          headerShown: false,
          tabBarLabel: 'Home',
          tabBarIcon: () => <HomeIcon name="home" color={'pink'} size={22} />,
        }}
      />
      <Tab.Screen
        name="Categories"
        component={CategoriesScreen}
        options={{
          tabBarLabel: 'Categories',
          tabBarIcon: () => (
            <Squares2X2Icon name="categories" color={'pink'} size={22} />
          ),
        }}
      />
      <Tab.Screen
        name="Basket"
        component={BasketScreen}
        options={{
          tabBarLabel: 'Basket',
          tabBarIcon: () => (
            <ShoppingCartIcon name="basket" color={'pink'} size={22} />
          ),
        }}
      />
      <Tab.Screen
        name="Favorites"
        component={FavoritesScreen}
        options={{
          tabBarLabel: 'Favorites',
          tabBarIcon: () => (
            <HeartIcon name="basket" color={'pink'} size={22} />
          ),
        }}
      />
      <Tab.Screen
        name="Campaigns"
        component={CampaignsScreen}
        options={{
          tabBarLabel: 'Campaigns',
          tabBarIcon: () => (
            <MegaphoneIcon name="Campaigns" color={'pink'} size={22} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
