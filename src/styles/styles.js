import { StyleSheet } from 'react-native';
import Colors from './colors';
import * as Mixins from './mixins';
import Spacing from './spacing';
import Typography from './typography';

let margins = {};
for (let i = 1; i <= 100; i++) {
  margins['marginTop' + i] = { marginTop: Spacing['SCALE_' + i] };
}
for (let i = 1; i <= 100; i++) {
  margins['marginBottom' + i] = { marginBottom: Spacing['SCALE_' + i] };
}
for (let i = 1; i <= 100; i++) {
  margins['marginLeft' + i] = { marginLeft: Spacing['SCALE_' + i] };
}
for (let i = 1; i <= 100; i++) {
  margins['marginRight' + i] = { marginRight: Spacing['SCALE_' + i] };
}
for (let i = 1; i <= 100; i++) {
  margins['margin' + i] = { margin: Spacing['SCALE_' + i] };
}
for (let i = 1; i <= 100; i++) {
  margins['marginVertical' + i] = { marginVertical: Spacing['SCALE_' + i] };
}
for (let i = 1; i <= 100; i++) {
  margins['marginHorizontal' + i] = { marginHorizontal: Spacing['SCALE_' + i] };
}

let paddings = {};
for (let i = 1; i <= 100; i++) {
  paddings['paddingTop' + i] = { paddingTop: Spacing['SCALE_' + i] };
}
for (let i = 1; i <= 100; i++) {
  paddings['paddingBottom' + i] = { paddingBottom: Spacing['SCALE_' + i] };
}
for (let i = 1; i <= 100; i++) {
  paddings['paddingLeft' + i] = { paddingLeft: Spacing['SCALE_' + i] };
}
for (let i = 1; i <= 100; i++) {
  paddings['paddingRight' + i] = { paddingRight: Spacing['SCALE_' + i] };
}
for (let i = 1; i <= 100; i++) {
  paddings['padding' + i] = { padding: Spacing['SCALE_' + i] };
}
for (let i = 1; i <= 100; i++) {
  paddings['paddingVertical' + i] = { paddingVertical: Spacing['SCALE_' + i] };
}
for (let i = 1; i <= 100; i++) {
  paddings['paddingHorizontal' + i] = {
    paddingHorizontal: Spacing['SCALE_' + i],
  };
}

let layoutStyles = {
  flex1: {
    flex: 1,
  },
  flexStart: {
    alignSelf: 'flex-start',
  },
  flexEnd: {
    alignSelf: 'flex-end',
  },
  flexRow: {
    flexDirection: 'row',
  },
  fullWidth: {
    width: '100%',
  },
  spaceAround: {
    justifyContent: 'space-around',
  },
  spaceBetween: {
    justifyContent: 'space-between',
  },
  justifyCenter: {
    justifyContent: 'center',
  },
  justifyEnd:{
    justifyContent: 'flex-end'
  },
  alignCenter: {
    alignItems: 'center',
  },
  alignStart: {
    alignItems: 'flex-start',
  },
  alignEnd: {
    alignItems: 'flex-end',
  },
  centerAll: {
    justifyContent: 'center',
    alignItems: 'center',
  }
}



// Add all global styles here

const styles = ({Colors})=>StyleSheet.create({
  ...margins,
  ...paddings,
  ...layoutStyles,
  button:{
    backgroundColor: Colors.primary,
    borderRadius: Spacing.SCALE_10,
    width: Mixins.scaleSize(250),
    padding: Spacing.SCALE_2,
  },
  buttonInner:{
    padding: Spacing.SCALE_20,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: Spacing.SCALE_2,
    borderColor: Colors.white,
    borderRadius: Spacing.SCALE_10,
  },
  buttonText:{
    color: Colors.white,
    fontWeight: 'bold',
    fontSize: Typography.FONT_SIZE_20
  },
  h1:{
    fontSize: Typography.FONT_SIZE_20,
    color: Colors.secondary,
    fontWeight: 'bold',
    marginBottom: Spacing.SCALE_5
  },
  smallButton:{
    width: Mixins.scaleSize(150),
    backgroundColor: Colors.primary,
    padding: Spacing.SCALE_10,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: Spacing.SCALE_8
  },
  smallButtonText:{
    fontSize: Typography.FONT_SIZE_18,
    color: Colors.white
  },
  loader:{
    position: 'absolute',
    width: Mixins.DEVICE_WIDTH,
    height: Mixins.DEVICE_HEIGHT,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0)'
  }
});

export default styles;
