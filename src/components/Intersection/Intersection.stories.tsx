import { ComponentMeta, ComponentStory } from '@storybook/react';
import Intersection from './Intersection';

export default {
  title: 'Components/Intersection',
  component: Intersection,
} as ComponentMeta<typeof Intersection>;

const Template: ComponentStory<typeof Intersection> = ({
  children,
  ...args
}) => <Intersection {...args}>{children}</Intersection>;

export const Default = Template.bind({});
