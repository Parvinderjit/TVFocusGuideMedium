import React from "react";
import { forwardRef } from "react";
import { View, Text } from 'react-native'
import { TVButton} from "./TVButton";

type SecondComponentProp = {
    accessible?: boolean|undefined
}

export const SecondComponent = forwardRef<any,SecondComponentProp>(({accessible}, ref) => {
    return <View ref={ref} accessible={accessible}>
        <TVButton style={{marginTop: 20}}>
            <Text style={{color:'black'}}>Second Component Button</Text>
        </TVButton>
    </View>
});