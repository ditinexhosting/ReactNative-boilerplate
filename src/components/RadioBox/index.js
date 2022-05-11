import React from 'react';
import PropTypes from 'prop-types';
import {
    View,
    Text,
    TextInput,
    TouchableOpacity
} from 'react-native';
import useStyle from 'src/hooks/useStyle'
import style from './style';

const RadioBox = ({ label, options, value, onChange }) => {
    const [Colors, Styles] = useStyle(style)
    return (
        <View style={Styles.marginBottom10}>
            <Text style={Styles.label}>{label}</Text>
            <View style={Styles.inputContainer}>
                {
                    options.map((item,index)=><RadioItem key={index} item={item} selectedItem={value} onChange={onChange} />)
                }
            </View>
        </View>
    );
}

const RadioItem = ({item, selectedItem, onChange})=>{
    const [Colors, Styles] = useStyle(style)
    return (
        <View style={[Styles.radioItem,item===selectedItem ? Styles.radioItemSelected : '']}>
            <TouchableOpacity style={Styles.flex1} onPress={()=>onChange(item)}>
                <Text style={[Styles.itemText, item===selectedItem ? Styles.itemTextSelected : '']}>{item}</Text>
            </TouchableOpacity>
        </View>
    )
}

RadioBox.defaultProps = {
    options: [],
    onChange: ()=>{}
};

RadioBox.propTypes = {
    label: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func
}

export { RadioBox }