import Link from 'next/link';

const Nav = () => (

    <div>
        <span>[Nav]</span>
        <Link href="/sell">
            <a>Sell</a>
        </Link>
        <Link href="/">
            <a>Home</a>
        </Link>
    </div>

)

export default Nav;