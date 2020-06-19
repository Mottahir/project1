import React from 'react';
import logo from './logo.svg';
import './App.css';

import { Header } from './components/Header'
import { Balance } from './components/Balance'
import { AccountSummary } from './components/AccountSummary'
import { TransactionHistory} from './components/TransactionHistory'
import { AddTransection } from './components/AddTransaction';
import { GlobalProvider} from './context/GlobalState';

function App() {
  return (
    <GlobalProvider>   
       < Header />
       <div className="contaniner">  
        <Balance />
        <AccountSummary />
        <TransactionHistory />
        <AddTransection />
       <GlobalProvider/>
       </div>
     
     </GlobalProvider>
  );
}

export default App;
