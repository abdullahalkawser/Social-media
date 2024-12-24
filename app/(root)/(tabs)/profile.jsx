import React from 'react';
import { Text, View, Alert, Button } from 'react-native';
import { useAuth } from '@/provider/AuthProvider';
import { supabase } from '@/lib/supabase'; // Ensure the supabase instance is imported correctly
import { useRouter } from 'expo-router';

const Profile = () => {
  const { user, setAuth } = useAuth();
  const router = useRouter(); // Initialize the router
  
  // Handle logout
  const handleLogout = async () => {
    try {
      const { error } = await supabase.auth.signOut();
      if (error) {
        Alert.alert('Error', error.message);
        return;
      }
      setAuth(null); // Clear the user from context
      Alert.alert('Success', 'You have logged out successfully.');
      router.push('/(auth)/sign-in'); // Navigate to the sign-in page
    } catch (error) {
      Alert.alert('Error', 'Something went wrong during logout.');
    }
  };

  return (
    <View style={{ padding: 20 }}>
      <Text style={{ fontSize: 24, fontWeight: 'bold' }}>Profile</Text>
      {user ? (
        <>
          <Text style={{ marginTop: 10 }}>
            Welcome, {user.name ? user.name : 'User'}!
          </Text>
          <Text style={{ marginTop: 5 }}>Email: {user.email}</Text>
          <Button title="Logout" onPress={handleLogout} />
        </>
      ) : (
        <Text style={{ marginTop: 10 }}>You are not logged in.</Text>
      )}
    </View>
  );
};

export default Profile;
