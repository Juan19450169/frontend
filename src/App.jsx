import { BrowserRouter,Routes,Route } from "react-router-dom"
import LoginPage from "./pages/loginPage";
import RegisterPage from "./pages/RegisterPage";
import { AuthProvider } from "./context/AuthContext";
import HomePage from "./pages/HomePage";
import ProfilePage from "./pages/ProfilePage";
import ProductsPage from "./pages/ProductsPage";
import PartsPage from "./pages/PartsPage";
import ProductsFormPage from "./pages/ProductsFormPage";
import PartsFormPage from "./pages/PartsFormPage";
import ProtectedRoute from "./ProtectedRoute";
import { ProductsProvider } from "./context/ProductContext";
import Navbar from "./components/Navbar";
import NotFound from "./pages/NotFound";
import { PartsProvider } from "./context/PartsContext";
//import ProductsTable from "./components/ProductsTable";




function App() {
  return (
  <AuthProvider>
  <PartsProvider>
  <ProductsProvider>
  <BrowserRouter
  future={{
    v7_startTransition: true,
    v7_relativeSplatPath: true,
  }}
  >
<main className="conteiner mx-auto px-10">
    <Navbar/>
    <Routes>
     
      <Route path="/"element={<HomePage/>}/>
      <Route path="/login"element={<LoginPage/>}/>
      <Route path="/register"element={<RegisterPage/>}/>
      
      
    <Route element={<ProtectedRoute />}>
      <Route path="/profile"element={<ProfilePage/>}/>
      <Route path="/products"element={<ProductsPage />}/>
      <Route path="/parts" element={<PartsPage/>}/>
      <Route path="/add-product"element={<ProductsFormPage/>}/>
      <Route path="/products/:id"element={<ProductsFormPage />}/>
      <Route path="/add-parts" element={<PartsFormPage />} />
      <Route path="/parts/:id" element={<PartsFormPage />} />

      </Route>
      <Route  path="*" element={<NotFound />}/>
    </Routes>
    </main>
  </BrowserRouter>
  </ProductsProvider>
  </PartsProvider>
  </AuthProvider>
  
  )
}

export default App
