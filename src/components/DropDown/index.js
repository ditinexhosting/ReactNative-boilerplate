import React from 'react';
import {
    View,
    Text,
    TextInput
} from 'react-native';
import { Picker } from '@react-native-picker/picker';
import useStyle from 'src/hooks/useStyle'
import style from './style';

export const DropDown = ({ label, Icon, iconName, dropDownItems, ...props }) => {
    const [Colors, Styles] = useStyle(style)
    return (
        <View style={Styles.marginBottom10}>
            <Text style={Styles.label}>{label}</Text>
            <View style={Styles.inputContainer}>
                {Icon && <View style={Styles.iconcontainer}><Icon name={iconName?iconName:'rocket'} size={25} color={Colors.grayMedium} /></View>}
                <View style={Styles.flex1}>
                    <Picker
                        {...props}
                    >
                        {
                            dropDownItems.map((item,index)=><Picker.Item key={index} label={item} value={item} />)
                        }
                    </Picker>
                </View>
            </View>
        </View>
    );
}
