import '../styles/bootstrap.min.css'
import '../styles/main.css'
import ReduxProvider from '../store/provider'

function MyApp({ Component, pageProps }) {
  return (
    <ReduxProvider>
      <Component {...pageProps} />
    </ReduxProvider>
  )
}

export default MyApp
