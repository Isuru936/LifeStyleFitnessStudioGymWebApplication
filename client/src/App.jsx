import PaymentComplete from "./pages/PaymentComplete";
import EnterPaymentDetails from "./pages/EnterPaymentDetails";
import PaymentReview from "./pages/PaymentReview";
import AddCard from "./pages/AddCard";
import PaymentDetails from "./pages/Admin/PaymentDetails";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MembershipPlanSelection from "./pages/MembershipPlanSelection";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/payment-complete" element={<PaymentComplete />} />
        <Route path="/" element={<MembershipPlanSelection />} />
        <Route path="/payment-review" element={<PaymentReview />} />
        <Route path="/add-card" element={<AddCard />} />
        {/*Admin */}
        <Route path="/payment-details" element={<PaymentDetails />} />
        <Route path="/enter-payment" element={<EnterPaymentDetails />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
