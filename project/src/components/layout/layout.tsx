import { Helmet } from 'react-helmet-async';
import Footer from '../footer/footer';
import Header from '../header/header';

type LayoutProps = {
  pageTitle?: string;
  hasLoginButton?: boolean;
  children: React.ReactNode;
}

function Layout({ pageTitle = '', hasLoginButton = true, children }: LayoutProps): JSX.Element {
  return (
    <div className="wrapper">
      <Helmet>
        <title>Escape room {pageTitle}</title>
      </Helmet>
      <Header hasLoginButton={hasLoginButton} />
      {children}
      <Footer />
    </div>
  );
}

export default Layout;
