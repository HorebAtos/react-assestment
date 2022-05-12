import { useEffect } from 'react';
import './App.css'
import { ProductTableComponent } from './components/ProductTable';
import { UpgradeTableComponent } from './components/UpgradesTable';
import { products } from './products.json';
import { upgrades } from './upgrades.json';
function App() {
  return (
    <main>
      <ProductTableComponent table={products} />
      <br />
      <UpgradeTableComponent table={upgrades} />
    </main>
  )
}

export default App
