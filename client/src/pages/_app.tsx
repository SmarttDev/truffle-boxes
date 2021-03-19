import Head from "next/head";
import { AppProps } from "next/app";
import Layout from "components/layout";
import { Web3Provider } from "context/Web3Context";
import "css/index.css";

function App({ Component, pageProps }: AppProps) {
  return (
    <Web3Provider>
      <Layout>
        <Head>
          <title>Next.js Starter Tailwind</title>
          <meta
            name="Description"
            content="A Next.js starter styled using Tailwind CSS."
          />
          <link rel="icon" href="/favicon.ico" />
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:400,700"
          ></link>
        </Head>
        <Component {...pageProps} />
      </Layout>
    </Web3Provider>
  );
}

export default App;
