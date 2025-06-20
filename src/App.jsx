import { Route, Routes } from "react-router-dom"
import Footer from "./components/footer/Footer"
import Header from "./components/header/Header"
import Main from "./components/main/Main"
import Region from "./components/main/Region"

function App() {
  return (
    <>
      <Header/>
        <Routes>
          <Route path="/" element={<Main/>}/>
          <Route path="/region/:reg" element={<Region/>}/>
        </Routes>
      <Footer/>
    </>
  )
}

export default App
