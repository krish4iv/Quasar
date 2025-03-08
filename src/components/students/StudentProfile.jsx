import { useState, useEffect } from "react";
import InstitutionDropdown from "../InstitutionDropdown";
import fetchUUID from "../../components/fetchUuid"; // Importing fetchUUID function

const StudentProfileEditor = ({ onClose }) => {
  const [formData, setFormData] = useState({
    uuid: "",
    first_name: "",
    last_name: "",
    date_of_birth: "",
    role: "student",
    institution_name: "",
    graduation_year: "",
    is_premium: false,
    bio: "",
    skills: [],
    linkedin_url: "",
    location: "",
    degree: "",
  });

  useEffect(() => {
    const fetchAndSetUUID = async () => {
      try {
        const userId = await fetchUUID();
        if (!userId) throw new Error("User ID not found");

        setFormData((prevData) => ({
          ...prevData,
          uuid: userId,
        }));
      } catch (error) {
        console.error("Error fetching UUID:", error);
      }
    };

    fetchAndSetUUID();
  }, []);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value,
    }));

    // console.log("Updated Form Data:", { ...formData, [name]: value });
  };

  const handleInstitutionChange = (selectedInstitution) => {
    setFormData((prevData) => ({
      ...prevData,
      institution_name: selectedInstitution,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (!formData.uuid) {
        throw new Error("User ID (UUID) is required.");
      }

      const response = await fetch("http://192.168.23.55:8000/fquery/changeUser", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      console.log("Sending Data:", JSON.stringify(formData, null, 2));

      if (!response.ok) {
        const result = await response.json();
        throw new Error(result.message || "Failed to update user profile.");
      }

      const result = await response.json();
      console.log("✅ Profile updated successfully!", result);
      onClose();
    } catch (error) {
      console.error("❌ Failed to update profile:", error.message);
      alert(`Failed to update profile: ${error.message}`);
    }
  };

  return (
    <div className="bg-white shadow rounded-xl p-6">
      <h2 className="text-xl font-bold mb-4">Edit Profile</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">First Name</label>
          <input
            type="text"
            name="first_name"
            value={formData.first_name}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-xl"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">Last Name</label>
          <input
            type="text"
            name="last_name"
            value={formData.last_name}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-xl"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">Date of Birth</label>
          <input
            type="date"
            name="date_of_birth"
            value={formData.date_of_birth}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-xl"
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">Role</label>
          <select
            name="role"
            value={formData.role}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-xl"
            required
          >
            <option value="student">Student</option>
            <option value="alumni">Alumni</option>
            <option value="admin">Admin</option>
          </select>
        </div>

        {/* ✅ Institution Dropdown */}
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">Institution Name</label>
          <InstitutionDropdown value={formData.institution_name} onChange={handleInstitutionChange} />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">Graduation Year</label>
          <input
            type="number"
            name="graduation_year"
            value={formData.graduation_year}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-xl"
          />
        </div>

        {/* ✅ Bio Section Added */}
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">Bio</label>
          <textarea
            name="bio"
            value={formData.bio}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-xl"
            placeholder="Tell us about yourself..."
            rows="4"
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">Skills</label>
          <input
            type="text"
            name="skills"
            value={formData.skills.join(", ")}
            onChange={(e) => setFormData({ ...formData, skills: e.target.value.split(", ") })}
            className="w-full px-3 py-2 border rounded-xl"
            placeholder="Comma separated skills (e.g., React, Node.js, Python)"
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">LinkedIn URL</label>
          <input
            type="url"
            name="linkedin_url"
            value={formData.linkedin_url}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-xl"
            placeholder="https://www.linkedin.com/in/your-profile"
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">Location</label>
          <input
            type="text"
            name="location"
            value={formData.location}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-xl"
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">Degree</label>
          <input
            type="text"
            name="degree"
            value={formData.degree}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-xl"
          />
        </div>

        <div className="mb-4 flex items-center">
          <input
            type="checkbox"
            name="is_premium"
            checked={formData.is_premium}
            onChange={handleChange}
            className="mr-2"
          />
          <label className="text-sm font-medium">Premium User</label>
        </div>

        <div className="flex justify-end gap-4">
          <button type="button" className="px-4 py-2 border rounded-xl hover:bg-gray-100" onClick={onClose}>
            Cancel
          </button>
          <button type="submit" className="px-4 py-2 bg-[#C3A1FF] text-white rounded-xl hover:bg-[#a88be0]">
            Save Changes
          </button>
        </div>
      </form>
    </div>
  );
};

export default StudentProfileEditor;
