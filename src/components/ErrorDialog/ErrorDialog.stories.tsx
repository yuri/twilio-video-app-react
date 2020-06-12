import React from 'react';
import ErrorDialog from './ErrorDialog';
import { action } from '@storybook/addon-actions';

import { TwilioError } from 'twilio-video';

export default {
  title: 'ErrorDialog',
  component: ErrorDialog,
};

const errorObject = {
  message: 'All your base2',
  code: 123,
} as TwilioError;

// error={object('Error', errorObject)}
//     }

// export const Basic = ({error=errorObject}) => <ErrorDialog
//     error={error}
//     dismissError={action('dismissed')}
// />;
export const Basic = (args: any) => <ErrorDialog {...args} />;
Basic.args = {
  error: errorObject,
  dismissError: action('dismissed'),
};
Basic.argTypes = {
  error: {
    type: 'object',
  },
};
Basic.parameters = {
  controls: { expanded: true },
};
