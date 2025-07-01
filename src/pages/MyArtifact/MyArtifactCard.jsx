import React from "react";
import { RiDeleteBin6Line } from "react-icons/ri";
import { GoArrowUp } from "react-icons/go";
import Swal from "sweetalert2";

const MyArtifactCard = ({ data, onDelete }) => {
  const { _id, artifactName, image, description, likeCount } = data;

  const handleDelete = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "This artifact will be permanently deleted.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:3000/artifacts/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((resData) => {
            if (resData.deletedCount > 0) {
              Swal.fire("Deleted!", "Artifact has been deleted.", "success");
              if (onDelete) onDelete(_id); // Notify parent to update list
            }
          });
      }
    });
  };

  return (
    <div className="rounded-md shadow-md bg-white dark:text-gray-800">
      <div className="flex items-center justify-between p-4">
        <h2 className="text-xl font-semibold text-black">{artifactName}</h2>
      </div>

      <img
        src={image}
        alt={artifactName}
        className="object-cover w-full h-64"
      />

      <div className="p-4 space-y-3">
        <p className="text-sm text-gray-700">
          <span className="font-semibold">Likes:</span> {likeCount}
        </p>

        <p className="text-[15px] text-gray-800">{description}</p>

        <input
          type="text"
          placeholder="Add a comment..."
          className="w-full border rounded p-2 text-sm"
        />

        <div className="flex gap-3 mt-2">
          <button
            onClick={handleDelete}
            className="flex items-center gap-1 bg-red-100 text-red-800 px-3 py-1 rounded hover:bg-red-200"
          >
            Delete <RiDeleteBin6Line />
          </button>

          <button className="flex items-center gap-1 bg-green-100 text-green-800 px-3 py-1 rounded hover:bg-green-200">
            Update <GoArrowUp />
          </button>
        </div>
      </div>
    </div>
  );
};

export default MyArtifactCard;
