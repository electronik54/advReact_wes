import React from 'react';
import Link from 'next/link';

const Sell = props => {
    return (
        <React.Fragment>
            <span>Sold!!</span>
            <Link href="/index"><a>home</a></Link>
        </React.Fragment>)
}

export default Sell;