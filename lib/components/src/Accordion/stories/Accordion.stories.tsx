import React from 'react';
import { Accordion } from '../Accordion';
import { AccordionItem } from '../AccordionItem';
import { AccordionHeader } from '../AccordionHeader';
import { AccordionBody } from '../AccordionBody';
import { Icons } from '../../icon/icon';

// eslint-disable-next-line import/order
import type { Story, Meta } from '@storybook/react';
import type { AccordionProps } from '../Accordion';

export default {
  title: 'Basics/Accordion',
  component: Accordion,
  argTypes: { onOpen: { action: 'open' }, onClose: { action: 'close' } },
  parameters: {
    layout: 'padded',
    test: { disable: true },
  },
} as Meta;

const Template: Story<AccordionProps> = (args) => (
  <Accordion {...args}>
    <AccordionItem>
      <AccordionHeader>Item 1</AccordionHeader>
      <AccordionBody>
        Minim proident eu aliqua irure tempor incididunt fugiat. Adipisicing aliquip cillum esse
        amet. Consequat qui consectetur duis laboris aliqua fugiat Lorem eiusmod ut cupidatat
        excepteur. Magna nulla nulla velit voluptate duis nulla quis Lorem dolore labore aliqua sit
        ipsum.
      </AccordionBody>
    </AccordionItem>
    <AccordionItem>
      <AccordionHeader>
        Mollit elit adipisicing est commodo nostrud laboris anim. Laboris in in proident nulla
        proident eiusmod non excepteur
      </AccordionHeader>
      <AccordionBody>
        Minim proident eu aliqua irure tempor incididunt fugiat. Adipisicing aliquip cillum esse
        amet. Consequat qui consectetur duis laboris aliqua fugiat Lorem eiusmod ut cupidatat
        excepteur. Magna nulla nulla velit voluptate duis nulla quis Lorem dolore labore aliqua sit
        ipsum.
      </AccordionBody>
    </AccordionItem>
    <AccordionItem>
      <AccordionHeader>Header only no body</AccordionHeader>
    </AccordionItem>
    <AccordionItem>
      <AccordionHeader Icon={<Icons icon="lightning" />}>Custom Icon</AccordionHeader>
      <AccordionBody>
        Minim proident eu aliqua irure tempor incididunt fugiat. Adipisicing aliquip cillum esse
        amet. Consequat qui consectetur duis laboris aliqua fugiat Lorem eiusmod ut cupidatat
        excepteur. Magna nulla nulla velit voluptate duis nulla quis Lorem dolore labore aliqua sit
        ipsum.
      </AccordionBody>
    </AccordionItem>
    <AccordionItem>
      <AccordionHeader>Item 3</AccordionHeader>
      <AccordionBody>
        Minim proident eu aliqua irure tempor incididunt fugiat. Adipisicing aliquip cillum esse
        amet. Consequat qui consectetur duis laboris aliqua fugiat Lorem eiusmod ut cupidatat
        excepteur. Magna nulla nulla velit voluptate duis nulla quis Lorem dolore labore aliqua sit
        ipsum.
      </AccordionBody>
    </AccordionItem>
  </Accordion>
);

export const DefaultStory = Template.bind({});
DefaultStory.args = {
  defaultOpen: 1,
  allowMultipleOpen: false,
  bordered: true,
  rounded: true,
  lined: true,
};

export const HeadersOnly: Story<AccordionProps> = (args) => (
  <Accordion {...args}>
    <AccordionItem>
      <AccordionHeader>Item #1</AccordionHeader>
    </AccordionItem>
    <AccordionItem>
      <AccordionHeader>
        Mollit elit adipisicing est commodo nostrud laboris anim. Laboris in in proident nulla
        proident eiusmod non excepteur
      </AccordionHeader>
    </AccordionItem>
    <AccordionItem>
      <AccordionHeader>Item #3</AccordionHeader>
    </AccordionItem>
    <AccordionItem>
      <AccordionHeader>Item #4</AccordionHeader>
    </AccordionItem>
    <AccordionItem>
      <AccordionHeader>Item #5</AccordionHeader>
    </AccordionItem>
    <AccordionItem>
      <AccordionHeader>Item #6</AccordionHeader>
    </AccordionItem>
    <AccordionItem>
      <AccordionHeader>Item #7</AccordionHeader>
    </AccordionItem>
    <AccordionItem>
      <AccordionHeader>Item #8</AccordionHeader>
    </AccordionItem>
    <AccordionItem>
      <AccordionHeader>Item #9</AccordionHeader>
    </AccordionItem>
  </Accordion>
);
HeadersOnly.args = {
  bordered: true,
  rounded: true,
  lined: true,
};