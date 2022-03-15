import { ComponentMeta, ComponentStory } from '@storybook/react';
import ErrorMessage from './ErrorMessage';

export default {
  title: 'Components/ErrorMessage',
  component: ErrorMessage,
  argTypes: {
    children: { table: { disable: true } },
    className: { table: { disable: true } },
  },
} as ComponentMeta<typeof ErrorMessage>;

const Template: ComponentStory<typeof ErrorMessage> = ({
  children,
  ...args
}) => <ErrorMessage {...args}>{children}</ErrorMessage>;

export const Default = Template.bind({});

Default.args = {
  iconSize: 70,
  message: 'Ocorreu algum Erro !',
  children: <p>It's Works !</p>,
};
