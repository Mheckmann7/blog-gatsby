import React from 'react';
import * as styles from './Footer.module.scss';

const Footer = (props) => (
    <footer className={styles.Footer}>
        <p>
        Website created by me
         {' '}{new Date().getFullYear()} Mira Heckmann
        </p>
    </footer>
);

export default Footer; 