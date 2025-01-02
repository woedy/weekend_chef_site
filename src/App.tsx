import { useEffect, useState } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';

import Loader from './common/Loader';
<<<<<<< HEAD
import DefaultLayout from './layout/DefaultLayout';


import LandingPage from './pages/Landing/LandingPage';
import PageTitle from './pages/Landing/components/PageTitle';
=======
import PageTitle from './components/PageTitle';

import Dashboard from './pages/Dashboard/Dashboard';

import Alerts from './pages/UiElements/Alerts';
import Buttons from './pages/UiElements/Buttons';
import DefaultLayout from './layout/DefaultLayout';
import AllUsers from './pages/Users/AllUsers';
import UserDetails from './pages/Users/UserDetails';
import AddUser from './pages/Users/AddUser';
import SignUp from './pages/Authentication/SignUp';
import SignIn from './pages/Authentication/SignIn';



import AllDishCategories from './pages/Food/DishCategories/AllDishCategories';
>>>>>>> c7c184b2bc4fe9c61a0def55ea0378bb70f47b20

const hiddenOnRoutes = ['/', '/signup', '/signin'];

function App() {
  const [loading, setLoading] = useState<boolean>(true);
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  useEffect(() => {
    setTimeout(() => setLoading(false), 1000);
  }, []);

  return loading ? (
    <Loader />
  ) : (
    <DefaultLayout pathname={pathname} hiddenOnRoutes={hiddenOnRoutes}>
      <Routes>


        <Route
<<<<<<< HEAD
          index
          element={
            <>
            <PageTitle title="Home | Weekend Chef" />

              <LandingPage />
=======
          path="/dashboard"
          element={
            <>
              <PageTitle title="Dashboard |Weekend Chef Admin." />
              <Dashboard />
>>>>>>> c7c184b2bc4fe9c61a0def55ea0378bb70f47b20
            </>
          }
        />

<<<<<<< HEAD
=======
        <Route
          index
          element={
            <>
              <PageTitle title="Sign In |Weekend Chef Admin." />
              <SignIn />
            </>
          }
        />

        <Route
          path="/signup"
          element={
            <>
              <PageTitle title="Sign Up |Weekend Chef Admin." />
              <SignUp />
            </>
          }
        />

        <Route
          path="/signin"
          element={
            <>
              <PageTitle title="Sign In |Weekend Chef Admin." />
              <SignIn />
            </>
          }
        />

        <Route
          path="/all-dish-categories"
          element={
            <>
              <PageTitle title="All Dish Categories | Weekend Chef Admin." />
              <AllDishCategories />
            </>
          }
        />


                <Route
          path="/all-users"
          element={
            <>
              <PageTitle title="All Users |Weekend Chef Admin." />
              <AllUsers />
            </>
          }
        />


        <Route
          path="/user-details/:user_id"
          element={
            <>
              <PageTitle title="User Details |Weekend Chef Admin." />
              <UserDetails />
            </>
          }
        />

        <Route
          path="/add-user"
          element={
            <>
              <PageTitle title="Add User |Weekend Chef Admin." />
              <AddUser />
            </>
          }
        />
>>>>>>> c7c184b2bc4fe9c61a0def55ea0378bb70f47b20




<<<<<<< HEAD
=======



        <Route
          path="/ui/alerts"
          element={
            <>
              <PageTitle title="Alerts |Weekend Chef Admin. " />
              <Alerts />
            </>
          }
        />
        <Route
          path="/ui/buttons"
          element={
            <>
              <PageTitle title="Buttons |Weekend Chef Admin." />
              <Buttons />
            </>
          }
        />
>>>>>>> c7c184b2bc4fe9c61a0def55ea0378bb70f47b20
      </Routes>
    </DefaultLayout>
  );
}

export default App;
