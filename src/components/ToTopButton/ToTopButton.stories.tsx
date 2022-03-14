import { ComponentMeta, ComponentStory } from '@storybook/react';
import ToTopButton from './ToTopButton';

export default {
  title: 'Components/ToTopButton',
  component: ToTopButton,
} as ComponentMeta<typeof ToTopButton>;

const Template: ComponentStory<typeof ToTopButton> = ({ ...args }) => (
  <ToTopButton {...args} />
);

export const Default = Template.bind({});

Default.args = {
  height: 100,
  hoverColor: 'black',
};
