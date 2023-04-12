import { SessionProvider, useSession } from 'next-auth/react';

import '../styles/bootstrap.css';
import '../styles/main.css';

import { CartProvider } from '../context/cart.context';

function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  return (
    <SessionProvider session={session}>
      <CartProvider>
        <Component {...pageProps} />
      </CartProvider>
    </SessionProvider>
  );
}

export default MyApp;
