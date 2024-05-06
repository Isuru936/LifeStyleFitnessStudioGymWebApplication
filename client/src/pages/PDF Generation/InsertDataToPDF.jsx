import pdfMake from "pdfmake/build/pdfmake";
import pdfFonts from "pdfmake/build/vfs_fonts";
import React, { useEffect, useState, useRef } from "react";
import { useParams } from "react-router-dom";
import QRCode from "qrcode"; // Import qrcode library
import CryptoJS from "crypto-js"; // Import CryptoJS for encryption
import { urlSafeEncode } from "../../utils/urlSafeEncode"; // Import the urlSafeEncode function
pdfMake.vfs = pdfFonts.pdfMake.vfs;

function PDFGeneration() {
  const { id } = useParams();
  const docDefinition = useRef(null); // Use ref to access current docDefinition
  const [url, setUrl] = useState(null);
  const [data, setData] = useState(null); // Change to null initial value
  const [name, setName] = useState(""); // Add name state

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `http://localhost:3000/api/employee/getEmployeeById/${urlSafeEncode(
            id
          )}` // Encode the ID before passing it to the URL
        );
        if (response.ok) {
          const { data } = await response.json();
          console.log(data.employee.name);
          setData(data.employee);

          createPdf({ name }); // Call createPdf after setting the data
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, [id]);

  const createPdf = async () => {
    try {
      // Encrypt the ID using CryptoJS
      const encryptedId = CryptoJS.AES.encrypt(
        id,
        "secret passphrase"
      ).toString();
      const qrCodeDataURI = await QRCode.toDataURL(urlSafeEncode(encryptedId), {
        width: 600,
      }); // Encode the encrypted ID before passing it to QRCode.toDataURL
      const docDef = {
        content: [
          {
            text: `Your QR Code`,
            style: "header",
            alignment: "center",
            margin: [0, 0, 0, 20],
          },
          {
            image: qrCodeDataURI,
            width: 200,
            alignment: "center",
            margin: [0, 0, 0, 40],
            border: [true, true, true, true],
          },
          {
            text: "Use this to mark ur attendance. Any misuse of the QR Code will be punishable",
            alignment: "center",
            margin: [0, 0, 0, 20],
          },
        ],

        pageSize: "letter",

        styles: {
          header: {
            fontSize: 22,
            bold: true,
          },
        },
      };
      docDefinition.current = docDef; // Store docDefinition in ref
      const pdfGenerator = pdfMake.createPdf(docDef);
      pdfGenerator.getBlob((blob) => {
        const url = URL.createObjectURL(blob);
        setUrl(url);
      });
      pdfGenerator.download(); // Initiating download directly
    } catch (error) {
      console.error("Error generating QR code:", error);
    }
  };

  return (
    <div className="App">
      {/* No need for a button here */}
      {url && <div>{url}</div>}
    </div>
  );
}

export default PDFGeneration;
