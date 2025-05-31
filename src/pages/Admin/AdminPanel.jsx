const AdminPanel = () => {
  // Dummy stats (replace with real values from backend or Redux)
  const stats = [
    { title: 'Total Products', value: 120, bg: 'bg-blue-100', text: 'text-blue-800' },
    { title: 'Total Orders', value: 350, bg: 'bg-purple-100', text: 'text-purple-800' },
    { title: 'Total Users', value: 45, bg: 'bg-green-100', text: 'text-green-800' },
    { title: 'Total Sales', value: '$12,500', bg: 'bg-yellow-100', text: 'text-yellow-800' },
    { title: 'Pending Orders', value: 18, bg: 'bg-orange-100', text: 'text-orange-800' },
    { title: 'Delivered Orders', value: 275, bg: 'bg-teal-100', text: 'text-teal-800' },
  ];

  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold mb-6">Admin Dashboard</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {stats.map((stat, index) => (
          <div
            key={index}
            className={`rounded-xl shadow-md p-6 ${stat.bg} ${stat.text} transition hover:scale-105 duration-200`}
          >
            <h2 className="text-lg font-semibold mb-2">{stat.title}</h2>
            <p className="text-3xl font-bold">{stat.value}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminPanel;
