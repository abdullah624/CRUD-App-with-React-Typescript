import { Space, Table } from "antd";
import DeleteUserModal from "./modals/DeleteUserModal";
import EditUserModal from "./modals/EditUserModal";

const columns = [
  {
    title: "SL No",
    width: 100,
    dataIndex: "key",
    key: "id",
  },
  {
    title: "Name",
    width: 200,
    dataIndex: "name",
    key: "name",
    render: (text: any) => <b>{text}</b>,
  },
  {
    title: "Action",
    key: "action",
    render: (text: any, record: any) => (
      <Space size="middle">
        <EditUserModal />
        <DeleteUserModal />
      </Space>
    ),
  },
];

const data = [
  {
    key: "1",
    name: "John Brown",
    age: 32,
  },
  {
    key: "2",
    name: "Jim Green",
    age: 42,
  },
  {
    key: "3",
    name: "Joe Black",
    age: 32,
  },
];

const UserList = () => {
  return <Table size="middle" columns={columns} dataSource={data} />;
};

export default UserList;
