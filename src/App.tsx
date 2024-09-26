import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import HomePage from "./pages/HomePage";
import MainLayout from "./layouts/MainLayout";
import JobsPage from "./pages/JobsPage";
import JobPage from "./pages/JobPage";
import { NotFound } from "./pages/NotFound";
import AddJobPage from "./pages/AddJobPage";
import EditJobPage from "./pages/EditJobPage";
import jobLoader from "./helpers/loader";

const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<MainLayout></MainLayout>}>
        <Route index element={<HomePage></HomePage>}></Route>
        <Route path="/jobs" element={<JobsPage></JobsPage>}></Route>
        <Route
          path="/jobs/:id"
          element={<JobPage></JobPage>}
          loader={jobLoader}
        ></Route>
        <Route path="/add-job" element={<AddJobPage></AddJobPage>}></Route>
        <Route
          path="/edit-job/:id"
          element={<EditJobPage></EditJobPage>}
          loader={jobLoader}
        ></Route>

        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Route>
    )
  );

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

export default App;
