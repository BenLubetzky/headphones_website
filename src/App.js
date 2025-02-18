import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import './App.css';
import Homepage from './components/homepage/homepage';
import Login from './components/Login';

const appRouter = createBrowserRouter(createRoutesFromElements(
  <>
    <Route path="/" element={<Homepage/>}/>
    <Route path="/login" element={<Login/>}/>
  </>
));

function App() {
  return (
    <RouterProvider router={appRouter}/>
  );
}

export default App;
