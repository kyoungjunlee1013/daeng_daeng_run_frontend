// src/components/Header/Header.tsx
import styles from './Header.module.css';
import {Link} from 'react-router-dom';
function Header() {
    return(
        <header className={styles.headerContainer}>
            <Link to="/" className={styles.logo}>
                댕댕런            
            </Link>                        
             <nav className={styles.navMenu}>
                <Link to="/introduce" className={styles.navLink}>서비스 소개</Link>
                <Link to="/course" className={styles.navLink}>산책코스</Link>
                <Link to="/community" className={styles.navLink}>커뮤니티</Link>
                <Link to="/event" className={styles.navLink}>이벤트</Link>
                <Link to="/login" className={styles.loginButton}>로그인</Link>
            </nav>
        </header>
    )
}

export default Header;