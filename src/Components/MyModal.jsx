import React from "react";

const MyModal = () => {
  return (
    <div className="modal fade modal-sm" tabIndex="-1" id="myModal">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h4 className="modal-title">User Login</h4>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>

          <div className="modal-body p-4">
            <form>
              <div className="mb-3">
                <label htmlFor="email" className="col-form-label">
                  Email
                </label>
                <input type="text" className="form-control" id="email" />
              </div>
              <div className="mb-3">
                <label htmlFor="password" className="col-form-label">
                  Password
                </label>
                <input type="text" className="form-control" id="password" />
              </div>
            </form>
          </div>

          <div className="modal-footer">
            <button type="button" className="btn btn-success">
              Login
            </button>
            <button
              type="button"
              className="btn btn-secondary"
              data-bs-dismiss="modal"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export { MyModal };
