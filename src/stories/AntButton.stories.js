import React from 'react';

import { AntButton } from './AntButton';

export default {
  title: 'Ant Button',
  component: AntButton,
  argTypes: {
    backgroundColor: '#F96302'
  }
}

const Template = (args) => <AntButton {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  primary: true,
  label: 'Button',
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: 'Button',
};

export const Large = Template.bind({});
Large.args = {
  size: 'large',
  label: 'Button',
};

export const Small = Template.bind({});
Small.args = {
  size: 'small',
  label: 'Button',
};