import Link from 'next/link';

const Navbar = () => {
  return (
    <nav>
      <div className='logo'>
        <Link href='/'>
          <a>Avengers Assemble</a>
        </Link>
      </div>
      <Link href='/'>
        <a>Home</a>
      </Link>
      <Link href='/avengers'>
        <a>Avengers</a>
      </Link>
      <Link href='/about'>
        <a>About</a>
      </Link>
    </nav>
  );
};

export default Navbar;
