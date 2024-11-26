import styles from './header.module.css';
import { Logo } from './logo'

export const Header = () => {
    return (
        <header
            style={{borderBottom: "1px solid #e5e7eb", marginBottom: "128px"}}
            className="
                sticky h-18 top-0 
                border-b border-gray-200 
                py-4 bg-gray-100 
                bg-opacity-80 backdrop-blur-md 
                font-medium z-10"
            >
                <div className="container">
                    <div className={styles.wrap_header}>
                        <aside className={styles.logo}>
                            <Logo />
                        </aside>
                        <nav>
                            <ul className='flex items-center gap-3'>
                                <li 
                                    className='p-3 text-gray-500 text-black'
                                >
                                    About me
                                </li>
                                <li 
                                    className='p-3 text-gray-500 hover:text-black'
                                >
                                    Blog
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
        </header>
    )
}