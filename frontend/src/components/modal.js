import React, { useEffect } from "react";
import "../App.css";

function NotificationModal({ show, message, onClose }) {
  useEffect(() => {
    if (show) {
      const timer = setTimeout(() => {
        onClose();
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [show, onClose]);

  if (!show) return null;

  return (
    <div className="customModalOverlay">
      <div className="customModalContent">
        <div className="successCheckmark">
          <div className="checkIcon">
            <span className="iconLine lineTip"></span>
            <span className="iconLine lineLong"></span>
            <div className="iconCircle"></div>
            <div className="iconFix"></div>
          </div>
        </div>
        <h3>Hi There!</h3>
        <p>{message}</p>
      </div>
    </div>
  );
}

export default NotificationModal;
