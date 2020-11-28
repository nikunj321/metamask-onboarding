import React from 'react';
import { Menu } from 'semantic-ui-react';
import AccountChanged from './components/AccountChanged';
import IsConnected from './components/IsConnected';
import Isinstalled from './components/Isinstalled';

function App() {
  return (
    <div className="App">
      <Menu>
        <Menu.Item
          name='@metamask/onboarding'
        >@metamask/onboarding</Menu.Item>
      </Menu>
      <div className='heading'>
        <h1>this metamask onboarding library testing</h1>
        <h1>MetaMask : </h1>
      </div>
      <div className='metamask_button'>
        <Isinstalled />
        <IsConnected />
        <AccountChanged />
      </div>
    </div>
  );
}

export default App;
