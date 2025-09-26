// src/pages/LoginPage/LoginPage.tsx

import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'; // 라우팅을 위한 Link와 useNavigate
import styles from './LoginPage.module.css';

function LoginPage() {
  // 1. 입력값(이메일, 비밀번호)을 관리할 state 생성
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate(); // 로그인 성공 시 페이지 이동을 위한 hook

  // 2. 폼 제출(로그인 버튼 클릭) 시 실행될 함수
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault(); // 폼 제출 시 페이지가 새로고침되는 기본 동작 방지

    // --- 로직 부분 ---
    // 2-1. 간단한 유효성 검사
    if (!email) {
      alert('이메일을 입력해주세요.');
      return;
    }
    if (!password) {
      alert('비밀번호를 입력해주세요.');
      return;
    }

    // 2-2. (중요) 실제로는 여기서 백엔드 서버에 API 요청을 보냅니다.
    // fetch('/api/login', {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify({ email, password }),
    // })
    // .then(response => response.json())
    // .then(data => {
    //   if (data.success) {
    //     alert('로그인 성공!');
    //     localStorage.setItem('token', data.token); // 로그인 토큰 저장
    //     navigate('/'); // 메인 페이지로 이동
    //   } else {
    //     alert(data.message); // 예: '이메일 또는 비밀번호가 틀렸습니다.'
    //   }
    // });

    // 2-3. 현재는 서버가 없으므로, 콘솔에 입력값을 출력하고 성공 알림을 띄우는 것으로 대체
    console.log('로그인 시도:', { email, password });
    alert(`${email}님, 환영합니다! (로그인 성공)`);
    navigate('/'); // 성공했다고 가정하고 메인 페이지로 이동
  };

  return (
    <div className={styles.loginPage}>
      <div className={styles.loginContainer}>
        <h1 className={styles.title}>로그인</h1>
        <form className={styles.loginForm} onSubmit={handleSubmit}>
          <div className={styles.inputGroup}>
            <label htmlFor="email">이메일</label>
            <input
              type="email"
              id="email"
              className={styles.inputField}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="example@email.com"
              required
            />
          </div>
          <div className={styles.inputGroup}>
            <label htmlFor="password">비밀번호</label>
            <input
              type="password"
              id="password"
              className={styles.inputField}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="비밀번호를 입력하세요"
              required
            />
          </div>
          <button type="submit" className={styles.submitButton}>
            로그인
          </button>
        </form>
        <div className={styles.links}>
          <Link to="/signup">회원가입</Link> | <Link to="/find-password">비밀번호 찾기</Link>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;