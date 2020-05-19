import React from 'react';

import Header from './src/components/Header';
import Posts from './src/components/Posts';
import Tabbar from './src/components/Tabbar'

const App = () => {
  document.body.style.backgroundColor = "white";
  document.body.style.paddingTop = 0;
  document.body.style.paddingBottom = 0;
  
  return (
    <React.Fragment>
      <Header />
      <Posts />
      <Tabbar />
    </React.Fragment>
  );
};

export default App;