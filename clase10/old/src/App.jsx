import ProductList from "./components/ProductList"
import ProductDetail from "./components/ProductDetail"
import Nav from "./components/Nav"
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"

function App() {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route path="/" element={<ProductList />} />
        <Route path="/category/:categoryId" element={<ProductList />} />
        <Route path="/product/:productId" element={<ProductDetail />} /> 
        <Route path="*" element={<h1>404 :( Not found</h1>} />
      </Routes>
    </Router>
  );
}

export default App
