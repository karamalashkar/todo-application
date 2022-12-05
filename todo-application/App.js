import { PersistGate } from 'redux-persist/integration/react'
import { store, persistor } from './redux/Store';
import { Provider } from 'react-redux';
import Switcher from './navigations/Switcher';

export default function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Switcher />
      </PersistGate>
    </Provider>
  );
}

