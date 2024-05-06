import React from "react";
import QRCode from "qrcode.react";

function QRCodeGenerator({ id }) {
  return (
    <div className="flex justify-center items-center h-full">
      <QRCode value={id} size={256} />
    </div>
  );
}

export default QRCodeGenerator;
