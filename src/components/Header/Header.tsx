// src/components/Header/Header.tsx
import styles from './Header.module.css';

function Header() {
    return(
        <header className={styles.headerContainer}>
            <a href="/" className={styles.logo}>
                댕댕런            
            </a>                        
            <nav className={styles.navMenu}>
                <a href="/introduce" className={styles.navLink}>서비스 소개</a>
                <a href="/course" className={styles.navLink}>산책코스</a>
                <a href="/community" className={styles.navLink}>커뮤니티</a>
                <a href="/event" className={styles.navLink}>이벤트</a>
                <a href="/login" className={styles.loginButton}>로그인</a>
            </nav>

        </header>
    )
}

export default Header;