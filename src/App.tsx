// src/App.tsx


import './App.css'
import AppRouter from './Router'; 
import Footer from "../src/components/Footer/Footer";
import Header from "../src/components/Header/Header";

function App() {
  return (        
    <div>      
      <Header/>
      <main>
        <AppRouter />
      </main>
      <Footer />
    </div>
  );
}
export default App
