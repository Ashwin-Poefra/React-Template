import React from 'react';
import { FooterSection } from './Footer';
import { HeaderSection } from './Header';

interface LayoutProps {
  children?: React.ReactNode;
}

export const LayoutComponent: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="bg-blue-200 w-full absolute top-0 bottom-0">
      <HeaderSection />
      <div className="pt-16 pb-16 h-full">{children}</div>
      <FooterSection />
    </div>
  );
};

// HOC WithLayout (Higher Order Component)
// eslint-disable-next-line @typescript-eslint/naming-convention
export const WithLayout = (Component: React.FC) => () => {
  return (
    <LayoutComponent>
      <Component />
    </LayoutComponent>
  );
};
