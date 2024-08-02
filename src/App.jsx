import Layout from "./components/layout/layout";
import Home from "./pages/home/home";

import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createHashRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Support from "./pages/support/support";
import Project from "./pages/project/project";
import About from "./pages/about/about";
import Contact from "./pages/contact/contact";
import PowerPlants from "./pages/powerPlants/powerPlants";
import ProjectTemplate from "./pages/powerPlants/projectTemplate/projectTemplate";
import Partner from "./pages/partner/partner";
import Documentation from "./pages/documentation/documentation";

const router = createHashRouter(
  createRoutesFromElements(
    <Route path="/">
      <Route
        index
        element={
          <Layout>
            <Home />
          </Layout>
        }
      />

      <Route
        path="/en/"
        element={
          <Layout>
            <Home />
          </Layout>
        }
      />

      <Route
        path={"/solarne-elektrane-o-nama"}
        element={
          <Layout>
            <About />
          </Layout>
        }
      />

      <Route
        path={"/en/about-us"}
        element={
          <Layout>
            <About />
          </Layout>
        }
      />

      <Route
        path={"/partner"}
        element={
          <Layout>
            <Partner />
          </Layout>
        }
      />

      <Route
        path={"/en/partner"}
        element={
          <Layout>
            <Partner />
          </Layout>
        }
      />

      <Route
        path="/podrska-solarne-elektrane"
        element={
          <Layout>
            <Support />
          </Layout>
        }
      />

      <Route
        path="/en/support-for-solar-power-plants"
        element={
          <Layout>
            <Support />
          </Layout>
        }
      />

      <Route
        path="/razvojni-projekti-key4s"
        element={
          <Layout>
            <Project />
          </Layout>
        }
      />

      <Route
        path="/en/development-projects"
        element={
          <Layout>
            <Project />
          </Layout>
        }
      />

      <Route
        path="/solarne-elektrane"
        element={
          <Layout>
            <PowerPlants />
          </Layout>
        }
      />

      <Route
        path="/en/construction-of-solar-power-plants"
        element={
          <Layout>
            <PowerPlants />
          </Layout>
        }
      />

      <Route
        path="/dokumentacija-key4s"
        element={
          <Layout>
            <Documentation />
          </Layout>
        }
      />

      <Route
        path="/en/documentation"
        element={
          <Layout>
            <Documentation />
          </Layout>
        }
      />

      <Route
        path="/solarne-elektrane/:id"
        element={
          <Layout>
            <ProjectTemplate />
          </Layout>
        }
      />

      <Route
        path="/en/construction-of-solar-power-plants/:id"
        element={
          <Layout>
            <ProjectTemplate />
          </Layout>
        }
      />

      <Route
        path="/kontakt-key4s"
        element={
          <Layout>
            <Contact />
          </Layout>
        }
      />

      <Route
        path="/en/contact"
        element={
          <Layout>
            <Contact />
          </Layout>
        }
      />
    </Route>
  )
);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
