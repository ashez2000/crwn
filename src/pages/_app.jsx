import '../styles/bootstrap.min.css'
import '../styles/main.css'
import ReduxProvider from '../store/provider'
import Layout from '../components/Layout'

function MyApp({ Component, pageProps }) {
  return (
    <ReduxProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ReduxProvider>
  )
}

export default MyApp
