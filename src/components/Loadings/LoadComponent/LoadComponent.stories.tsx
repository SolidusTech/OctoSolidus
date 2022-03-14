import { ComponentMeta, ComponentStory } from '@storybook/react';
import LoadComponent from './LoadComponent';

export default {
  title: 'Components/Loadings/LoadComponent',
  component: LoadComponent,
} as ComponentMeta<typeof LoadComponent>;

const Template: ComponentStory<typeof LoadComponent> = ({
  children,
  ...args
}) => <LoadComponent {...args}>{children}</LoadComponent>;

export const Default = Template.bind({});

Default.args = {
  errorMessage: 'Não foi possível carregar a pagina',
  isLoading: false,
  children: <p>It's Works !</p>,
};
