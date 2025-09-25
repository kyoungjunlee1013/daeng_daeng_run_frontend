// src/pages/Mainpage/index.tsx

import Header from "../../components/Header/Header";

function Mainpage() {
    return(
        <div >
            <Header  />
            <main style={{padding: '2rem'}}>
                <h1>댕댕런에 오신 것을 환영합니다!</h1>
                <p>이곳은 메인 페이지의 내용이 들어갈 영역입니다.</p>
            </main>
        </div>
    )
}
 export default Mainpage;