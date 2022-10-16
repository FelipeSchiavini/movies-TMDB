import { Meta, StoryObj } from '@storybook/react';
import { H1, HeadingProps } from './headers.style';

export default {
    title: 'Components/Heading/H1',
    component: H1,
    argTypes: {
        center: {
            options: [true, false],
            control:{
                type: 'inline-radio'
            }
        },
        kind: {
            options: ['dark', 'light'],
            control:{
                type: 'inline-radio'
            }
        },
    },
    args:{
        children: 'lorem ipsum'
    },

} as Meta<HeadingProps>;

export const DefaultH1: StoryObj = {}
