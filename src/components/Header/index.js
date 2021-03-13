import { Link } from 'gatsby';
import React from 'react';

import * as styles from './Header.module.scss';

const Header = (props) => (
    <header className={styles.Header}>
        <h1>Mira Heckmann</h1>
        <nav>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/about">About</Link>
                </li>
                <li>
                    <Link to="/contact">Contact</Link>
                </li>
            </ul>
        </nav>
    </header>
)

export default Header; 