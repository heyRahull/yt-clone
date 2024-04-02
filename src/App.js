import "./App.css";
import Head from "./components/Head";
import Body from "./components/Body";
import { Provider } from "react-redux";
import store from "./utils/store";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import WatchPage from "./components/WatchPage";
import MainContainer from "./components/MainContainer";
import SearchContainer from "./components/SearchContainer";
import ShortsContainer from "./components/ShortsContainer";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <Head />
        <Body />
      </>
    ),
    children: [
      {
        path: "/",
        element: <MainContainer />,
      },
      {
        path: "watch",
        element: <WatchPage />,
      },
      {
        path: "search",
        element: <SearchContainer />,
      },
      {
        path: "shorts",
        element: <ShortsContainer />,
      },
    ],
  },
]);

function App() {
  return (
    <Provider store={store}>
      <div>
        <RouterProvider router={appRouter} />
        {/**
         *
         * Head
         * Body
         *  Sidebar
         *    MenuItems
         *  MainContainer
         *    ButtonList
         *    VideoContainer
         *      VideoCard
         *
         *
         */}
      </div>
    </Provider>
  );
}

export default App;
