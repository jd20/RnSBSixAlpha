import React from 'react';
import {ComponentStory, ComponentMeta} from '@storybook/react-native';
import {MyButton} from './Button';

const MyButtonMeta: ComponentMeta<typeof MyButton> = {
    title: 'MyButton',
    component: MyButton,
    args: {
        text: 'Hello world',
    },
    argTypes: {
        onPress: {action: 'pressed the button'},
    },
};

export default MyButtonMeta;

type MyButtonStory = ComponentStory<typeof MyButton>;

export const Basic: MyButtonStory = args => <MyButton {...args} />;
