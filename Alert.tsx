import React from "react";

interface PROPS {
  children: string;
  onClose: () => void;
}

const alert = ({ children, onClose }: PROPS) => {
  return (
    <div>
      <div className="alert alert-primary alert-dismissible">
        {children}
        <button
          type="button"
          className="btn-close"
          data-bs-dismiss="alert"
          aria-label="Close"
          onClick={onClose}
        ></button>
      </div>
    </div>
  );
};

export default alert;
