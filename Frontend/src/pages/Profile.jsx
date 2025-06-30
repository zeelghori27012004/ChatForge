import React, { useContext, useState, useEffect } from "react";
import { UserContext } from "../context/User.context";
import { FaYoutube, FaInstagram, FaFacebook, FaTwitter, FaGithub, FaGlobe } from "react-icons/fa";

export default function Profile() {
  const { user } = useContext(UserContext);
  const [editMode, setEditMode] = useState(false);
  const [form, setForm] = useState({
    name: user?.name || user?.username || "",
    email: user?.email || "",
  });

  useEffect(() => {
    setForm({
      name: user?.name || user?.username || "",
      email: user?.email || "",
    });
  }, [user]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleEdit = () => setEditMode(true);
  const handleSave = () => setEditMode(false);

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center pt-8">
      <div className="bg-white rounded-lg shadow-lg shadow-blue-100 border border-blue-600 p-8 w-full max-w-xl">
        <div className="text-xl font-semibold mb-6 text-gray-700">Profile</div>
        <div className="divide-y">
          <div className="flex justify-between py-3 items-center">
            <span className="font-semibold text-gray-800">Name</span>
            {editMode ? (
              <input
                className="border rounded px-2 py-1 w-2/3"
                name="name"
                value={form.name}
                onChange={handleChange}
              />
            ) : (
              <span className="text-gray-600">{form.name || "-"}</span>
            )}
          </div>
          <div className="flex justify-between py-3 items-center">
            <span className="font-semibold text-gray-800">Email</span>
            {editMode ? (
              <input
                className="border rounded px-2 py-1 w-2/3"
                name="email"
                value={form.email}
                onChange={handleChange}
              />
            ) : (
              <span className="text-gray-600">{form.email || "-"}</span>
            )}
          </div>
          <div className="flex justify-between py-3 items-center">
            <span className="font-semibold text-gray-800">Contact Number</span>
            {editMode ? (
              <input
                className="border rounded px-2 py-1 w-2/3"
                name="number"
                value={form.number}
                onChange={handleChange}
              />
            ) : (
              <span className="text-gray-600">{form.number || "-"}</span>
            )}
          </div>
          <div className="flex justify-between py-3 items-center">
            <span className="font-semibold text-gray-800">Company Name</span>
            {editMode ? (
              <input
                className="border rounded px-2 py-1 w-2/3"
                name="company"
                value={form.company}
                onChange={handleChange}
              />
            ) : (
              <span className="text-gray-600">{form.company || "-"}</span>
            )}
          </div>
          <div className="flex justify-between py-3 items-center">
            <span className="font-semibold text-gray-800">Description</span>
            {editMode ? (
              <textarea
                className="border rounded px-2 py-1 w-2/3 min-h-[80px] resize-y"
                name="description"
                // value={form.description}
                onChange={handleChange}
                rows={4}
              />
            ) : (
              <span className="text-gray-600">{"-"}</span>
            )}
          </div>
          {/* Social Handles Section */}
          <div className="mt-8">
            <div className="mb-2 text-gray-600 font-medium">Add your social handles below</div>
            <div className="grid grid-cols-2 gap-4">
              <div className="flex items-center bg-gray-100 rounded px-3 py-2">
                <FaYoutube className="mr-2 text-xl text-gray-600" />
                <input
                  type="url"
                  name="youtube"
                  placeholder="https://"
                  className="bg-transparent outline-none w-full"
                //   value={form.youtube}
                  onChange={handleChange}
                  disabled={!editMode}
                />
              </div>
              <div className="flex items-center bg-gray-100 rounded px-3 py-2">
                <FaInstagram className="mr-2 text-xl text-gray-600" />
                <input
                  type="url"
                  name="instagram"
                  placeholder="https://"
                  className="bg-transparent outline-none w-full"
                //   value={form.instagram}
                  onChange={handleChange}
                  disabled={!editMode}
                />
              </div>
              <div className="flex items-center bg-gray-100 rounded px-3 py-2">
                <FaFacebook className="mr-2 text-xl text-gray-600" />
                <input
                  type="url"
                  name="facebook"
                  placeholder="https://"
                  className="bg-transparent outline-none w-full"
                //   value={form.facebook}
                  onChange={handleChange}
                  disabled={!editMode}
                />
              </div>
              <div className="flex items-center bg-gray-100 rounded px-3 py-2">
                <FaTwitter className="mr-2 text-xl text-gray-600" />
                <input
                  type="url"
                  name="twitter"
                  placeholder="https://"
                  className="bg-transparent outline-none w-full"
                //   value={form.twitter}
                  onChange={handleChange}
                  disabled={!editMode}
                />
              </div>
              <div className="flex items-center bg-gray-100 rounded px-3 py-2">
                <FaGithub className="mr-2 text-xl text-gray-600" />
                <input
                  type="url"
                  name="github"
                  placeholder="https://"
                  className="bg-transparent outline-none w-full"
                //   value={form.github}
                  onChange={handleChange}
                  disabled={!editMode}
                />
              </div>
              <div className="flex items-center bg-gray-100 rounded px-3 py-2">
                <FaGlobe className="mr-2 text-xl text-gray-600" />
                <input
                  type="url"
                  name="website"
                  placeholder="https://"
                  className="bg-transparent outline-none w-full"
                //   value={form.website}
                  onChange={handleChange}
                  disabled={!editMode}
                />
              </div>
            </div>
          </div>
        </div>
        {editMode ? (
          <button
            className="mt-6 px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
            onClick={handleSave}
          >
            Save
          </button>
        ) : (
          <button
            className="mt-6 px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
            onClick={handleEdit}
          >
            Edit
          </button>
        )}
      </div>
    </div>
  );
} 