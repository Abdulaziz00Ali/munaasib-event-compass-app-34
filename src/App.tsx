
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Bookings from "./pages/Bookings";
import Explore from "./pages/Explore";
import Profile from "./pages/Profile";
import EditProfile from "./pages/EditProfile";
import AccountInfo from "./pages/AccountInfo";
import PrivacySecurity from "./pages/PrivacySecurity";
import Notifications from "./pages/Notifications";
import Messages from "./pages/Messages";
import Help from "./pages/Help";
import ServiceDetails from "./pages/ServiceDetails";
import BookingForm from "./pages/BookingForm";
import EventPlanner from "./pages/EventPlanner";
import Events from "./pages/Events";
import CategoryDetails from "./pages/CategoryDetails";
import NotFound from "./pages/NotFound";
import SignIn from "./pages/SignIn";
import Login from "./pages/Login";
import ForgotPassword from "./pages/ForgotPassword";
import VerificationCode from "./pages/VerificationCode";
import ResetPassword from "./pages/ResetPassword";
import VendorDashboard from "./pages/VendorDashboard";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/bookings" element={<Bookings />} />
          <Route path="/explore" element={<Explore />} />
          <Route path="/events" element={<Events />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/edit-profile" element={<EditProfile />} />
          <Route path="/account-info" element={<AccountInfo />} />
          <Route path="/privacy-security" element={<PrivacySecurity />} />
          <Route path="/notifications" element={<Notifications />} />
          <Route path="/messages" element={<Messages />} />
          <Route path="/help" element={<Help />} />
          <Route path="/service/:id" element={<ServiceDetails />} />
          <Route path="/booking/:id" element={<BookingForm />} />
          <Route path="/event-planner" element={<EventPlanner />} />
          <Route path="/categories/:category" element={<CategoryDetails />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/login" element={<Login />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/verification-code" element={<VerificationCode />} />
          <Route path="/reset-password" element={<ResetPassword />} />
          <Route path="/vendor-dashboard" element={<VendorDashboard />} />
          {/* Add explicit routes for each category */}
          <Route path="/kitchens" element={<CategoryDetails />} />
          <Route path="/coffee" element={<CategoryDetails />} />
          <Route path="/halls" element={<CategoryDetails />} />
          <Route path="/addons" element={<CategoryDetails />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
