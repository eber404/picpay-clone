import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { AntDesign, Ionicons } from '@expo/vector-icons'

import { Home } from './screens/Home'
import { Wallet } from './screens/Wallet'
import { Pay } from './screens/Pay'

const { Navigator, Screen } = createBottomTabNavigator()

const icons = {
  Home: {
    lib: AntDesign,
    name: 'home',
  },
  Wallet: {
    lib: AntDesign,
    name: 'creditcard',
  },
  Pay: {
    lib: AntDesign,
    name: 'home',
  },
  Notifications: {
    lib: Ionicons,
    name: 'ios-notifications-outline',
  },
  Settings: {
    lib: AntDesign,
    name: 'setting',
  },
}

export function Navigation() {
  return (
    <Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          const { lib: Icon, name } = icons[route.name]
          return <Icon name={name} size={size} color={color} />
        },
      })}
      tabBarOptions={{
        style: {
          backgroundColor: '#131418',
          borderTopColor: 'rgba(255,255,255, 0.2)',
        },
        activeTintColor: '#fff',
        inactiveTintColor: '#92929c',
      }}
    >
      <Screen name="Home" component={Home} options={{ title: 'Início' }} icon />
      <Screen
        name="Wallet"
        component={Wallet}
        options={{ title: 'Carteira' }}
      />
      <Screen name="Pay" component={Pay} options={{ title: 'Pagar' }} />
      <Screen
        name="Notifications"
        component={Pay}
        options={{ title: 'Notificações' }}
      />
      <Screen name="Settings" component={Pay} options={{ title: 'Ajustes' }} />
    </Navigator>
  )
}
