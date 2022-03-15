import { ComponentMeta, ComponentStory } from '@storybook/react';
import LoadingCircle from './LoadingCircle';

export default {
  title: 'Components/Loadings/LoadingCircle',
  component: LoadingCircle,
  argTypes: {
    children: { table: { disable: true } },
    className: { table: { disable: true } },
  },
} as ComponentMeta<typeof LoadingCircle>;

const Template: ComponentStory<typeof LoadingCircle> = ({
  children,
  ...args
}) => (
  <div
    style={{
      height: '92vh',
      width: '95vw',
    }}
  >
    <LoadingCircle {...args}>{children}</LoadingCircle>
  </div>
);

export const Default = Template.bind({});
