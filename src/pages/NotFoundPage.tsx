import React from 'react';
import PageTemplate from '../components/PageTemplate';
import Error from '../components/Error/Error';

type NotFoundPageProps = React.ComponentProps<typeof PageTemplate>;

const NotFoundPage: React.FC<NotFoundPageProps> = ({ onLoginClick, onSignUpClick }) => (
  <PageTemplate onLoginClick={onLoginClick} onSignUpClick={onSignUpClick}>
    <Error />
  </PageTemplate>
);

export default NotFoundPage;
