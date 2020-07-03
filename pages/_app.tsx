import React from 'react';
import { Provider } from 'react-redux';
import { createWrapper } from 'next-redux-wrapper';
import store from '../store';
import { AppProps, AppContext } from 'next/app';
import { APP_ACTIONS } from '../store/actions';
import { getGlobalInfo } from '../services/global';
import { Container } from 'react-bootstrap';
import Header from '../components/header';
import { AppContainer } from '../components/app-container';
import { GlobalFonts } from '../styles/fonts';
import { Colors } from '../styles/colors';


function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <>
        <style jsx global>{`
          body {
            padding: 0;
            margin: 0;
          }
        `}</style>
        <GlobalFonts />
        <Container>
          <Header />
          <AppContainer>
            <Component {...pageProps} />
          </AppContainer>
        </Container>
      </>
    </Provider>
  )
}


MyApp.getInitialProps = async ({ Component, ctx }: AppContext)  => {
  const isServer = !!ctx.req;
  if(isServer && ctx.req.url === '/') {
    const redirectUrl = `http://${ctx.req.headers.host}/page-1`;
    ctx.res?.writeHead(301, { Location: redirectUrl });
    ctx.res?.end();
  }
  const menu =  await getGlobalInfo();
  ctx.store.dispatch({ type: APP_ACTIONS.MENU_LOADED, menu });
  const pageProps = Component.getInitialProps ? await Component.getInitialProps({ ...ctx }) : {};
  return {  pageProps };
}

const makeStore = () => store;
const wrapper = createWrapper(makeStore);

//@ts-ignore
export default wrapper.withRedux(MyApp);