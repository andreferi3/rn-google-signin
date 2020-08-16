import React from 'react'
import { View, Text } from 'react-native'

import RoutesNavigator from './routes';
import UserContextProvider from './contexts/UserContext';

const App = () => {
    return (
        <UserContextProvider>
            <RoutesNavigator />
        </UserContextProvider>
    )
}

export default App