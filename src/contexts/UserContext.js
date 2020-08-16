import React, { createContext, useState, useEffect } from 'react'
import auth from '@react-native-firebase/auth';

export const UserContext = createContext()

import {
    GoogleSignin,
    statusCodes,
} from 'react-native-google-signin';

const UserContextProvider = ({ children }) => {
    const [isLoggedin, setIsLoggedin] = useState()
    const [userInfo, setUserInfo] = useState([])

    useEffect(() => {
        GoogleSignin.configure({
            scopes: ['email'],
            webClientId: '968431256562-del9npevnqpqpmeiens09emf2t6dpd50.apps.googleusercontent.com',
            offlineAccess: true
        });
    }, [])

    const signIn = async () => {
        try {
            await GoogleSignin.hasPlayServices();
            const { accessToken, idToken, user } = await GoogleSignin.signIn();
            setUserInfo(user)
            setIsLoggedin(true);
            const credential = auth.GoogleAuthProvider.credential(
                idToken,
                accessToken,
            );
            await auth().signInWithCredential(credential);
        } catch (error) {
            if (error.code === statusCodes.SIGN_IN_CANCELLED) {
                alert('Cancel');
            } else if (error.code === statusCodes.IN_PROGRESS) {
                alert('Signin in progress');
            } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
                alert('PLAY_SERVICES_NOT_AVAILABLE');
            } else {

            }
        }
    };

    const signOut = async () => {
        try {
            await GoogleSignin.revokeAccess();
            await GoogleSignin.signOut();
            setloggedIn(false);
            setuserInfo([]);
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <UserContext.Provider value={{ isLoggedin, userInfo, signIn, signOut }}>
            {children}
        </UserContext.Provider>
    )
}

export default UserContextProvider
