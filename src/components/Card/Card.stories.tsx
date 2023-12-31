import type { Meta, StoryObj } from '@storybook/react';
import Card from '.';

const meta = {
    title: 'Portfolio/Card',
    component: Card,
    parameters: {
        layout: 'centered',
    },
    decorators: [
        (Story, args) => {
            return (
                <Story {...args} />
            );
        }
    ],
    tags: ['autodocs'],
    argTypes: {},
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        title: 'Title',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        alt: 'alt text',
        src: "src/images/inicio/triptico1.jpg",
        techs: ["html5", "css3", "js", "sass", "react"],
    }
};
