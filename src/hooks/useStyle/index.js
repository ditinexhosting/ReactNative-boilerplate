import React from 'react';
import { Colors, Styles } from 'src/styles'
/*
 * Hook for Color and Style
 */
const useStyle = (style=null) => {

let parsedCommonStyle = Styles({Colors:Colors})
if(style && typeof style == 'function'){
    const parsedStyle = style({Colors:Colors})
    parsedCommonStyle = {...parsedCommonStyle,...parsedStyle}
}

  return [Colors,parsedCommonStyle]
}



export default useStyle