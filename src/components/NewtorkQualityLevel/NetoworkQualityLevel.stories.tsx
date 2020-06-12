import React from 'react';
import NetworkQualityLevel from './NetworkQualityLevel';

export default {
  title: 'NetworkQualityLevel',
  component: NetworkQualityLevel,
};

export const Basic = (args: any) => <NetworkQualityLevel {...args} />;
Basic.argTypes = {
  qualityLevel: {
    control: { type: 'number', min: -1, max: 7 },
  },
};
