import { createBrowserRouter } from "react-router";
import HomeLayout from "./Layouts/HomeLayout";
import DonationCampaign from "./Pages/DonationCampaign";
import Home from "./Pages/Home";
import DetailsDonation from "./Pages/DetailsDonation";
import Login from "./Pages/Login";
import Register from "./Pages/Register";

const router = createBrowserRouter([
    {
        path: '/',
        element: <HomeLayout></HomeLayout>,
        children: [
            {
                index: true,
                element: <Home></Home>
            },
            {
                path: '/donation_campaign',
                element: <DonationCampaign></DonationCampaign>,
                loader: () => fetch('/donation.json')
            },
            {
                path: '/:id',
                element: <DetailsDonation></DetailsDonation>,
                loader: () => fetch('/donation.json')
            },
            {
                path: '/login',
                element: <Login></Login>
            
            },
            {
                path: '/register',
                element: <Register></Register>
            }
        ]
    },


])

export default router;