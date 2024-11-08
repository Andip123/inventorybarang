import { useState } from 'react';

function AddItem({ addItem }) {
  const [name, setName] = useState('');
  const [category, setCategory] = useState('');
  const [stock, setStock] = useState('');
  const [price, setPrice] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    addItem({ name, category, stock, price });
    setName('');
    setCategory('');
    setStock('');
    setPrice('');
  };

  return (
    <form onSubmit={handleSubmit} className="p-5 bg-white rounded shadow border border-gray-200 space-y-4">
      <h2 className="text-2xl font-semibold mb-4">Tambah Barang</h2>
      <input
        type="text"
        placeholder="Nama Barang"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="w-full p-2 border border-gray-300 rounded"
        required
      />
      <input
        type="text"
        placeholder="Kategori"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        className="w-full p-2 border border-gray-300 rounded"
        required
      />
      <input
        type="number"
        placeholder="Stok"
        value={stock}
        onChange={(e) => setStock(e.target.value)}
        className="w-full p-2 border border-gray-300 rounded"
        required
      />
      <input
        type="number"
        placeholder="Harga"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
        className="w-full p-2 border border-gray-300 rounded"
        required
      />
      <button type="submit" className="w-full bg-green-500 text-white p-2 rounded mt-4 hover:bg-green-600">Tambah</button>
    </form>
  );
}

export default AddItem;
