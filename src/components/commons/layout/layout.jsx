import './layout.scss';
import React from 'react';
import Header from '@commons/header/header';
import Footer from '@commons/footer/footer';

const Layout = ({ children }) => (
  <>
    <Header />
    <main>{children}</main>
    <Footer />
  </>
);

export default Layout;