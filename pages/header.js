import Link from 'next/link';

const linkStyle = {
    marginLeft: 15,
    background: '#D6C8C6',
    border: '1px solid black',
    cursor: 'pointer',
    display: 'inline-block',
    borderRadius: 3,
    paddingLeft: 10,
    paddingRight: 10

}

const Header = () => {
    return (
        <div>
            <Link href="/"><a style={linkStyle} title="Dashboard">Dashboard</a></Link>
            <Link href="/about"><a style={linkStyle}>About</a></Link>
            <Link href="/contact"><a style={linkStyle} title="Contact">Contact</a></Link>
            <Link href="/home"><a style={linkStyle} title="Home">Home</a></Link>
        </div>
    );
}
export default Header;