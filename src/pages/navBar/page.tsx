import NavBarStyle from './page.module.css'
import Link from 'next/link'

export default function NavBar() {
    return (
        <nav className={NavBarStyle.navBarContainer}>
            <h1>GoTm</h1>
            <ul>
                <li>
                    <Link href="/" className={NavBarStyle.Link}>Home</Link>
                </li>
                <li>
                    <Link href="/about" className={NavBarStyle.Link}>About</Link>
                </li>
                <li>
                    <Link href="/project" className={NavBarStyle.Link}>Project</Link>
                </li>
                <li>
                    <Link href="/skills" className={NavBarStyle.Link}>Skills</Link>
                </li>
                <li>
                    <Link href="/contact" className={NavBarStyle.Link}>Contact</Link>
                </li>
            </ul>
            <Link href="https://github.com/Im-gowtham-cd/gotm" className={NavBarStyle.LinkButton}>SoUrCe  CoDe</Link>
        </nav>
    )
}