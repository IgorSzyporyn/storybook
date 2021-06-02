import React from 'react';
import { withTests } from '@storybook/addon-jest';
import { AccordionBody } from '../AccordionBody';
import results from '../../../../../.jest-test-results.json';

// eslint-disable-next-line import/order
import type { Story, Meta } from '@storybook/react';
import type { AccordionBodyProps } from '../AccordionBody';

export default {
  title: 'Basics/Accordion/Components/Body',
  component: AccordionBody,
  decorators: [withTests({ results })],
  parameters: {
    layout: 'padded',
  },
} as Meta;

const Template: Story<AccordionBodyProps> = (args) => (
  <AccordionBody {...args}>
    Minim proident eu aliqua irure tempor incididunt fugiat. Adipisicing aliquip cillum esse amet.
    Consequat qui consectetur duis laboris aliqua fugiat Lorem eiusmod ut cupidatat excepteur. Magna
    nulla nulla velit voluptate duis nulla quis Lorem dolore labore aliqua sit ipsum.
  </AccordionBody>
);

export const Body = Template.bind({});
Body.args = {
  open: true,
};
