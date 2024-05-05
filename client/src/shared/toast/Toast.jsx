import { toast } from "react-toastify";

const Toast = ( message, Type) => {
  let element;
  const value = {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: false,
    draggable: true,
    progress: undefined,
    theme: "light",
  };
  if (Type === "info") {
    element = toast.info(message, value);
  } else if (Type === "success") {
    element = toast.success(message, value);
  } else if (Type === "warn") {
    element = toast.warn(message, value);
  } else if (Type === "error") {
    element = toast.error(message, value);
  } else {
    element = toast("🦄 Wow so easy!", value);
  }
  return element
    
  ;
};

export default Toast;
