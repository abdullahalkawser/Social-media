import React, { useEffect, useState } from 'react';
import { Text, View, Alert, TouchableOpacity, Image, Pressable, ActivityIndicator } from 'react-native';
import { useAuth } from '@/provider/AuthProvider';
import { useRouter } from 'expo-router';
import { MaterialIcons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { supabase } from './../../../lib/supabase';
import { getUserData } from '../../api/userService';

const Profile = () => {
  const { user, setAuth } = useAuth();
  const router = useRouter();
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);


  useEffect(() => {
    const fetchUserData = async () => {
      try {
        if (user?.id) {
          const data = await getUserData(user.id); // Use the helper function
          setUserData(data);
        }
      } catch (error) {
        console.error('Error fetching user data:', error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchUserData();
  }, [user]);

  // Handle logout
  const handleLogout = async () => {
    try {
      const { error } = await supabase.auth.signOut();
      if (error) throw error;

      setAuth(null);
      Alert.alert('Success', 'You have logged out successfully.', [
        {
          text: 'OK',
          onPress: () => router.push('sign-in'),
        },
      ]);
    } catch (err) {
      console.error('Logout Error:', err.message);
      Alert.alert('Error', `Logout failed: ${err.message}`);
    }
  };

  // Placeholder avatar image
  const avatarUri =
    userData?.avatar_url ||
    'https://icons.veryicon.com/png/o/miscellaneous/user-avatar/user-avatar-male-5.png';

  if (loading) {
    return (
      <View className="flex-1 justify-center items-center bg-gray-100">
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  return (
    <View className="flex-1 items-center bg-gray-100 p-6 mt-9">
      {/* Header */}
      <View className="flex-row items-center mb-6 w-full">
        <TouchableOpacity onPress={() => router.back()} className="mr-4">
          <MaterialIcons name="arrow-back" size={24} color="blue" />
        </TouchableOpacity>
        <Text className="text-3xl font-bold flex-1 text-center">Profile</Text>
      </View>

      {/* Avatar and Edit Button */}
      <View className="relative mb-6">
        <Image
          source={{ uri: avatarUri }}
          className="w-40 h-40 rounded-full border-4 border-blue-500"
        />
        <Pressable
          onPress={() => router.push('editposts')}
          className="absolute bottom-0 right-0 bg-blue-500 p-2 rounded-full"
        >
          <MaterialIcons name="edit" size={24} color="white" />
        </Pressable>
      </View>

      {/* User Info */}
      <Text className="text-2xl font-semibold mb-2">
        Welcome, {userData?.name || 'User'}!
      </Text>
      <Text className="text-md text-gray-600 mb-4">Email: {userData?.email || user?.email}</Text>

      {/* Additional Info */}
      <View className="w-full bg-white rounded-lg shadow-md p-4 mb-4">
        <View className="flex-row items-center mb-3">
          <FontAwesome name="info-circle" size={20} color="gray" />
          <Text className="ml-3 text-md text-gray-700">{userData?.bio || 'No bio available'}</Text>
        </View>
        <View className="flex-row items-center mb-3">
          <MaterialIcons name="phone" size={20} color="gray" />
          <Text className="ml-3 text-md text-gray-700">{userData?.phone || 'No phone number available'}</Text>
        </View>
        <View className="flex-row items-center mb-3">
          <MaterialIcons name="home" size={20} color="gray" />
          <Text className="ml-3 text-md text-gray-700">{userData?.address || 'No address available'}</Text>
        </View>
      </View>

      {/* Logout Button */}
      <TouchableOpacity
        onPress={handleLogout}
        className="flex-row items-center bg-red-500 px-4 py-2 rounded-full"
      >
        <MaterialIcons name="exit-to-app" size={20} color="white" />
        <Text className="text-white font-semibold ml-2">Logout</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Profile;
