import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import './App.css';
import Homepage from './components/homepage/homepage';
import Login from './components/login/Login';
import Breadcrumbs from './components/breadcrumbs/Breadcrumbs';
import Cart from './components/cart/Cart';
import { Provider } from 'react-redux';
import store from './store/store';
const appRouter = createBrowserRouter(createRoutesFromElements(
  <>
    <Route path="/" element={<Breadcrumbs/>}>
      <Route path="homepage" element={<Homepage/>}/>
      <Route path="cart" element={<Cart/>}/>
    </Route>
    <Route path="/login" element={<Login/>}/>
  </>
));

function App() {
  return (
    <Provider store={store}>
      <RouterProvider router={appRouter}/>
    </Provider>
  );
}

export default App;
