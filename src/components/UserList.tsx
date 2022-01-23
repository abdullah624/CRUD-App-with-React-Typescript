import { Space, Table } from "antd";
import React, { useContext } from "react";
import { GlobalContext } from "../contexts/GlobalContext";
import DeleteUserModal from "./modals/DeleteUserModal";
import EditUserModal from "./modals/EditUserModal";

const columns = [
  {
    title: "SL No",
    width: 100,
    dataIndex: "id",
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

const UserList = () => {
  const { users } = useContext(GlobalContext);
  return <Table size="middle" columns={columns} dataSource={users} />;
};

export default UserList;
