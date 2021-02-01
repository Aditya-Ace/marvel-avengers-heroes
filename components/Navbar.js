import Link from 'next/link';
import Image from 'next/image';

const Navbar = () => {
  return (
    <nav>
      <div className='logo'>
        <Link href='/'>
          <a>
            <Image src='/logo.png' width={140} height={90} />
          </a>
        </Link>
      </div>
      <Link href='/'>
        <a>Home</a>
      </Link>
      <Link href='/about'>
        <a>About</a>
      </Link>
      <Link href='/avengers'>
        <a>Avengers</a>
      </Link>
    </nav>
  );
};

export default Navbar;
