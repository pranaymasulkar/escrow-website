import './App.css';
import Home from './Views/Home';
import { Routes, Route } from "react-router-dom";
import { useTranslation } from 'react-i18next';
import i18next from 'i18next';
function App() {
  const { t } = useTranslation();

  function handleClick(lang) {
    i18next.changeLanguage(lang)
  }
  return (
    <>
    <nav style={{ width: '100%', padding: '10rem 0', backgroundColor:'gray' }}>
          <button onClick={()=>handleClick('en')} >
            English
          </button>
          <button onClick={()=>handleClick('ko')} >
            Korean
          </button>
          <button onClick={()=>handleClick('chi')} >
            Chinese
         </button>
        </nav>
        <header className="App-header">
          <p>
            <h3>{t('Thanks.1')}</h3>  <h3>{t('Why.1')}</h3> 
          </p>
        </header>
    <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/admin-login" element={<AdminLogin />} /> */}
    </Routes>
    </>
  );
}

export default App;
