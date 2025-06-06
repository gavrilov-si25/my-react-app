import React, { ReactNode } from 'react';
import Header, { HeaderProps } from './Header/Header';
import Join from './Join/Join';
import Footer from './Footer/Footer';

interface PageTemplateProps extends HeaderProps {
  children?: ReactNode;
}

const PageTemplate: React.FC<PageTemplateProps> = ({ onLoginClick, onSignUpClick, children }) => (
  <>
    <Header onLoginClick={onLoginClick} onSignUpClick={onSignUpClick} />
    {children}
    <Join />
    <Footer />
  </>
);

export default PageTemplate;
