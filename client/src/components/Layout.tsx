import React, { ReactNode } from "react";
import Header from "components/Header";
import Footer from "components/Footer";

type Props = {
  children?: ReactNode;
};

const Layout = ({ children }: Props) => {
  return (
    <main className="flex flex-col h-screen justify-between font-sans bg-white">
      <Header />
      {children}
      <Footer />
    </main>
  );
};

export default Layout;
