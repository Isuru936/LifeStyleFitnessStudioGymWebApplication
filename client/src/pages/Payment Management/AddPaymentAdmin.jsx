import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import notify from "../../components/toasts/toastTemplate";
import { ToastContainer } from "react-toastify";
import axios from "axios";
import { pdf } from "@react-pdf/renderer";
import { saveAs } from "file-saver";
import logo from "../../assets/Logo.png";
import {
  PDFViewer,
  Document,
  Page,
  Text,
  Image,
  View,
  StyleSheet,
} from "@react-pdf/renderer";

function AddPaymentAdmin() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [userData, setUserData] = useState({});
  const [paymentType, setPaymentType] = useState("");
  const [paymentAmount, setPaymentAmount] = useState(0);
  const [email, setEmail] = useState("");

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await fetch(
          `http://localhost:3000/api/bioData/bioDataById/${id}`
        );
        const data = await response.json();
        setUserData(data.data.bioData);
        setEmail(data.data.bioData.email);
      } catch (error) {
        console.log(error);
      }
    };

    fetchUser();
  }, [id]);

  // Function to handle payment type selection
  const handlePaymentTypeChange = (e) => {
    setPaymentType(e.target.value);
    // Calculate payment amount based on selected payment type
    if (e.target.value === "Monthly") {
      setPaymentAmount(10000);
    } else if (e.target.value === "Yearly") {
      setPaymentAmount(110000);
    } else {
      setPaymentAmount(0);
    }
  };

  // Function to handle payment amount input
  const handlePaymentAmountChange = (e) => {
    setPaymentAmount(e.target.value);
  };

  const handlePaymentSubmission = async () => {
    if (!paymentType) {
      notify("error", "", "Please select a payment type");
      return;
    }

    try {
      const response = await fetch(
        "http://localhost:3000/api/payments/addPayment",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: userData.email,
            userId: id,
            username: userData.username,
            paymentType: paymentType.toLowerCase(), // Convert to lowercase for consistency
            amount: paymentAmount,
          }),
        }
      );

      if (response.ok) {
        notify("success", "", "Payment submitted successfully");

        // Generate PDF content
        const pdfContent = (
          <Document>
            <Page size="A4" style={styles.page}>
              <View style={styles.section}>
                <Image src={logo} style={styles.logo} />
                <Text style={styles.header}>Payment Details</Text>
                <View style={styles.section}>
                  <Text style={[styles.label, styles.text]}>Email:</Text>
                  <Text style={styles.text}>{userData.email}</Text>
                </View>
                <View style={styles.section}>
                  <Text style={[styles.label, styles.text]}>
                    {" "}
                    Please Aknowleged this as the payment reciept. For your
                    payment.
                  </Text>
                  <Text style={styles.text}>{userData.email}</Text>
                </View>
                <View style={styles.section}>
                  <Text style={[styles.label, styles.text]}>Username:</Text>
                  <Text style={styles.text}>{userData.username}</Text>
                </View>
                <View style={styles.section}>
                  <Text style={[styles.label, styles.text]}>Payment Type:</Text>
                  <Text style={styles.text}>{paymentType}</Text>
                </View>
                <View style={styles.section}>
                  <Text style={[styles.label, styles.text]}>Amount:</Text>
                  <Text style={styles.text}>{paymentAmount}</Text>
                </View>
              </View>
            </Page>
          </Document>
        );

        // Generate PDF blob
        const blob = await pdf(pdfContent).toBlob();

        // Download PDF
        saveAs(blob, "payment_details.pdf");

        let emailContent = `
          <h1 style="text-align: center; color: #333;">Payment Details Updated</h1>
          <div style="text-align: center;">
            <img src="https://firebasestorage.googleapis.com/v0/b/lsfs-1a314.appspot.com/o/Logo.png?alt=media&token=117322bf-b255-4114-b29e-b58a55e5a58e" alt="Company Logo" style="max-width: 100px;">
          </div>
          <p style="margin-top: 20px; line-height: 1.6; color: #555;">
            Dear Sir/ Madam,
          </p>
          <p style="margin-top: 20px; line-height: 1.6; color: #555;">
            We are writing to inform you that your payment details have been successfully updated by our admin.
          </p>
          <p style="margin-top: 20px; line-height: 1.6; color: #555;">
            If you have any questions or concerns regarding your payment, feel free to contact our support team.
          </p>
          <p style="margin-top: 20px; line-height: 1.6; color: #555;">
            Thank you for choosing LSFS.
          </p>
          <p style="margin-top: 20px; line-height: 1.6; color: #555; text-align: center;">
            Sincerely,<br>
            LSFS Team
          </p>
        `;

        // Send the email
        try {
          await axios.post("http://localhost:3000/api/sendEmail", {
            userEmail: `{${email} }`,
            subject: "Payment Notice has been Updated",
            html: emailContent,
          });
          console.log("Email sent successfully");
          notify("success", "", "Payment Added and notified user successfully");
          navigate("/view-all-users");
        } catch (error) {
          console.error("Error sending email:", error);
          notify("error", "", "Error sending email");
        }
      } else {
        notify("error", "", "Error submitting payment");
      }
    } catch (error) {
      notify("error", "", "Error submitting payment");
    }
  };

  const handleBack = () => {
    navigate("/view-all-users");
  };

  return (
    <div className="container w-fit mx-auto py-5">
      <div className="mx-auto border-2 p-5 rounded-lg">
        <h1 className="text-3xl text-center mb-5 font-extrabold">
          Add Payment
        </h1>
        <p className="mb-3">Email: {userData.email}</p>
        {/* <p className="mb-3">Username: {userData.username}</p> */}
        <label htmlFor="paymentType" className="block mb-1">
          Payment Type:
        </label>
        <select
          id="paymentType"
          value={paymentType}
          onChange={handlePaymentTypeChange}
          className="border border-gray-300 rounded px-3 py-2 mb-3 w-full"
        >
          <option value="">Select Payment Type</option>
          <option value="Yearly">Yearly</option>
          <option value="Monthly">Monthly</option>
        </select>
        <label htmlFor="paymentAmount" className="block mb-1">
          Amount:
        </label>
        <input
          type="number"
          id="paymentAmount"
          value={paymentAmount}
          disabled
          onChange={handlePaymentAmountChange}
          className="border border-gray-300 rounded px-3 py-2 mb-3 w-full"
        />
        <button
          onClick={handlePaymentSubmission}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Add Payment
        </button>
        <button
          onClick={handleBack}
          className="bg-slate-500 ml-2 text-white px-4 py-2 rounded hover:bg-slate-600"
        >
          Back
        </button>
      </div>
      <ToastContainer />
    </div>
  );
}

const styles = StyleSheet.create({
  page: {
    flexDirection: "column",
    backgroundColor: "#ffffff",
    padding: 20,
  },
  section: {
    marginBottom: 10,
  },
  header: {
    fontSize: 24,
    marginBottom: 10,
    textAlign: "center",
    textDecoration: "underline",
  },
  text: {
    fontSize: 12,
    marginBottom: 5,
  },
  label: {
    fontWeight: "bold",
  },
  logo: {
    marginBottom: 20, // Adjust as needed
    width: 100, // Adjust as needed
    height: 50, // Adjust as needed
    alignSelf: "center",
  },
});

export default AddPaymentAdmin;
