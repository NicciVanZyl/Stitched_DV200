import React, { useEffect } from "react";
import "../App.css";

function NotificationModal({ show, message, userName, onClose }) {
  useEffect(() => {
    if (show) {
      const timer = setTimeout(() => {
        onClose();
      }, 3500);
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
        <h3>Hi {userName}!</h3>
        <p>{message}</p>
      </div>
    </div>
  );
}

export default NotificationModal;
