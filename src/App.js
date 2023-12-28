import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import CreateEvent from "./pages/CreateEvent";
import Create from "./pages/Create";
import CreateVenue from "./pages/CreateVenue";
import OnlineEventDet from "./pages/OnlineEventDet";
import VenueEventDet from "./pages/VenueEventDet";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Checkout from "./pages/Checkout";
import Invoice from "./pages/Invoice";
import Forgot from "./pages/Forgot";
import Confirmed from "./pages/Confirmed";
import OrganizerProfile from "./pages/OrganizerProfile";
import ExploreEvent from "./pages/ExploreEvent";
import BlogDet from "./pages/BlogDet";
import Faq from "./pages/Faq";
import Contact from "./pages/Contact";
import OurBlog from "./pages/OurBlog";
import Dashboard from "./Dashboard";
import Eventbydate from "./pages/Eventbydate";

import Dashboard2 from "./Dashboard2";
import DashboardProfile from "./pages/DashboardProfile";
import DashboardEvent from "./pages/DashboardEvent";
import Payout from "./pages/Payout";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/create-online-event" element={<CreateEvent />} />
        <Route path="/create-event" element={<Create />} />
        <Route path="/create-event-venue" element={<CreateVenue />} />
        <Route path="/event-details" element={<OnlineEventDet />} />
        <Route path="/venue-event" element={<VenueEventDet />} />
        <Route path="/login" element={<SignIn />} />
        <Route path="/register" element={<SignUp />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/invoice" element={<Invoice />} />
        <Route path="/forgot-password" element={<Forgot />} />
        <Route path="/booking-confirmed" element={<Confirmed />} />
        <Route path="/organizer-profile" element={<OrganizerProfile />} />
        <Route path="/explore-events" element={<ExploreEvent />} />
        <Route path="/blog" element={<OurBlog />} />
        <Route path="/blog-detail" element={<BlogDet />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/dashboard-two" element={<Dashboard2 />} />
        <Route path="/dashboard-profile" element={<DashboardProfile />} />
        <Route path="/dashboard-payout" element={<Payout />} />
        <Route path="/dashboard-event" element={<DashboardEvent />} />
        <Route path="/event-by-date" element={<Eventbydate />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
