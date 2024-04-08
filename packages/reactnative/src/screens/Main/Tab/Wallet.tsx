import { View } from 'native-base'
import React, { useEffect } from 'react'
import { BackHandler, NativeEventSubscription } from 'react-native'
import Header from './modules/wallet/Header'
import MainBalance from './modules/wallet/MainBalance'
import Transactions from './modules/wallet/Transactions'
import { useFocusEffect } from '@react-navigation/native'

let backHandler: NativeEventSubscription;

type Props = {}

function Wallet({ }: Props) {
    useFocusEffect(() => {
        backHandler = BackHandler.addEventListener('hardwareBackPress', () => {
            BackHandler.exitApp();

            return true;
        });
    })

    useEffect(() => {
        return () => {
            backHandler?.remove();
        };
    }, [])

    return (
        <View flex={"1"} bgColor={"white"} px={"4"} py={"1"}>
            <Header />
            <MainBalance
                backHandler={backHandler}
            />
            <Transactions />
        </View>
    )
}

export default Wallet