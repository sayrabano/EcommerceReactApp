import { toast } from "react-toastify";

// function to show notification/message
export const showToastMessage = (message, type) => {
  toast[type](message, {
    position: toast.POSITION.TOP_CENTER,
  });
};
