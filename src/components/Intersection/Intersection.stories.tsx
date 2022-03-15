import { ComponentMeta, ComponentStory } from '@storybook/react';
import Intersection from './Intersection';

export default {
  title: 'Components/Intersection',
  component: Intersection,
  argTypes: {
    children: { table: { disable: true } },
    className: { table: { disable: true } },
  },
} as ComponentMeta<typeof Intersection>;

const Template: ComponentStory<typeof Intersection> = ({
  children,
  ...args
}) => <Intersection {...args}>{children}</Intersection>;

export const Default = Template.bind({});
