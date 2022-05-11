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
            backgroundColor: Colors.grayLight,
            borderRadius: Spacing.SCALE_5,
        },
        iconcontainer:{
            justifyContent: 'center',
            alignItems: 'center',
            paddingLeft: Spacing.SCALE_12,
            paddingRight: Spacing.SCALE_8
        },
        inputBox:{
            padding: 0,
            margin: 0,
            padding: Spacing.SCALE_8,
            color: Colors.grayDark,
            fontSize: Typography.FONT_SIZE_16,
            flex: 1
        }
    });

export default styles;
