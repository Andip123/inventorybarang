function Dashboard({ items }) {
    const totalItems = items.length;
    const totalStock = items.reduce((sum, item) => sum + (item.stock || 0), 0); 
    const totalValue = items.reduce((sum, item) => sum + (item.price || 0) * (item.stock || 0), 0);
  
    return (
      <div className="p-5 space-y-6">
        <h2 className="text-3xl font-bold">Dashboard</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold text-gray-700">Total Barang</h3>
            <p className="text-2xl font-bold text-blue-600">{totalItems}</p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold text-gray-700">Total Stok</h3>
            <p className="text-2xl font-bold text-green-600">{totalStock}</p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold text-gray-700">Total Nilai Stok</h3>
            <p className="text-2xl font-bold text-red-600">Rp {totalValue.toLocaleString()}</p>
          </div>
        </div>
      </div>
    );
  }
  
  export default Dashboard;
  