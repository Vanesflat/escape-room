import { Helmet } from 'react-helmet-async';
import Footer from '../footer/footer';
import Header from '../header/header';

type LayoutProps = {
  pageTitle?: string;
  children: React.ReactNode;
}

function Layout({ pageTitle = '', children }: LayoutProps): JSX.Element {
  return (
    <div className="wrapper">
      <Helmet>
        <title>Escape room {pageTitle}</title>
      </Helmet>
      <Header />
      {children}
      <Footer />
    </div>
  );
}

export default Layout;
