import { Helmet } from 'react-helmet-async';
import Footer from '../footer/footer';
import Header from '../header/header';
import Path from '../path/path';

type LayoutProps = {
  pageTitle?: string;
  hasLoginButton?: boolean;
  children: React.ReactNode;
}

function Layout({ pageTitle = '', hasLoginButton = true, children }: LayoutProps): JSX.Element {
  return (
    <>
      <Path />
      <div className="wrapper">
        <Helmet>
          <title>{pageTitle} Escape Room</title>
        </Helmet>
        <Header hasLoginButton={hasLoginButton} />
        {children}
        <Footer />
      </div>
    </>
  );
}

export default Layout;
