import React, { useContext, useState } from "react";
// assuming this holds user info
import toast from "react-hot-toast";
import { useNavigate } from "react-router";
import { AuthContext } from "../../context/AuthProvider";

const AddArtifact = () => {
  const { user } = useContext(AuthContext);
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
        "https://artifact-server-rust.vercel.app/artifacts",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(artifact),
        }
      );

      if (res.ok) {
        toast.success("Artifact added successfully!");
        navigate("/allartifacts");
      } else {
        toast.error("Failed to add artifact!");
      }
    } catch (err) {
      toast.error("Server Error!");
    }
  };

  return (
    <div className=" back p-4">
      <div className="max-w-3xl mx-auto p-8  rounded-xl shadow ">
        <h2 className="text-2xl font-semibold mb-6 text-center">
          Add Artifact
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="artifactName"
            placeholder="Artifact Name"
            value={formData.artifactName}
            onChange={handleChange}
            required
            className="w-full border px-4 py-2 rounded"
          />

          <input
            type="url"
            name="image"
            placeholder="Artifact Image URL"
            value={formData.image}
            onChange={handleChange}
            required
            className="w-full border px-4 py-2 rounded"
          />

          <select
            name="type"
            value={formData.type}
            onChange={handleChange}
            className="w-full border  px-4 py-2 rounded"
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
            value={formData.context}
            onChange={handleChange}
            className="w-full border px-4 py-2 rounded"
          />

          <textarea
            name="description"
            placeholder="Short Description"
            value={formData.description}
            onChange={handleChange}
            className="w-full border px-4 py-2 rounded"
          />

          <input
            type="text"
            name="createdAt"
            placeholder="Created At (e.g., 100 BC)"
            value={formData.createdAt}
            onChange={handleChange}
            className="w-full border px-4 py-2 rounded"
          />

          <input
            type="text"
            name="discoveredAt"
            placeholder="Discovered At (e.g., 1799)"
            value={formData.discoveredAt}
            onChange={handleChange}
            className="w-full border px-4 py-2 rounded"
          />

          <input
            type="text"
            name="discoveredBy"
            placeholder="Discovered By"
            value={formData.discoveredBy}
            onChange={handleChange}
            className="w-full border px-4 py-2 rounded"
          />

          <input
            type="text"
            name="location"
            placeholder="Present Location"
            value={formData.location}
            onChange={handleChange}
            className="w-full border px-4 py-2 rounded"
          />

          <div className="grid  md:grid-cols-2 gap-4">
            <input
              type="text"
              value={user?.displayName || ""}
              readOnly
              className="w-full border px-4 py-2 rounded "
            />
            <input
              type="email"
              value={user?.email || ""}
              readOnly
              className="w-full border px-4 py-2 rounded "
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
          >
            Add Artifact
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddArtifact;
