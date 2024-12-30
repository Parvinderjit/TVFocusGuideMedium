import React, {useContext, useRef } from 'react';

import { Text, View, TVFocusGuideView } from 'react-native';
import { ThemeContext, ThemeProvider } from '../config';
import {TVButton} from './TVButton'
import {SecondComponent} from './Second'

const App = () => (
    <ThemeProvider>
        <AppThemed />
    </ThemeProvider>
);

const AppThemed = () => {
    const { theme } = useContext(ThemeContext);
    

    const oddButtonRef = useRef()
    const secondCompoentRef = useRef()

    return (
        <View style={theme.styles.wrapper}>
            <View hasTVPreferredFocus style={{
                flexDirection:'row'
            }}>
                
                <TVButton>
                    <Text >Button 1</Text>
                </TVButton>
                
                <TVButton style={{marginLeft: 10}}>
                    <Text style={{color:'black'}}>Button 2</Text>
                </TVButton>
                
            </View>
            <View>
                <View style={{flexDirection:'row'}}>
                <View  style={{
                     width: 50, opacity: 0.2, marginTop:20, marginRight:20
                    }}/> 
                <SecondComponent ref={secondCompoentRef}/>
                    <TVFocusGuideView  destinations={[oddButtonRef.current]} style={{
                    backgroundColor:'green', width: 50, opacity: 0.2, marginTop:20, marginLeft:20
                    }}/> 
                </View>
                 <TVFocusGuideView  destinations={[oddButtonRef.current]} style={{
                    backgroundColor:'green', height: 20, opacity: 0.2, marginHorizontal:70, marginTop: 20
                    }}/> 
            </View>
            <View style= {{position:'absolute', right:20, bottom:20}}>
            <TVFocusGuideView style={{height: 20, backgroundColor:'green', opacity: 0.2, marginLeft: 50, marginBottom: 20}} destinations={[secondCompoentRef.current]}/>

            <View style={{flexDirection:'row'}}>
            <TVFocusGuideView style={{width: 50, backgroundColor:'green', opacity: 0.2, marginRight: 20 }} destinations={[secondCompoentRef.current]}/>
                <TVButton ref={oddButtonRef} >
                    <Text> Odd Component</Text>
                </TVButton>
            </View>
            </View>
        </View>
    );
};

export default App;
