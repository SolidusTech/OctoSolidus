import { ComponentMeta, ComponentStory } from '@storybook/react';
import ToTopButton from './ToTopButton';

export default {
  title: 'Components/ToTopButton',
  component: ToTopButton,
  argTypes: {
    children: { table: { disable: true } },
    className: { table: { disable: true } },
  },
} as ComponentMeta<typeof ToTopButton>;

const Template: ComponentStory<typeof ToTopButton> = ({ ...args }) => (
  <>
    <div id='teste'>Block</div>
    <div style={{ height: '200px' }}>Block</div>
    <div style={{ height: '200px' }}>Block</div>
    <div style={{ height: '200px' }}>Block</div>
    <div style={{ height: '200px' }}>Block</div>
    <div>Block</div>
    <ToTopButton {...args} />
  </>
);

export const Default = Template.bind({});

Default.args = {
  height: 100,
  hoverColor: 'black',
  idElement: 'test',
  reference: '<div>Block</div>',
  children: <p>It's Works !</p>,
};
