import React from 'react';

const DeleteUserComponent = ({ handleDelete }) => {
  const handleConfirmDelete = async () => {
    try {
      await handleDelete(); // Call the function passed as prop to handle deletion
      // Optionally, you can close the modal or show a success message here
    } catch (error) {
      console.error('Error deleting user:', error);
      // Optionally, handle error with toast or other error handling mechanism
    }
  };

  return (
    <div id="deleteEmployeeModal" className="modal fade">
      <div className="modal-dialog">
        <div className="modal-content">
          <form>
            <div className="modal-header">
              <h4 className="modal-title">Delete Employee</h4>
            </div>
            <div className="modal-body">
              <p>Are you sure you want to delete these records?</p>
              <p className="text-warning">
                <small>This action cannot be undone.</small>
              </p>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-default" data-bs-dismiss="modal">
                Cancel
              </button>
              <button type="button" className="btn btn-danger" onClick={handleConfirmDelete}>
                Delete It
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default DeleteUserComponent;