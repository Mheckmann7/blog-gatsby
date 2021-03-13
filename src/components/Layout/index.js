import React from 'react';
import Header from '../Header';
import Footer from '../Footer';
import '../../styles/reset.scss';
import * as styles from './Layout.module.scss'

const Layout = (props) => (
    <div className={styles.Layout}>
        <Header />
            <main>
                {props.children}
            </main>
        <Footer /> 
    </div>
);

export default Layout; 