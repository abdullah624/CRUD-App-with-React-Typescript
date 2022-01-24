import { Button, Input, Modal, PageHeader } from "antd";
import { useContext, useState } from "react";
import { GlobalContext } from "../contexts/GlobalContext";

const Header = () => {
  // @ts-ignore: Unreachable code error
  const { users, dispatch } = useContext(GlobalContext);
  const [newUser, setNewUser] = useState(null);
  const [isAdding, setIsAdding] = useState(false);

  const addUser = () => {
    setIsAdding(true);
  };

  return (
    <div>
      <div className="site-page-header-ghost-wrapper">
        <PageHeader
          title="User List"
          extra={[
            <Button type="primary" onClick={() => addUser()}>
              Add User
            </Button>,
          ]}
        ></PageHeader>
      </div>
      <Modal
        title="Add User"
        visible={isAdding}
        okText="Add"
        onOk={() => {
          setIsAdding(false);
          dispatch({
            type: "ADD_USER",
            newUser,
          });
          setNewUser(null);
        }}
        onCancel={() => {
          setIsAdding(false);
          setNewUser(null);
        }}
      >
        <Input
          allowClear
          placeholder="Enter Username"
          // @ts-ignore: Unreachable code error
          value={newUser?.name}
          onChange={(e) => {
            setNewUser((prev) => {
              return {
                // @ts-ignore: Unreachable code error
                ...prev,
                id: parseInt(users[users.length - 1].id) + 1,
                name: e.target.value,
              };
            });
          }}
        />
      </Modal>
    </div>
  );
};

export default Header;
