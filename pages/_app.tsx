import React from 'react';
import { Provider } from 'react-redux';
import withRedux from 'next-redux-wrapper';
import createStore, { AppStore } from '../store';
import App, { AppProps, AppContext } from 'next/app';
import { initState } from '../store/reducer';

//@ts-ignore
function MyApp({ Component, pageProps }: AppProps) {
  const store = createStore({ app: initState });
  return (
    <Provider store={store}>
      <>
        <style jsx global>{`
          body {
            margin: 0;
          }
        `}</style>
        <Component {...pageProps} />
      </>
    </Provider>
       
  )
}


MyApp.getInitialProps = async ({ Component, ctx }: AppContext)  => {
  const store : AppStore = ctx.store;
  // @ts-ignore
  const pageProps = Component.getInitialProps ? await Component.getInitialProps({ ...ctx, store }) : {};
  return { pageProps };
}

//@ts-ignore
export default withRedux(createStore)(MyApp);