import React, { Component } from 'react';
import './Sidebar.css';
import { Link } from 'react-router';

class Sidebar extends Component {
  render() {
    return (
      <div className="app-sidebar">
      	<ul>
      		<li><h5>Spaiņi | Kārbas | Kastes</h5></li>
      		<li>
	      		<Link to="/home" >
	      			<span>Spaiņi</span>
	      		</Link>
      		</li>
      		<li>
	      		<Link to="/home" >
	      			<span>Kārbas</span>
	      		</Link>
      		</li>
      	</ul>
      </div>
    );
  }
}

export default Sidebar;
