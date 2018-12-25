import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Login from '../login';
import Modal from '../modal';
import ContributeForm from '../contribute-form';

class ContributeModal extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
    this.responseFacebook = this.responseFacebook.bind(this);
  }

  responseFacebook = (response) => {
    this.props.setUserData(response);
  }

  render() {
    return (
      <Modal show={this.props.show} header="Add Content" handleClose ={this.props.handleClose}>
        {
          this.props.userData.name 
            ? (<ContributeForm />)
            : (<Login onSuccess={this.responseFacebook} />)
        }
      </Modal>
    );
  }
}

ContributeModal.defaultProps = {
  userData: {},
  setUserData: () => {},
  show: false,
  handleClose: () => {}
}

ContributeModal.propTypes = {
  userData: PropTypes.object,
  setUserData: PropTypes.func,
  show: PropTypes.bool,
  handleClose: PropTypes.func
}
 
export default ContributeModal;