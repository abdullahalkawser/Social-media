import { supabase } from '@/lib/supabase';





export const getUserData = async (userId) => {
    try {
      const { data, error } = await supabase
        .from('users')
        .select('*') // Select all fields
        .eq('id', userId)
        .single(); // Ensures only one record is returned
  
      if (error) {
        throw error; // Throw the error to handle it below
      }
  
      return data; // Return the retrieved data
    } catch (error) {
      console.error('Error fetching user data:', error.message);
      throw error; // Re-throw the error so the caller can handle it
    }
  };

export const updateUserData = async (userId, data) => {
  try {
    const {  error } = await supabase
      .from('users')
      .update(data) // Pass an object containing the fields to update
      .eq('id', userId); // Update the row where `id` matches

    if (error) {
      throw error;
    }

    return data; // Return the updated data
  } catch (error) {
    console.error('Error updating user data:', error.message);
    throw error;
  }
};

