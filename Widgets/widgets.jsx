import React from 'react';
import ReactDOM from 'react-dom';

import Tab from './tabs.jsx';

document.addEventListener("DOMContentLoaded", () => {

  const list = [
    {title: "Tower of Babel", content: "According to the story, a united humanity of the generations following the Great Flood, speaking a single language and migrating eastward"},
    {title: "Great Wall of China", content: "Built by the Ming Dynasty"},
    {title: "Great Mall of Milpitas", content: "A Mall"}];

  const root = document.getElementById('root');
  ReactDOM.render(<Tab  tabs={list}/>, root);
});
