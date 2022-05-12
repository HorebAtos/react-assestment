import './App.css'
import Dynamictable from './components/DynamicTable';
import { products } from './products.json';
import { upgrades } from './upgrades.json';
function App() {
  console.log(upgrades);
  return (
    <main>
      <Dynamictable table={products} />
    </main>
  )
}

export default App
