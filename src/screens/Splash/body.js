import React from 'react';
import { View, Image } from 'react-native';
import { logo } from 'src/assets';
import useStyle from 'src/hooks/useStyle'
import style from './style';

const Body = () => {
  const [Colors,Styles] = useStyle(style);
  return (
    <View style={[Styles.flex1,Styles.centerAll,Styles.body]}>
      <Image style={Styles.logo} source={logo} />
    </View>
  );
};

export default Body;
