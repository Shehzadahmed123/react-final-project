import { Outlet } from 'react-router-dom'
import AdminSidebar from '../../pages/Admin/AdminSidebar';

const AdminLayout = () => (
  <div className="flex">
    <AdminSidebar />
    <div className="ml-0 md:ml-64 p-4 w-full mt-8 ">
      <Outlet />
    </div>
  </div>
);

export default AdminLayout;