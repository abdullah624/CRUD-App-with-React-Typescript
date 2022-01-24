import { Button, Input, Modal, Space, Table } from "antd";
import React, { useContext, useState } from "react";
import { GlobalContext } from "../contexts/GlobalContext";

const UserList = () => {
  // @ts-ignore: Unreachable code error
  const { users, dispatch } = useContext(GlobalContext);
  const [editingUser, setEditingUser] = useState(null);
  const [isEditing, setisEditing] = useState(false);

  const removeUser = (record: any) => {
    console.log(record.id);
    Modal.confirm({
      title: `Are you sure you want to delete ${record.name}!`,
      okText: "Yes",
      okType: "danger",
      okButtonProps: { type: "primary" },
      onOk: () => {
        dispatch({
          type: "REMOVE_USER",
          record,
        });
      },
    });
  };

  const editUser = (record: any) => {
    setisEditing(true);
    setEditingUser({ ...record });
  };

  const columns = [
    {
      title: "Id",
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
      render: (record: any) => (
        <Space size="middle">
          <Button type="primary" onClick={() => editUser(record)}>
            Edit
          </Button>
          <Button type="primary" danger onClick={() => removeUser(record)}>
            Delete
          </Button>
        </Space>
      ),
    },
  ];

  return (
    <div>
      <Table size="middle" columns={columns} dataSource={users} />
      <Modal
        title="Update Username"
        visible={isEditing}
        okText="Update"
        onOk={() => {
          setisEditing(false);
          dispatch({
            type: "EDIT_USER",
            editingUser,
          });
          setEditingUser(null);
        }}
        onCancel={() => {
          setisEditing(false);
          setEditingUser(null);
        }}
      >
        <Input
          // @ts-ignore: Unreachable code error
          value={editingUser?.name}
          onChange={(e) => {
            setEditingUser((prev) => {
              // @ts-ignore: Unreachable code error
              return { ...prev, name: e.target.value };
            });
          }}
        />
      </Modal>
    </div>
  );
};

export default UserList;
