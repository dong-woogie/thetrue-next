import "../styles/globals.css";
import type { AppContext, AppProps } from "next/app";
import { RecoilRoot } from "recoil";
import Link from "next/link";
import initializeRecoilState from "../utils/initializeRecoilState";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <RecoilRoot>
      {/* <RecoilRoot initializeState={initializeRecoilState(pageProps)}> */}
      <div style={{ display: "flex", gap: "0 16px" }}>
        <Link href="/">HOME</Link>
        <Link href="/product/watch">product watch list page</Link>
      </div>
      <Component {...pageProps} />
    </RecoilRoot>
  );
}

export default MyApp;
