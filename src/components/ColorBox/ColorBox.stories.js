import React from 'react';

import  ColorBox  from './ColorBox';
import { storiesOf } from '@storybook/react';
import { wInfo } from '../../../utils';

storiesOf('Examples', module).addWithJSX(
    'ColorBox',
wInfo(`
    ### Notes 
    A simple box that allows you to specify color and text

    ### Usage
    ~~~js
    <ColorBox
        color={'#222222'}
        text={'color box!'}
    />
    ~~~

    ### Editing this story 
    See src/storybook/example/ColorBox.stories.js to change this description
    See src/storybook/example/ColorBox.tsx to see the actual component and the jsdoc comments that populate the prop type fields
 
`)(() => (
    <ColorBox 
        color={'#ff0000'}
        text={'Color Box!'}
    /> 
))
);