import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import LandingPage from './pages/LandingPage.jsx'
import BlogIndex from './pages/BlogIndex.jsx'
import BlogPost from './pages/BlogPost.jsx'
import BlogCategory from './pages/BlogCategory.jsx'
import CalendlyModal from './components/CalendlyModal.jsx'

function App() {
  return (
    <div className="flex min-h-svh flex-col bg-bg text-white">
      <Navbar />
      <div className="relative z-0 flex w-full flex-1 flex-col">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/blog" element={<BlogIndex />} />
          <Route path="/blog/categorie/:category" element={<BlogCategory />} />
          <Route path="/blog/:slug" element={<BlogPost />} />
        </Routes>
      </div>
      <Footer />
      <CalendlyModal />
    </div>
  )
}

export default App
