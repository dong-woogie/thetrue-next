import "../styles/globals.css";
import type { AppContext, AppProps } from "next/app";
import { RecoilRoot } from "recoil";
import Link from "next/link";
import initializeRecoilState from "../utils/initializeRecoilState";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <RecoilRoot initializeState={initializeRecoilState(pageProps)}>
      <div style={{ display: "flex", gap: "0 16px" }}>
        <Link href="/">HOME</Link>
        <Link href="/product/watch">product watch list page</Link>
        <a href="http://localhost:3000/product/detail/347">
          product detail page
        </a>
      </div>
      <Component {...pageProps} />
    </RecoilRoot>
  );
}

MyApp.getInitialProps = async ({ Component, ctx }: AppContext) => {
  let pageProps = {};

  if (Component.getInitialProps) {
    pageProps = await Component.getInitialProps(ctx);
  }

  return { pageProps };
};

export default MyApp;
