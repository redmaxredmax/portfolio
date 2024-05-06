import React from "react"
import {Routes,Route} from "react-router-dom"
import {MainLayout} from "./layout/main-layout/main-layout"
import { Home } from "./pages/home"
import { About } from "./pages/about"
import { Contact } from "./pages/contact"
import { Detail } from "./pages/detail"

function App() {

  return (
   <div>
    <Routes>
      <Route path="/" element={<MainLayout/>}>
        <Route index element={<Home/>}/>
        <Route path="/about" element={<About/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/:id" element={<Detail/>}/>
      </Route>
    </Routes>
   </div>
  )
}

export default App
