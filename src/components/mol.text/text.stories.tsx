import { Text, TextProps } from './text.component';
import { Meta, StoryObj} from '@storybook/react'

export default {
    title: 'Components/Text',
    component: Text,
    argTypes: {
        size: {
            options: ['sm', 'md', 'lg'],
            control:{
                type: 'inline-radio'
            }
        },
        asChild: {
            table: {
                disable: true,
            }
        }
    },
    args:{
        children: 'lorem ipsum'
    },

} as Meta<TextProps>;

export const Default: StoryObj = {}

