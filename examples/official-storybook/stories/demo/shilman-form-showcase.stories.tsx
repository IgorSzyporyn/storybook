import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ShilmanForm } from './ShilmanForm/ShilmanForm';

export default {
  title: 'Other/Demo/ShilmanForm',
  component: ShilmanForm,
  parameters: {
    layout: 'centered',
  },
} as ComponentMeta<typeof ShilmanForm>;

const Template: ComponentStory<typeof ShilmanForm> = (args) => <ShilmanForm {...args} />;

export const Controllable = Template.bind({});
Controllable.args = {
  verifyPassword: false,
};
