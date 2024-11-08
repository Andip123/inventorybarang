import { Link } from 'react-router-dom';

function Sidebar() {
  return (
    <div className="bg-gray-800 text-white w-1/4 h-screen p-5">
      <h2 className="text-2xl font-bold mb-6">Menu</h2>
      <ul className="space-y-4">
        <li><Link to="/" className="hover:text-blue-400">Dashboard</Link></li>
        <li><Link to="/inventory" className="hover:text-blue-400">Inventory List</Link></li>
        <li><Link to="/add" className="hover:text-blue-400">Add Item</Link></li>
      </ul>
    </div>
  );
}

export default Sidebar;
