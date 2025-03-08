import supabase from "../contexts/supabaseclient"; // Import Supabase client

/**
 * Fetches the UUID of the currently logged-in user.
 * @returns {Promise<string|null>} The UUID of the user, or null if not logged in or an error occurs.
 */
const fetchUUID = async () => {
  try {
    // Fetch the current session
    const { data, error } = await supabase.auth.getSession();

    if (error) {
      console.error("Error fetching UUID:", error);
      return null;
    }

    // Return the user's UUID if a session exists
    if (data?.session?.user) {
      const uuid = data.session.user.id;
      console.log("Fetched UUID:", uuid); // Log the UUID to the console
      return uuid;
    }

    // If no session or user, return null
    console.log("No session or user found."); // Log if no session or user is found
    return null;
  } catch (err) {
    console.error("Unexpected error fetching UUID:", err);
    return null;
  }
};

export default fetchUUID;