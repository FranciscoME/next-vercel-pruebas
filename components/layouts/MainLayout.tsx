import Head from 'next/head'
import React, { FC, PropsWithChildren } from 'react'
import { Navbar } from '../Navbar'
import styles from './MainLayout.module.css'

type Props={};
export const MainLayout:FC<PropsWithChildren<Props>> = ({children}) => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Home Francisco</title>
        <meta name="description" content="Home app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Head>
        <meta name="keywords" content="Francisco, next.js"/>
      </Head>

      <Navbar/>

      <main className={styles.main}>
        {children}
      </main>

      
    </div>
  )
}
