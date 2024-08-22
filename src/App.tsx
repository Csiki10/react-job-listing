import React from "react";
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import HomePage from "./pages/HomePage";
import MainLayout from "./layouts/MainLayout";
import JobsPage from "./pages/JobsPage";
import JobPage, { jobLoader } from "./pages/JobPage";
import { NotFound } from "./pages/NotFound";
import AddJobPage from "./pages/AddJobPage";
import EditJobPage from "./pages/EditJobPage";
import { Job } from "./models/job";

const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<MainLayout></MainLayout>}>
        <Route index element={<HomePage></HomePage>}></Route>
        <Route path="/jobs" element={<JobsPage></JobsPage>}></Route>
        <Route
          path="/jobs/:id"
          element={<JobPage delteJob={deleteJob}></JobPage>}
          loader={jobLoader}
        ></Route>
        <Route
          path="/add-job"
          element={<AddJobPage addJobSubmit={addJob}></AddJobPage>}
        ></Route>
        <Route
          path="/edit-job/:id"
          element={<EditJobPage updateJobSubmit={updateJob}></EditJobPage>}
          loader={jobLoader}
        ></Route>

        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Route>
    )
  );

  async function addJob(newJob: Job): Promise<void> {
    try {
      await fetch("/api/jobs", {
        method: "post",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(newJob),
      });
    } catch (error) {
      console.log(error);
    }
  }

  async function deleteJob(id: string): Promise<void> {
    try {
      await fetch(`/api/jobs/${id}`, { method: "DELETE" });
    } catch (error) {
      console.error("Failed to delete job:", error);
    }
  }

  async function updateJob(job: Job): Promise<void> {
    try {
      await fetch(`/api/jobs/${job.id}`, {
        method: "put",
        body: JSON.stringify(job),
      });
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

export default App;
