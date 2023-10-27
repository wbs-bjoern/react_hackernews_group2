import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from "./components/Header/Header"
import New from './pages/New'
import Past from './pages/Past'
import Jobs from './pages/Jobs'
import Show from './pages/Show'
import Ask from './pages/Ask'
import Author from './components/main/author'
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
        <Route path="/Past" element={<Past />} />
        <Route path="/Ask" element={<Ask />} />
        <Route path="/Show" element={<Show />} />
        <Route path="/Jobs" element={<Jobs />} />
        <Route path="/Author" element={<Author />} />
      </Routes>
    
      <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App
