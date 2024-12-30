import React from "react";

const Business = ({ id, setActiveComponent, setLinks }) => {
  const handleClose = () => {
    setLinks((prevLinks) => prevLinks.filter(link => link.id !== id));
    setActiveComponent("My Business");
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold">Business Details</h1>
      <p>ID: {id}</p>
      {/* ...other UI or logic using the ID... */}
      <button
        className="mt-4 px-4 py-2 bg-red-500 text-white rounded"
        onClick={handleClose}
      >
        Close
      </button>
    </div>
  );
};

export default Business;