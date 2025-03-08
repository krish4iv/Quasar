import { createContext, useContext, useState, useEffect } from "react";
import supabase from "./supabaseclient"; // Import Supabase client

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchSession = async () => {
      try {
        const { data: { session }, error } = await supabase.auth.getSession();
        if (error) throw error;
        setCurrentUser(session?.user || null);
      } catch (error) {
        console.error("Error fetching session:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchSession();

    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      async (_event, session) => {
        setCurrentUser(session?.user || null);
        setLoading(false);
      }
    );

    return () => {
      subscription?.unsubscribe(); // Correct method for unsubscribing
    };
  }, []);

  const login = async (email, password) => {
    try {
      const { data: { user }, error } = await supabase.auth.signInWithPassword({ email, password });
      if (error) throw error;
      setCurrentUser(user);
      return user;
    } catch (error) {
      console.error("Login error:", error);
      throw error;
    }
  };

  const signup = async (email, password, role, additionalData = {}) => {
    try {
      const { data: { user }, error } = await supabase.auth.signUp({
        email,
        password,
        options: {
          data: { role, ...additionalData },
        },
      });

      if (error) throw error;

      if (user) {
        await supabase.auth.updateUser({ data: { role, ...additionalData } }); // Ensure role and additional data are stored
        setCurrentUser(user);
      }
      return user;
    } catch (error) {
      console.error("Signup error:", error);
      throw error;
    }
  };

  const logout = async () => {
    try {
      const { error } = await supabase.auth.signOut();
      if (error) throw error;
      setCurrentUser(null);
    } catch (error) {
      console.error("Logout error:", error);
      throw error;
    }
  };

  const uploadProfilePhoto = async (file) => {
    if (!currentUser) {
      console.error("No user found for profile upload");
      return;
    }

    try {
      const filePath = `profile-photos/${currentUser.id}/${file.name}`;

      const { data, error } = await supabase.storage
        .from("profile-photos")
        .upload(filePath, file, {
          cacheControl: "3600",
          upsert: true,
        });

      if (error) throw error;

      const { data: publicData } = supabase.storage.from("profile-photos").getPublicUrl(filePath);
      return publicData?.publicUrl || null; // Ensure valid return
    } catch (error) {
      console.error("Error uploading profile photo:", error);
      throw error;
    }
  };

  const updateProfile = async (updatedData) => {
    try {
      const { error } = await supabase
        .from("users")
        .update(updatedData)
        .eq("id", currentUser.id);

      if (error) throw error;

      setCurrentUser((prevUser) => ({ ...prevUser, ...updatedData }));
    } catch (error) {
      console.error("Update profile error:", error);
      throw error;
    }
  };

  const value = {
    currentUser,
    login,
    signup,
    logout,
    updateProfile,
    uploadProfilePhoto,
    loading,
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
};
