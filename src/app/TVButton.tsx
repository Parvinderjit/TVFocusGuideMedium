import { forwardRef, useState, ReactNode } from "react";
import { TouchableOpacity, ViewStyle, StyleSheet } from "react-native";

export const TVButton = forwardRef<any, TVButtonProps>(({children, style = viewStyle.buttonStyle, onPress}, ref) => {
    const [focused, setFocused] = useState(false)
    const focusedButtonStyle = focused ? viewStyle.buttonStyleFocused : null
    return (
        <TouchableOpacity ref={ref} activeOpacity={1} onPress={onPress} style={[style, viewStyle.buttonStyle, focusedButtonStyle]} onFocus={() => setFocused(true)} onBlur={() => setFocused(false)}>
            {children}
        </TouchableOpacity>
    );
});

interface TVButtonProps {
    ref?: React.MutableRefObject<any>,
    children: ReactNode,
    style?: ViewStyle,
    onPress?: VoidFunction
}


const viewStyle = StyleSheet.create({
    buttonStyle: {
      backgroundColor:'gray',
      borderRadius: 4,
      padding: 8,
    }, 
    buttonStyleFocused: {
      shadowColor:"red",
      shadowOpacity: 0.5,
      shadowRadius: 10,
      shadowOffset: {width: 0 , height:0}
    }
  })