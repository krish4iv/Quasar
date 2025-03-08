import { useState } from "react";
import { useAuth } from "../../contexts/AuthContext";

const StudentProfileEditor = ({ onClose }) => {
  const { currentUser, updateProfile } = useAuth();
  const [formData, setFormData] = useState({
    firstName: currentUser?.firstName || "",
    lastName: currentUser?.lastName || "",
    dateOfBirth: currentUser?.dateOfBirth || "",
    role: currentUser?.role || "",
    institutionName: currentUser?.institutionName || "",
    graduationYear: currentUser?.graduationYear || "",
    bio: currentUser?.bio || "",
    profileImage: currentUser?.profileImage || "",
  });
  const [selectedFile, setSelectedFile] = useState(null); // State to store the selected file

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setSelectedFile(file);

      // Preview the selected image
      const reader = new FileReader();
      reader.onloadend = () => {
        setFormData((prevData) => ({
          ...prevData,
          profileImage: reader.result, // Set the image URL in formData
        }));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await updateProfile(formData); // Update the profile
      onClose(); // Close the editor after saving
    } catch (error) {
      console.error("Failed to update profile:", error);
    }
  };

  return (
    <div className="bg-white shadow rounded-xl p-6">
      <h2 className="text-xl font-bold mb-4">Edit Profile</h2>
      <form onSubmit={handleSubmit}>
        {/* Profile Photo Upload */}
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">Profile Photo</label>
          <div className="flex items-center gap-4">
            <div className="h-24 w-24 rounded-full overflow-hidden">
              <img
                src={formData.profileImage || "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&q=80"}
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </div>
            <input
              type="file"
              accept="image/*"
              onChange={handleFileChange}
              className="w-full px-3 py-2 border rounded-xl"
            />
          </div>
        </div>

        {/* First Name */}
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">First Name</label>
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-xl"
            required
          />
        </div>

        {/* Last Name */}
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">Last Name</label>
          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-xl"
            required
          />
        </div>

        {/* Date of Birth */}
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">Date of Birth</label>
          <input
            type="date"
            name="dateOfBirth"
            value={formData.dateOfBirth}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-xl"
            required
          />
        </div>

        {/* Role */}
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">Role</label>
          <input
            type="text"
            name="role"
            value={formData.role}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-xl"
            required
          />
        </div>

        {/* Institution Name */}
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">Institution Name</label>
          <input
            type="text"
            name="institutionName"
            value={formData.institutionName}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-xl"
            required
          />
        </div>

        {/* Graduation Year */}
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">Graduation Year</label>
          <input
            type="number"
            name="graduationYear"
            value={formData.graduationYear}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-xl"
            required
          />
        </div>

        {/* Bio */}
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">Bio</label>
          <textarea
            name="bio"
            value={formData.bio}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-xl"
            rows="4"
            required
          />
        </div>

        {/* Buttons */}
        <div className="flex justify-end gap-4">
          <button
            type="button"
            className="px-4 py-2 border rounded-xl hover:bg-gray-100"
            onClick={onClose}
          >
            Cancel
          </button>
          <button
            type="submit"
            className="px-4 py-2 bg-[#C3A1FF] text-white rounded-xl hover:bg-[#a88be0]"
          >
            Save Changes
          </button>
        </div>
      </form>
    </div>
  );
};

export default StudentProfileEditor;