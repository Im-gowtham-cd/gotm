import AboutStyle from '@/app/about/page.module.css';
import { FileDetail, FireAlt, Github, Instagram, Linkedin } from '@boxicons/react';
import Image from 'next/image'
import Eren from '../../../assets/image/Eren.png'

export default function About() {
    return (
        <div className={AboutStyle.AboutContainer}>
            <p className={AboutStyle.Aboutext}>ABOUT ME</p>
            <ul className={AboutStyle.AboutextContainer}>
                <li className={AboutStyle.AboutName}>It&apos;s ME , GowThaM  C D</li>
            </ul>
            <div className={AboutStyle.AboutMeContainer}>
                <ul className={AboutStyle.AboutMeUl}>
                    <li>1) Computer Science and Engineering student with a strong interest in full-stack development</li>
                    <li>2) Focused on building scalable and production-ready web applications</li>
                    <li>3) Experienced with MERN stack, Next.js, and Spring Boot</li>
                    <li>4) Skilled in designing responsive, user-friendly interfaces</li>
                    <li>5) Hands-on experience with authentication, REST APIs, and database integration</li>
                </ul>
                <ul className={AboutStyle.AboutMeUl} >
                    <li>1) Passionate about solving real-world problems through clean and efficient code</li>
                    <li>2) Interested in developer tools, performance optimization, and system design</li>
                    <li>3) Comfortable working in team environments with Git and agile practices</li>
                    <li>4) Continuously learning new technologies and improving engineering skills</li>
                    <li>5) Focused on becoming a strong software engineer and building impactful applications</li>
                </ul>
            </div>
            <div className={AboutStyle.AboutURLContainer}>
                <a href='#'>
                    <p>View REseuME</p>
                    <FileDetail />
                </a>
            </div>
            <FireAlt className={AboutStyle.AboutDecoration} />
            <span className={AboutStyle.AboutErenCont}><Image src={Eren} alt={'Eren'} className={AboutStyle.AboutEren} /></span>
            <Linkedin className={AboutStyle.AboutLinkedInLogo} />
            <Instagram className={AboutStyle.AboutInstagramLogo}/>
            <Github className={AboutStyle.AboutGithubLogo}/>
        </div>
    );
}