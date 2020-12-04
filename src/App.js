import React from 'react';
import './App.css';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import MainApp from './components/main_app';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import ConfigureStore from './redux/storeConfig';
const store = ConfigureStore();
function App() {
  return (
    <div className="App">
       <Provider store={store}>
        <BrowserRouter>
           <MainApp/>
        </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;