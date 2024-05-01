import { Html5QrcodeScanner } from "html5-qrcode";
import React, { useEffect, useState } from "react";

function Scanner() {
  const [scanResult, setScanResult] = useState(null);
  const [resultJSON, setResultJSON] = useState("");

  useEffect(() => {
    const scanner = new Html5QrcodeScanner("reader", { fps: 5, qrbox: 250 });
    scanner.render(success, error);

    function success(result) {
      scanner.clear();
      setScanResult(result);
      setResultJSON(result);
      const parsedResult = JSON.parse(result);
      if (parsedResult.id) {
        console.log("ID found:", parsedResult.id);
      } else {
        alert("No ID found in the scanned data.");
      }
    }

    function error(errorMessage) {
      console.warn(errorMessage); // corrected the console warning
    }

    return () => {
      scanner.clear();
    };
  }, []); // Empty dependency array ensures useEffect runs only once

  return (
    <div>
      {scanResult ? (
        <div>
          <h1>Scan Result: {scanResult}</h1>
          <h1>ID: {resultJSON && JSON.parse(resultJSON).id}</h1>
        </div>
      ) : (
        <div
          id="reader"
          style={{ backgroundRepeat: "no-repeat" }}
          className="w-96 h-96 border-2 border-black"
        ></div>
      )}
    </div>
  );
}
export default Scanner;
