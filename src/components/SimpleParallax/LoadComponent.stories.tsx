import { ComponentMeta, ComponentStory } from '@storybook/react';
import SimpleParallax from './SimpleParallax';

export default {
  title: 'Components/SimpleParallax',
  component: SimpleParallax,
} as ComponentMeta<typeof SimpleParallax>;

const Template: ComponentStory<typeof SimpleParallax> = ({ ...args }) => (
  <>
    <div style={{ height: '500px', background: 'black' }}>ae</div>
    <SimpleParallax {...args} />
    <div style={{ height: '500px', background: 'black' }}>ae</div>
  </>
);

export const Default = Template.bind({});

Default.args = {
  imageUrl:
    'https://i.pinimg.com/originals/bf/82/f6/bf82f6956a32819af48c2572243e8286.jpg',
  backgroundColor: 'red',
};
