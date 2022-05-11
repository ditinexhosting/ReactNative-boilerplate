import {
    StyleSheet
} from 'react-native';
import { Mixins, Spacing, Typography } from 'src/styles'

const styles = ({ Colors }) =>
    StyleSheet.create({
        label:{
            color: Colors.grayDark,
            fontSize: Typography.FONT_SIZE_18,
            marginBottom: Spacing.SCALE_4
        },
        radioItem:{
            paddingHorizontal: Spacing.SCALE_5,
            margin: Spacing.SCALE_5
        },
        radioItemSelected:{
            backgroundColor: Colors.gray
        },
        itemText:{
            paddingLeft: Spacing.SCALE_10,
            color: Colors.grayDark,
            fontSize: Typography.FONT_SIZE_16,
        },
        itemTextSelected:{
            fontWeight: 'bold'
        }
    });

export default styles;
