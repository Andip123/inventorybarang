import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import Dashboard from './components/Dashboard';
import InventoryList from './components/InventoryList';
import ItemDetail from './components/ItemDetail';
import AddItem from './components/AddItem';

function App() {
  const [items, setItems] = useState([
    { 
      id: 1, 
      name: 'Baju', 
      category: 'Casual', 
      stock: 10, 
      price: 10000 
    },
    { 
      id: 2, 
      name: 'Jeans', 
      category: 'Casual', 
      stock: 5, 
      price: 15000 
    },
    { 
      id: 3, 
      name: 'Jaket', 
      category: 'Casual', 
      stock: 1, 
      price: 10000 
    },
    { 
      id: 4, 
      name: 'Topi', 
      category: 'Casual', 
      stock: 2, 
      price: 10000 
    },
    { 
      id: 5, 
      name: 'Color', 
      category: 'Casual', 
      stock: 1, 
      price: 10000 
    },
  ]);

  const addItem = (item) => {
    setItems((prevItems) => [...prevItems, { ...item, id: prevItems.length + 1 }]);
  };

  return (
    <Router>
      <div className="flex">
        <Sidebar />
        <div className="flex-grow bg-gray-100 min-h-screen">
          <Header />
          <div className="p-5">
            <Routes>
              <Route path="/" element={<Dashboard items={items} />} />
              <Route path="/inventory" element={<InventoryList items={items} />} />
              <Route path="/item/:id" element={<ItemDetail items={items} />} />
              <Route path="/add" element={<AddItem addItem={addItem} />} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;