import { BrowserRouter } from "react-router-dom"
import { Navbar, Hero, About, Menu } from "./components"

function App() {
  return (
    <BrowserRouter>
      <header className="bg-hero-pattern bg-cover bg-no-repeat bg-center h-full">
        <Navbar />
        <Hero />
      </header>
      <About />
      <Menu />
    </BrowserRouter>
  )
}

export default App