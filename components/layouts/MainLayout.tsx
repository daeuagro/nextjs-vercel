
   
import { FC } from 'react';

import Head from 'next/head';

import { NavBar } from '../NavBar';
import styles from './MainLayout.module.css';

interface Props {
  children: React.ReactNode
}


export const MainLayout: FC<Props> = ({ children }: Props) => {
    return (
        <div className={styles.container}>
          
          <Head>
            <title>Home - Fernando</title>
            <meta name="description" content="Home Page" />
            <link rel="icon" href="/favicon.ico" />
          </Head>
        
          <NavBar />
    
          <main className={styles.main}>
    
            { children }
    
          </main>     
        </div>
      )
};
