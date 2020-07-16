import React from 'react';
import Link from 'next/link';

const Home = props => {
    return (
        <React.Fragment>
            <span>Holla!!</span>
            <Link href="/sell"><a>sell</a></Link>
        </React.Fragment>
    )
}

export default Home;