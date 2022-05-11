import React from 'react';
import {
  View,
  TouchableOpacity,
  Text
} from 'react-native';
import useStyle from 'src/hooks/useStyle'
import style from './style';

const Body = ({onStorageClick,onMovingClick}) => {
  const [Colors,Styles] = useStyle(style);
  return (
    <View style={[Styles.flex1,Styles.centerAll]}>
      <View>
      <TouchableOpacity onPress={onStorageClick} style={[Styles.marginBottom20]}>
        <View style={Styles.button}>
          <View style={Styles.buttonInner}>
            <Text style={Styles.buttonText}>STORAGE</Text>
          </View>
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={onMovingClick}>
        <View style={[Styles.button, Styles.movingButton]}>
          <View style={Styles.buttonInner}>
            <Text style={Styles.buttonText}>MOVING</Text>
          </View>
        </View>
      </TouchableOpacity>
      </View>
    </View>
  );
};

export default Body;
