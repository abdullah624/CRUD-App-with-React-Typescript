import { Button, Input, Modal } from "antd";
import React from "react";

class EditUserModal extends React.Component {
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
        <Button type="primary" onClick={this.showModal}>
          Edit
        </Button>
        <Modal
          visible={visible}
          title="Update Username"
          onOk={this.handleOk}
          onCancel={this.handleCancel}
          footer={[
            <Button key="back" onClick={this.handleCancel}>
              Cancel
            </Button>,
            <Button key="submit" type="primary" onClick={this.handleOk}>
              Update
            </Button>,
          ]}
        >
          <Input />
        </Modal>
      </>
    );
  }
}

export default EditUserModal;
