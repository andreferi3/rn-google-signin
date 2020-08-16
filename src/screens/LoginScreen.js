import React, { useContext } from 'react'
import { View, Text } from 'react-native'

import PropTypes from 'prop-types';

import { GoogleSigninButton } from 'react-native-google-signin';

import IWrapper from '../components/IWrapper';
import { GlobalStyles } from '../themes/GlobalStyles';
import { UserContext } from '../contexts/UserContext';

const LoginScreen = () => {
    const { signIn, signOut, isLoggedin, userInfo } = useContext(UserContext)
    console.log(userInfo)
    return (
        <IWrapper
            contentContainerStyle={[GlobalStyles.contentContainerCenter]}>
            {
                isLoggedin ? (
                    <Text>Logged In</Text>
                ) : (
                        <GoogleSigninButton
                            onPress={signIn} />
                    )
            }
        </IWrapper>
    )
}

LoginScreen.propTypes = {

}

LoginScreen.defaultProps = {

}

export default LoginScreen