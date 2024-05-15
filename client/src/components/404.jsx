import { Icon } from "@iconify/react/dist/iconify.js";
import React from "react";

function NotFound404() {
  return (
    <div className="w-screen h-screen flex justify-center items-center">
      <Icon
        icon="tabler:error-404"
        className="text-9xl"
        style={{ width: "100px" }}
      />
      <p className="border-l-2">PAGE NOT FOUND</p>
    </div>
  );
}

export default NotFound404;
