import { ComponentMeta, ComponentStory } from '@storybook/react';
import LoadingCircle from './LoadingCircle';

export default {
  title: 'Components/Loadings/LoadingCircle',
  component: LoadingCircle,
} as ComponentMeta<typeof LoadingCircle>;

const Template: ComponentStory<typeof LoadingCircle> = ({
  children,
  ...args
}) => <LoadingCircle {...args}>{children}</LoadingCircle>;

export const Default = Template.bind({});

Default.args = {};
