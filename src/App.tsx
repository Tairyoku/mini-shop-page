import { Provider } from 'react-redux';
import { persistStore } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react';
import './App.css';
import Goods from './components/Goods';
import Header from './components/Header'
import store from './store/store';

function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistStore(store)} loading={null} />
      <Header />
      <Goods />
    </Provider>
  );
}

export default App;
