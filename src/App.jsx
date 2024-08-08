import { BrowserRouter, Route, Routes } from "react-router-dom"
import Login from "./Pages/Login.jsx"
import OneBox from "./Pages/OneBox.jsx"

function App() {
  return (
    <div>
      <BrowserRouter>
      
        <Routes>
        <Route path="/" element={<OneBox/>}/>
          <Route path="/login" element={<Login/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}
//Comment
export default App