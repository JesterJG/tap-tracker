import React from 'react';
import TrackerListContainer from '../containers/TrackerListContainer';
import ManageList from '../containers/ManageList';
import './App.css';

const App = () => (
  <div className="TapTracker">
    <h1> Welcome to TapTracker </h1>
    <TrackerListContainer />
    <ManageList />
  </div>
)

export default App;
