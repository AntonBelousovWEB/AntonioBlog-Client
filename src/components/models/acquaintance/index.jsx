import { Description } from '../../UI/description';
import { Figure } from '../../UI/figure';
import { Discord } from '../../UI/icons';
import { Title } from '../../UI/title';
import styles from './acquaintance.module.css';

export const Acquaintance = () => {
    return (
        <section className={styles.acquaintance}>
            <section className={styles.top_content}>
                <h1 className={`text-5xl font-extrabold leading-[1.14em] ${styles.title}`}>
                    Hi! 👋 My name is <span className={styles.name}>Anton</span> and I am a software engineer.
                </h1>
                <ul className='-mr-5 flex items-center gap-2 text-4xl'>
                    <Discord link="https://discord.gg/NsecT8YC" />
                </ul>
            </section>
            <section className={styles.bottom_content}>
                <article style={{marginTop: "32px"}}>
                    <Title>How it started</Title>
                    <Description>In 2020, I first became intrigued by the idea of creating a website. That’s when I started learning HTML, CSS, and the fundamentals of web development. Since then, my passion for technology has grown immensely. Through dedication and continuous learning, I evolved into an experienced full-stack developer.<br/><br/>Today, I’m driven by the desire to build meaningful projects that not only enhance user experiences but also make a lasting impact on the world. Whether it's through developing innovative solutions or tackling complex challenges, I strive to always push the boundaries of what’s possible in the tech industry.</Description>
                </article>
                <article>
                    <Figure className="p-[32px]">
                        <Title>How it's going</Title>
                        <Description>Over the years, I've had the privilege of working alongside many experienced professionals who have shaped my journey as a software engineer. Currently, I work at <span className={styles.company}>Your Price Booking</span>, where I contribute by optimizing the overall project, improving SEO, and refactoring code to ensure better performance and scalability. Each day brings new opportunities to enhance the product and create lasting impact, and I’m always eager to tackle challenges that drive innovation and efficiency.</Description>
                    </Figure>
                </article>
            </section>
        </section>
    )
}