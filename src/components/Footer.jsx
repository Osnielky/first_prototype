import React from 'react';
import { Container } from 'reactstrap';

const Footer = props => {
    return (
        <footer className="text-muted">
            <Container>
                <p className="float-right">
                    <a href="#">Back to top</a>
                </p>
                <p>
                    Album example is &copy; Bootstrap, but please download and
                    customize it for yourself!
                </p>

            </Container>
        </footer>
    );
};

export default Footer;
