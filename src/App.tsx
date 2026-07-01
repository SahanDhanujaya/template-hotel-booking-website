import { RouterProvider } from "react-router-dom";
import router from "./routes/router.routes";
import { LoaderProvider } from "./context/LoaderProvider";
import { AuthProvider } from "./context/AuthProvider";
import { ToastContainer } from "react-toastify";

const App = () => {
  return (
    <div className="App">
      <LoaderProvider>
        <AuthProvider>
          <RouterProvider router={router} />
          <ToastContainer />
        </AuthProvider>
      </LoaderProvider>
    </div>
  );
};

export default App;
