import React from 'react';
import PropTypes from 'prop-types';
import {View, Text, TextInput, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import useStyle from 'src/hooks/useStyle';
import style from './style';

const CheckBox = ({
  label,
  options,
  onChange,
  onPlusButtonClick,
  onMinusButtonClick,
}) => {
  const [Colors, Styles] = useStyle(style);
  return (
    <View style={Styles.marginBottom10}>
      <Text style={Styles.label}>{label}</Text>
      <View style={Styles.inputContainer}>
        {Object.keys(options).map((item, index) => (
          <RadioItem
            key={index}
            item={item}
            selectedItem={options[item] !== false}
            onChange={onChange}
            quantity={options[item]}
            onPlusButtonClick={onPlusButtonClick}
            onMinusButtonClick={onMinusButtonClick}
          />
        ))}
      </View>
    </View>
  );
};

const RadioItem = ({
  item,
  selectedItem,
  quantity,
  onChange,
  onPlusButtonClick,
  onMinusButtonClick,
}) => {
  const [Colors, Styles] = useStyle(style);
  return (
    <View style={[Styles.radioItem]}>
      <View style={[Styles.flexRow, Styles.flex1, Styles.alignCenter]}>
        <TouchableOpacity
          style={[Styles.flexRow, Styles.flex1, Styles.alignCenter]}
          onPress={() => onChange(item)}>
          <>
            <Icon
              name={selectedItem ? 'check-circle' : 'circle-o'}
              size={20}
              color={selectedItem ? Colors.grayDark : Colors.grayMedium}
            />
            <Text
              style={[
                Styles.itemText,
                selectedItem ? Styles.itemTextSelected : '',
              ]}>
              {item}
            </Text>
          </>
        </TouchableOpacity>
        {selectedItem && (
          <View style={[Styles.flexRow, Styles.alignCenter]}>
            <TouchableOpacity onPress={() => onMinusButtonClick(item)}>
              <Icon
                name="minus"
                size={20}
                color={Colors.grayDark}
              />
            </TouchableOpacity>
            <Text
              style={[
                Styles.itemText,
                selectedItem ? Styles.itemTextSelected : '',
              ]}>
              {quantity}
            </Text>
            <TouchableOpacity onPress={() => onPlusButtonClick(item)}>
              <Icon name="plus" size={20} color={Colors.grayDark} style={[Styles.marginLeft10]} />
            </TouchableOpacity>
          </View>
        )}
      </View>
    </View>
  );
};

CheckBox.defaultProps = {
  options: [],
  onChange: () => {},
};

CheckBox.propTypes = {
  label: PropTypes.string.isRequired,
  onChange: PropTypes.func,
};

export {CheckBox};
