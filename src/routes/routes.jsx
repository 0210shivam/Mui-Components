import { createBrowserRouter, Outlet } from "react-router-dom";
import App from "../App";
import Test from "../components/Test";
import { lazy, Suspense } from "react";
import Progress from "../components/global/Progress";
import { authPaths, mainPaths, rootPaths } from "./path";
import Dashboard from "../pages/Dashboard";

const MainLayout = lazy(() => import('../layouts/main-layout'));
const MagicQR = lazy(() => import('../pages/magic-qr'));
const MagicLink = lazy(() => import('../pages/magic-link'));
const Reviews = lazy(() => import('../pages/reviews'));
const LeadAutomation = lazy(() => import('../pages/lead-automation'));
const Customize = lazy(() => import('../pages/customize'));
const Business = lazy(() => import('../pages/business'));
const Plans = lazy(() => import('../pages/plans'));

const SignIn = lazy(() => import('../pages/signin'));
const SignUp = lazy(() => import('../pages/signup'));
const AuthLayout = lazy(() => import('../layouts/auth-layout'));

const routes = createBrowserRouter([{
   element: (
      <Suspense fallback={<Progress />}>
         <App />
      </Suspense>
   ),
   children: [
      {
         path: rootPaths.root,
         element: (
            <MainLayout>
               <Suspense fallback={<div>Loading...</div>}>
                  <Outlet />
               </Suspense>
            </MainLayout>
         ),
         children: [
            {
               // index: true,
               path: mainPaths.dashboard,
               element: <Dashboard />,
            },
            {
               path: mainPaths.test,
               element: <Test />,
            },
            {
               path: mainPaths.magicQR,
               element: <MagicQR />
            },
            {
               path: mainPaths.magicLink,
               element: <MagicLink />
            },
            {
               path: mainPaths.reviews,
               element: <Reviews />
            },
            {
               path: mainPaths.leadAutomation,
               element: <LeadAutomation />
            },
            {
               path: mainPaths.customize,
               element: <Customize />
            },
            {
               path: mainPaths.business,
               element: <Business />
            },
            {
               path: mainPaths.plans,
               element: <Plans />
            }
         ],
      },
      {
         path: rootPaths.root,
         element: (
            <AuthLayout>
               <Suspense fallback={<div>Loading...</div>}>
                  <Outlet />
               </Suspense>
            </AuthLayout>
         ),
         children: [
            {
               path: authPaths.signin,
               element: <SignIn />
            },
            {
               path: authPaths.signup,
               element: <SignUp />
            },
         ]
      },
      {
         path: '*',
         element: <div>Not Found</div>,
      },
   ]
}])

export default routes;