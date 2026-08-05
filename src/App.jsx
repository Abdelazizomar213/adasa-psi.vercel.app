

import { Routes, Route } from 'react-router'
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'
import Home from './Pages/Home/Home'
import Blog from './Pages/Blog/Blog'
import BlogDetails from './Pages/BlogDetails/BlogDetails'
import About from './Pages/About/About'
import NotFound from './Pages/NotFound/NotFound'
import Privacy from './Pages/Privacy/Privacy'
import Terms from './Pages/Terms/Terms'

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:slug" element={<BlogDetails />} />
        <Route path="/about" element={<About />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
