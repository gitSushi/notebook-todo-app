import React from 'react';
import '../App.css';

import AddToList from './AddToList';
import ShowList from './ShowList';
import VisibilityFilters from "./VisibilityFilters";

function Notepad() {
    return (
      <div className="container">
          <div className="notebook-grid">
            <div className="notebook-grid-items">
                <h1>To Do List</h1>
            </div>
            <div className="notebook-grid-items">
                <AddToList/>
                <ShowList/>
            </div>
            <div className="notebook-grid-items">
                <VisibilityFilters/>
            </div>
          </div>
      </div>
    );
  }

  export default Notepad;