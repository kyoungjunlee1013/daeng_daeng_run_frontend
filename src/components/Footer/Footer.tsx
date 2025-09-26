// src/components/Footer/Footer.tsx

import React from 'react';
// 1. CSS 모듈 파일을 import 합니다. 'styles' 라는 이름으로 가져옵니다.
import styles from './Footer.module.css';

function Footer() {
  return (
    // 2. className에 {styles.클래스이름} 형태로 스타일을 적용합니다.
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.column}>
          <div className={styles.logo}>댕댕런</div>
          <p>반려견과 함께하는 즐거운 산책, 댕댕런이 함께합니다.</p>
          <div className={styles.copyright}>
            &copy; 2025 Daeng-Daeng Run. All rights reserved.
          </div>
        </div>

        <div className={styles.column}>
          <h4>바로가기</h4>
          <ul>
            <li><a href="#">서비스 소개</a></li>
            <li><a href="#">산책코스</a></li>
            <li><a href="#">커뮤니티</a></li>
            <li><a href="#">이벤트</a></li>
          </ul>
        </div>

        <div className={styles.column}>
          <h4>고객 지원</h4>
          <ul>
            <li><a href="#">공지사항</a></li>
            <li><a href="#">문의하기</a></li>
            <li><a href="#">이용약관</a></li>
            <li><a href="#">개인정보처리방침</a></li>
          </ul>
        </div>


      </div>
    </footer>
  );
}

export default Footer;