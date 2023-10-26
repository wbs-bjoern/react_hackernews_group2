import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from "./components/Header/Header"
import New from './pages/New'
import Jobs from './pages/Jobs'
import Main from './components/main/index'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Footer from "./components/Footer/index"

function App() {
  const [count, setCount] = useState(0)
  const [showPage, setPage] = useState(<New />)

  return (
    <div className="main">
    
     <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/New" element={<New />} />
        <Route path="/Jobs" element={<Jobs />} />
      </Routes>
    
      <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App
