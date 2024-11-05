import React from "react";
import { Link } from "react-router-dom"; 
import Header from "./Home";
import HeaderAdmin from "./HeaderAdmin";

const AdminHome = () => {
  return (
    <div>
      <HeaderAdmin/>
        <div className="choose">
          <label>
            <input type="radio" name="options" value="Option 1" />
            Events by followers
          </label>
          <br />
          <label>
            <input type="radio" name="options" value="Option 2" />
            Events by Location
          </label>
          <br />
          <div className="location">
            <label>Current Location:</label><br />
            <input type="text" placeholder="Choose your location" />
          </div>
        </div>


      <main className="main_area">
        <div className="navbar-actions">
          <input
            type="text"
            className="search-bar"
            placeholder="Search events"
          />
          <button className="create-event-button">
            <h4>Create An Event</h4>
          </button>
        </div>
        <div className="content-area">
          <div className="content">
            <h1>This is home</h1>
          </div>

          <aside className="right-sidebar">
            <div className="moderator-dashboard">
              <h4><Link to="/AdminDashboard">Admin Dashboard</Link></h4>
            </div>
            <div className="notifications">
              <h3>Notifications</h3>
              <ul>
                <li>You have a new follower</li>
                <li>You have a new like</li>
                <li>New flagged content</li>
              </ul>
            </div>
          </aside>
        </div>
      </main>
    </div>
  );
};

export default AdminHome;