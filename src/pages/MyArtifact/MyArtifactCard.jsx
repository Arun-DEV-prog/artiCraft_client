import React from "react";
import { RiDeleteBin6Line } from "react-icons/ri";
import { GoArrowUp } from "react-icons/go";
import Swal from "sweetalert2";
import { Link } from "react-router";
import { Helmet } from "react-helmet";

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
        fetch(`https://artifact-server-rust.vercel.app/artifacts/${_id}`, {
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
    <div className="rounded-md shadow-md   dark:text-gray-800">
      <Helmet>
        <title>MyArtifact</title>
      </Helmet>
      <div className="flex items-center justify-between p-4">
        <h2 className="text-xl font-semibold text-white">{artifactName}</h2>
      </div>

      <img
        src={image}
        alt={artifactName}
        className="object-cover w-full h-64"
      />

      <div className="p-4 space-y-3">
        <p className="text-sm text-white">
          <span className="font-semibold">Likes:</span> {likeCount}
        </p>

        <p className="text-[15px]  text-white">{description}</p>

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

          <Link
            to={`/update/${_id}`}
            className="flex items-center gap-1 bg-green-100 text-green-800 px-3 py-1 rounded hover:bg-green-200"
          >
            Update <GoArrowUp />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MyArtifactCard;
