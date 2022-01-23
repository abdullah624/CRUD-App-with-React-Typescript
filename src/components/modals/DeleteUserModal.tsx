import { Button, Modal } from "antd";
import React from "react";

class DeleteUserModal extends React.Component {
  state = {
    visible: false,
  };

  showModal = () => {
    this.setState({
      visible: true,
    });
  };

  handleOk = () => {
    this.setState({ visible: false });
  };

  handleCancel = () => {
    this.setState({ visible: false });
  };

  render() {
    const { visible } = this.state;
    return (
      <>
        <Button type="primary" danger onClick={this.showModal}>
          Delete
        </Button>
        <Modal
          visible={visible}
          title="Delete User"
          onOk={this.handleOk}
          onCancel={this.handleCancel}
          footer={[
            <Button key="back" onClick={this.handleCancel}>
              Cancel
            </Button>,
            <Button key="submit" type="primary" danger onClick={this.handleOk}>
              Delete
            </Button>,
          ]}
        >
          <h2 style={{ color: "red" }}>
            Are you sure you want to delete the user!
          </h2>
        </Modal>
      </>
    );
  }
}

export default DeleteUserModal;
