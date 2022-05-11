import {
    StyleSheet
} from 'react-native';
import { Mixins, Spacing, Typography } from 'src/styles'

const styles = ({ Colors }) =>
    StyleSheet.create({
        label:{
            color: Colors.gray,
            fontSize: Typography.FONT_SIZE_16,
            marginBottom: Spacing.SCALE_4
        },
        inputContainer:{
            flexDirection: 'row',
            flexWrap: 'wrap'
        },
        radioItem:{
            padding: Spacing.SCALE_12,
            margin: Spacing.SCALE_5,
            backgroundColor: Colors.grayLight,
            borderRadius: Spacing.SCALE_8
        },
        radioItemSelected:{
            backgroundColor: Colors.gray
        },
        itemText:{
            color: Colors.grayDark,
            fontSize: Typography.FONT_SIZE_16,
        },
        itemTextSelected:{
            color: Colors.white,
        }
    });

export default styles;
