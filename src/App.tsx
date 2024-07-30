import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header'
import Navigation from './components/Navigation'
import Hero from './components/Hero'
import ProductSales from './components/ProductSales'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className=''>
      <Header />
      <Navigation />
      <Hero />
      <ProductSales />

    </div>
  )
}

export default App
