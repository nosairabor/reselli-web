import React from "react";

const Modal = ({ children,close }) => {
  return (
    <div className="fixed bottom-0 left-0 right-0 top-0 bg-sky-500/30 z-40">
      <div className="absolute top-1/2 left-1/2">
        <section className="modal  bg-white rounded-">
          <div className="sticky top-0  px-6 py-4 bg-white modal-head flex justify-between">
            <div className="modalTitle">&nbsp;</div>
            <div className="modal-close-btn">
              <button
                className="px-3 py-2 hover:cursor"
                onClick={() => close(false)}
              >
                {" "}
                X{" "}
              </button>
            </div>
          </div>
          <div className="modal-body px-6 py">{children}</div>
        </section>
      </div>
    </div>
  );
};

export default Modal;
