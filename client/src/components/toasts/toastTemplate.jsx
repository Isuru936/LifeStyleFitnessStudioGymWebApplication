import React from "react";
import { toast } from "react-toastify";
import { Icon } from "@iconify/react/dist/iconify.js";
import PropTypes from "prop-types";

const CustomToast = ({ type, icon, message }) => (
  <div className="flex items-center">
    <Icon icon={icon} style={{ width: "34px", height: "34px" }} />
    <span className="ml-2">{message}</span>
  </div>
);

const notify = (type, icon, message) =>
  toast[type](<CustomToast icon={icon} message={message} />, {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  });

CustomToast.propTypes = {
  icon: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
};
export default notify;
