import { SignInContainer } from 'containers';
import React from 'react';
import { WithLayout } from 'components';

const SignIn: React.FC = () => {
  return <SignInContainer />;
};

export const SignInPage = WithLayout(SignIn);
