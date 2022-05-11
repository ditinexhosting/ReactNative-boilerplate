import {
  StyleSheet
} from 'react-native';
import { Mixins, Spacing, Typography } from 'src/styles'

const styles = ({Colors}) =>
  StyleSheet.create({
    logo: {
      resizeMode: 'contain',
      width: Mixins.scaleSize(180),
      height: Mixins.scaleSize(70),
    },
    body:{
      backgroundColor: Colors.white
    }
  });

export default styles;
