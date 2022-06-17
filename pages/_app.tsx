import {NextPage} from 'next'
import { ReactElement } from 'react';
import { AppProps } from 'next/app';
import '../styles/globals.css'
import { AppContext, AppInitialProps, AppLayoutProps } from 'next/app';
import type { NextComponentType } from 'next';
import { ReactNode } from 'react';


type NextPageWithLayout = NextPage &{
  getLayout?: (page:JSX.Element)=> JSX.Element;
}

type AppPropsWithLayout = AppProps &{
  component: NextPageWithLayout
}

// function MyApp({ Component, pageProps }:AppPropsWithLayout) {

//   const getLayout = Component.getLayout ||((page:JSX.Element)=>page)

//   // return <Component {...pageProps} />
//   return getLayout(<Component {...pageProps}/>)
// }


const MyApp: NextComponentType<AppContext, AppInitialProps, AppLayoutProps> = ({
  Component,
  pageProps,
}: AppLayoutProps) => {
  const getLayout = Component.getLayout || ((page: ReactNode) => page);
  return getLayout(<Component {...pageProps} />);
};

export default MyApp
