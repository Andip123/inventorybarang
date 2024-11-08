import { useState } from 'react';
import { Link } from 'react-router-dom';

function InventoryList({ items }) {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredItems = items.filter(
    (item) =>
      item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="p-5">
      <h2 className="text-3xl font-bold mb-4">Daftar Inventaris</h2>

      <input
        type="text"
        placeholder="Cari barang berdasarkan nama atau kategori..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="mb-4 p-2 border border-gray-300 rounded w-full"
      />

      <table className="w-full bg-white shadow-md rounded-lg overflow-hidden">
        <thead className="bg-gray-200 text-gray-600 uppercase text-sm">
          <tr>
            <th className="p-3 text-left">Nama Barang</th>
            <th className="p-3 text-left">Kategori</th>
            <th className="p-3 text-left">Stok</th>
            <th className="p-3 text-left">Harga</th>
          </tr>
        </thead>
        <tbody>
          {filteredItems.length > 0 ? (
            filteredItems.map((item) => (
              <tr key={item.id} className="border-b hover:bg-gray-100">
                <td className="p-3">
                  <Link to={`/item/${item.id}`} className="text-blue-600 hover:underline">
                    {item.name}
                  </Link>
                </td>
                <td className="p-3">{item.category}</td>
                <td className="p-3">{item.stock}</td>
                <td className="p-3">Rp {item.price.toLocaleString()}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="4" className="p-3 text-center text-gray-500">
                Barang tidak ditemukan
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default InventoryList;
