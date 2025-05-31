import { Outlet } from 'react-router-dom';
import AdminSidebar from '../pages/Admin/AdminSidebar';

const AdminLayout = () => (
  <div className="flex mt-16">
    <AdminSidebar />
    <div className="ml-0 md:ml-64 p-4 w-full bg-gray-900 text-white">
      <Outlet />
    </div>
  </div>
);

export default AdminLayout;