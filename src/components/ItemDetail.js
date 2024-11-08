import { useParams, Link } from 'react-router-dom';

function ItemDetail({ items }) {
  const { id } = useParams(); 
  const item = items.find((item) => item.id === parseInt(id));

  if (!item) {
    return (
      <div className="p-5">
        <h2 className="text-3xl font-bold mb-4">Item Tidak Ditemukan</h2>
        <Link to="/inventory" className="text-blue-600 hover:underline">
          Kembali ke Daftar Inventaris
        </Link>
      </div>
    );
  }

  return (
    <div className="p-5">
      <h2 className="text-3xl font-bold mb-4">Detail Barang</h2>
      <div className="bg-white p-6 rounded-lg shadow-md">
        <p><strong>Nama Barang:</strong> {item.name}</p>
        <p><strong>Kategori:</strong> {item.category}</p>
        <p><strong>Stok:</strong> {item.stock}</p>
        <p><strong>Harga:</strong> Rp {item.price.toLocaleString()}</p>
      </div>
      <Link to="/inventory" className="text-blue-600 hover:underline mt-4 inline-block">
        Kembali ke Daftar Inventaris
      </Link>
    </div>
  );
}

export default ItemDetail;
