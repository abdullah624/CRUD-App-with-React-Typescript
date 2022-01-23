import { PageHeader } from "antd";
import AddUserModal from "./modals/AddUserModal";

const Header = () => {
  return (
    <div className="site-page-header-ghost-wrapper">
      <PageHeader title="User List" extra={[<AddUserModal />]}></PageHeader>
    </div>
  );
};

export default Header;
