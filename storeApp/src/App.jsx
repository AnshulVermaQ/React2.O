import './App.css';
import Items from './components/Items';
import Kids from './components/Kids';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import UserContext from './context/UseContext';
import { Provider, useSelector } from 'react-redux';
import AppStore from './store/Store';
import Cart from './components/Cart';

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Items />,
  },
  {
    path: "/kids",
    element: <Kids />,
  },
  {
    path:"/cart",
    element:<Cart/>
  }
]);

const Header = () => {
  const cartItemsCount = useSelector((store) => store.cart.cardItems.length);

  return (
    <header>
      <h1>Welcome to our store</h1>
      <button className="btn btn-primary">Cart Items: {cartItemsCount}</button>
    </header>
  );
};

function App() {
  return (
    <Provider store={AppStore}>
      <UserContext.Provider value={{ name: "keshav kumar" }}>
        <div>
          <Header />
          <RouterProvider router={appRouter} />
        </div>
      </UserContext.Provider>
    </Provider>
  );
}

export default App;
