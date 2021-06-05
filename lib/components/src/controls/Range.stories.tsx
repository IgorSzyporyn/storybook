import React, { useState } from 'react';
import { RangeControl } from './Range';

// eslint-disable-next-line import/order
import type { ComponentStory, Meta } from '@storybook/react';

export default {
  title: 'Controls/Range',
  component: RangeControl,
  parameters: {
    layout: 'centered',
  },
} as Meta;

const Template: ComponentStory<typeof RangeControl> = (args) => {
  const [value, setValue] = useState(10);

  return (
    <div style={{ width: 500 }}>
      <RangeControl name="range" value={value} onChange={(newVal) => setValue(newVal)} {...args} />
      <pre>{JSON.stringify(value) || 'undefined'}</pre>
    </div>
  );
};

export const Controllable = Template.bind({});
Controllable.args = {
  min: 0,
  max: 20,
  step: 2,
};

export const Zero = () => {
  const [value, setValue] = useState(0);

  return (
    <div style={{ width: 500 }}>
      <RangeControl
        name="range"
        value={value}
        onChange={(newVal) => setValue(newVal)}
        min={0}
        max={20}
        step={2}
      />
      <pre>{JSON.stringify(value) || 'undefined'}</pre>
    </div>
  );
};

export const Undefined = () => {
  const [value, setValue] = useState(undefined);

  return (
    <div style={{ width: 500 }}>
      <RangeControl
        name="range"
        value={value}
        onChange={(newVal) => setValue(newVal)}
        min={0}
        max={20}
        step={2}
      />
      <pre>{JSON.stringify(value) || 'undefined'}</pre>
    </div>
  );
};
