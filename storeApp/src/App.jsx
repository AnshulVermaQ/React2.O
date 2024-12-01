import './App.css';
import Items from './components/Items';
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import Kids from './components/Kids';

const appRouter = createBrowserRouter([
  {
    path:"/",
    element:<App/>
  },
  {
    path:"/kids",
    element:<Kids/>
  }
])




function App() {
  return (
    <RouterProvider router={appRouter}>
      <h1>Welcome to our store</h1>
      <Items />
    </RouterProvider>
  );
}

export default App;
