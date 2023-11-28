import GlobalStyle from "../styles";
import Layout from "@/Components/Layout";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Layout>
        <GlobalStyle />
        <Component {...pageProps} />
      </Layout>
    </>
  );
}
