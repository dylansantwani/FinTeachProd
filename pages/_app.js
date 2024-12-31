import '../styles/globals.css';
import Layout from '../components/layout.jsx';
import AiPopupBot from '../components/AiPopupBot.jsx';


function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
      <AiPopupBot />
    </Layout>
  );
}


export default MyApp;
