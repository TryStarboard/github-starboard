import React, { Component } from 'react';
import Sidebar from './Sidebar';
import DashboardContent from './DashboardContent';
import AddTagModal from './AddTagModal';

class Dashboard extends Component {
  render() {
    return (
      <div>
        <Sidebar/>
        {this.props.children}
      </div>
    );
  }
}

export { Dashboard as default };
