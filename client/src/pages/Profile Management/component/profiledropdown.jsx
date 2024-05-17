import React, { useContext, useState, useEffect } from "react";
import MENU from "../../../assets/MENU.png";
import logo from "../../../assets/Logo.png";
import { AuthContext } from "../../../shared/context/auth.context";
import { saveAs } from "file-saver";
import axios from "axios"; // Import Axios for making HTTP requests
import {
  PDFViewer,
  Document,
  Page,
  pdf,
  Text,
  Image,
  View,
  StyleSheet,
} from "@react-pdf/renderer";
import { Icon } from "@iconify/react/dist/iconify.js";
import { Link } from "react-router-dom";

const ProfileDropdown = () => {
  const Auth = useContext(AuthContext);
  const [openDropdown, setOpenDropdown] = useState(false);
  
  const [profile, setProfile] = useState({
    userID: {
      details: {
        fullName: ""
      }
    },
    email:"",
    age: "",
    NIC: "",
    tele: "",
    gender: "",
    height:"",
    weight: "",
    smoker: "",
    alcoholic: "",
    createdAt:"",
    workoutplan: [
        {
          description:""
        },
      ]
    });
  
    useEffect(() => {
    axios
    .get(`http://localhost:3000/api/quiz/${Auth.userID}`)
    .then((response) => {
      setProfile(response.data);
    })
    .catch((error) => {
      console.log(error);
      Toast("Something went wrong", "error");
    });
  }, [Auth.userID]);

  const toggleDropdown = () => {
    setOpenDropdown(!openDropdown);
  };

  const logout = () => {
    Auth.logout();
  };

  const handlePDFDownload = async () => {
    try {
      // Generate PDF content
      const pdfContent = (
        <Document>
          <Page size="A4" style={styles.page}>
            <View style={styles.section}>
              <View style={styles.headerSection}>
                <Image src={logo} style={styles.logo} />
                <Text style={styles.header}>User Details</Text>
              </View>
              <hr />
              <View style={styles.infoSection}>
                <View style={styles.infoRow}>
                  <Text style={styles.text }>Name   : {profile.userID.details.fullName}</Text>
                </View>
                <View style={styles.infoRow}>
                  <Text style={styles.label}>Email  : {profile.email}</Text>
                </View>
                <View style={styles.infoRow}>
                  <Text style={styles.label}>Age    : {profile.age}</Text>
                </View>
                <View style={styles.infoRow}>
                  <Text style={styles.text} >Gender : {profile.gender}</Text>
                </View>
                <View style={styles.infoRow}>
                  <Text style={styles.label}>NIC    : {profile.NIC}</Text>
                </View>
                <View style={styles.infoRow}>
                  <Text style={styles.label}>Tele   : {profile.tele}</Text>
                </View>
              </View>
            </View>
          </Page>
        </Document>
      );

      // Generate PDF blob
      const blob = await pdf(pdfContent).toBlob();

      // Download PDF
      saveAs(blob, `${profile.userID.details.fullName}_Employee_Details.pdf`);
    } catch (error) {
      console.error("Error downloading PDF:", error);
    }
  };

  return (
    <>
      <div onClick={toggleDropdown}>
        <img
          src={MENU}
          className="absolute w-10 h-10 top-0 right-0 mt-2 mr-2"
          alt="menu"
        />
      </div>
      {openDropdown && (
        <div className="z-10 block absolute top-12 right-1 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700">
          <ul
            className="py-2 text-sm text-gray-700 dark:text-gray-200"
            aria-labelledby="dropdownDelayButton"
          >
            <li>
              <a
                href="#"
                className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                onClick={handlePDFDownload}
              >
                Generate Report
              </a>
            </li>
            <div onClick={logout}>
              <li className="block px-4 py-2 hover:bg-gray-00 dark:hover:bg-gray-600 dark:hover:text-white">
                Sign out
              </li>
            </div>
          </ul>
        </div>
      )}
    </>
  );
};

export default ProfileDropdown;

// Assuming you have defined styles
const styles = StyleSheet.create({

  section: {},
  headerSection: {},
  header: {
    fontSize: 20,
    marginBottom: 20
   },
  infoSection: {},
  infoRow: {},
  label: {},
  text: {},
  page: {
    backgroundColor: '#fff',
    fontFamily: 'Helvetica',
    fontSize: 11,
    paddingTop: 30,
    paddingLeft: 50,
    paddingRight: 50,
    lineHeight: 1.5,
    flexDirection: 'column',
},
logo: {
    width: 84,
    height: 60,
    marginLeft: 'auto',
    marginRight: 'auto',
    marginBottom: 50
}
});

