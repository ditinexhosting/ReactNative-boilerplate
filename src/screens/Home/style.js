import {
  StyleSheet
} from 'react-native';
import { Mixins, Spacing, Typography } from 'src/styles'

const styles = ({Colors}) =>
  StyleSheet.create({
    movingButton:{
      backgroundColor: Colors.secondary,
    }
  });

export default styles;
