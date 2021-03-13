import React from 'react';
import { Link } from 'gatsby';

const Contact = (props) => (
    <div>
        <h1>Contact Me</h1>
        <address>
            <p>Email Me:<a href="miraheckmann@gmail.com">miraheckmann@gmail.com</a></p>
        </address>
        <Link to="/about">Learn More</Link>
    </div>
);
export default Contact; 