import React, { useContext, useState } from "react";
import { AuthContext } from "../../context/AuthProvider";

import Swal from "sweetalert2";
import { Navigate, useLoaderData, useNavigate } from "react-router";

const Update = () => {
  const { user } = useContext(AuthContext);
  const {
    _id,
    artifactName,
    image,
    type,
    context,
    description,
    createdAt,
    discoveredAt,
    discoveredBy,
    location,
  } = useLoaderData();

  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    artifactName: "",
    image: "",
    type: "Tools",
    context: "",
    description: "",
    createdAt: "",
    discoveredAt: "",
    discoveredBy: "",
    location: "",
  });
  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const artifact = {
      ...formData,
      addedBy: user?.displayName,
      email: user?.email,
      likeCount: 0,
    };

    try {
      const res = await fetch(
        `https://artifact-server-rust.vercel.app/allartifacts/${_id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(artifact),
        }
      );

      if (res.ok) {
        Swal.fire("Success!", "Group Updated successfully!", "success");

        navigate("/my-artifacts");
      } else {
        Swal.fire("Error", "Failed to Update group.", "error");
      }
    } catch (err) {
      Swal.fire("Error", err.message, "error");
    }
  };

  return (
    <div className=" back p-4">
      <div className="max-w-3xl mx-auto p-8  bg-black rounded-xl shadow ">
        <h2 className="text-2xl font-semibold mb-6 text-center">
          Update Your Artifact
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="artifactName"
            placeholder="Artifact Name"
            onChange={handleChange}
            defaultValue={artifactName}
            required
            className="w-full border px-4 py-2 rounded"
          />

          <input
            type="url"
            name="image"
            placeholder="Artifact Image URL"
            defaultValue={image}
            onChange={handleChange}
            required
            className="w-full border px-4 py-2 rounded"
          />

          <select
            name="type"
            defaultValue={type}
            onChange={handleChange}
            className="w-full border bg-black px-4 py-2 rounded"
          >
            <option>Tools</option>
            <option>Weapons</option>
            <option>Documents</option>
            <option>Writings</option>
          </select>

          <input
            type="text"
            name="context"
            placeholder="Historical Context"
            defaultValue={context}
            onChange={handleChange}
            className="w-full border px-4 py-2 rounded"
          />

          <textarea
            name="description"
            placeholder="Short Description"
            defaultValue={description}
            onChange={handleChange}
            className="w-full border px-4 py-2 rounded"
          />

          <input
            type="text"
            name="createdAt"
            placeholder="Created At (e.g., 100 BC)"
            defaultValue={createdAt}
            onChange={handleChange}
            className="w-full border px-4 py-2 rounded"
          />

          <input
            type="text"
            name="discoveredAt"
            placeholder="Discovered At (e.g., 1799)"
            defaultValue={discoveredAt}
            onChange={handleChange}
            className="w-full border px-4 py-2 rounded"
          />

          <input
            type="text"
            name="discoveredBy"
            placeholder="Discovered By"
            defaultValue={discoveredBy}
            onChange={handleChange}
            className="w-full border px-4 py-2 rounded"
          />

          <input
            type="text"
            name="location"
            placeholder="Present Location"
            defaultValue={location}
            onChange={handleChange}
            className="w-full border px-4 py-2 rounded"
          />

          <div className="grid  md:grid-cols-2 gap-4">
            <input
              type="text"
              value={user?.displayName || ""}
              readOnly
              className="w-full border px-4 py-2 rounded bg-black"
            />
            <input
              type="email"
              value={user?.email || ""}
              readOnly
              className="w-full border px-4 py-2 rounded bg-black"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
          >
            Update Artifact
          </button>
        </form>
      </div>
    </div>
  );
};

export default Update;
