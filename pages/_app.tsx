import React from 'react';
import { Provider } from 'react-redux';
import withRedux, { createWrapper } from 'next-redux-wrapper';
import store from '../store';
import App, { AppProps, AppContext } from 'next/app';
import { APP_ACTIONS } from '../store/actions';
import { getGlobalInfo } from '../services/global';


//@ts-ignore
function MyApp({ Component, pageProps }: AppProps) {
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
  const menu =  await getGlobalInfo();
  ctx.store.dispatch({ type: APP_ACTIONS.MENU_LOADED, menu });
  // @ts-ignore
  const pageProps = Component.getInitialProps ? await Component.getInitialProps({ ...ctx }) : {};
  return {  pageProps };
}

const makeStore = () => store;
const wrapper = createWrapper(makeStore);

//@ts-ignore
export default wrapper.withRedux(MyApp);