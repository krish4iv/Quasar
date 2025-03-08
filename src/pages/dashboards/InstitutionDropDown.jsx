import React, { useState, useEffect } from "react";

const InstitutionDropdown = () => {
  const [institutions, setInstitutions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchInstitutions = async () => {
      try {
        console.log("Fetching institutions...");

        const response = await fetch("http://192.168.23.55:8000/fquery/fetchInstitution", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        console.log("Fetched data:", data);

        if (data && Array.isArray(data.institutions)) {
          setInstitutions(data.institutions);
        } else {
          throw new Error("Invalid data format from API");
        }
      } catch (error) {
        console.error("Error fetching institutions:", error);
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchInstitutions();
  }, []);

  if (loading) {
    return <div>Loading institutions...</div>;
  }

  if (error) {
    return <div style={{ color: "red" }}>Error: {error}</div>;
  }

  return (
    <div>
      <label htmlFor="institution">Select Institution:</label>
      <select id="institution" name="institution">
        <option value="">Select an institution</option>
        {institutions.length > 0 ? (
          institutions.map((institution, index) => (
            <option key={index} value={institution}>
              {institution}
            </option>
          ))
        ) : (
          <option disabled>No institutions available</option>
        )}
      </select>
    </div>
  );
};

export default InstitutionDropdown;
