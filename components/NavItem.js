import Link from 'next/link'

function NavItem({ href, label }) {
    return (
      <Link href={href}>
        <a>{label}</a>
      </Link>
    );
}

export default NavItem