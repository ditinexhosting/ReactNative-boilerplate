import React from 'react';
import {
    View,
    Text,
    TextInput
} from 'react-native';
import useStyle from 'src/hooks/useStyle'
import style from './style';

export const InputBox = ({ label, Icon, iconName, ...props }) => {
    const [Colors, Styles] = useStyle(style)
    return (
        <View style={Styles.marginBottom10}>
            <Text style={Styles.label}>{label}</Text>
            <View style={Styles.inputContainer}>
                {Icon && <View style={Styles.iconcontainer}><Icon name={iconName?iconName:'rocket'} size={25} color={Colors.grayMedium} /></View>}
                <TextInput
                    style={Styles.inputBox}
                    {...props}
                />
            </View>
        </View>
    );
}
