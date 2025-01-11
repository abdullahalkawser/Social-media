import React from 'react';
import { Text, View, Alert, TouchableOpacity, Image, Pressable } from 'react-native';
import { useAuth } from '@/provider/AuthProvider';
import { supabase } from '@/lib/supabase';
import { useRouter } from 'expo-router';
import { MaterialIcons } from '@expo/vector-icons'; // For the Edit and Logout icons
import { FontAwesome } from '@expo/vector-icons'; // For the Bio and Address icons

const Profile = () => {
  const { user, setAuth } = useAuth();
  const router = useRouter();

  // Handle logout
  const handleLogout = async () => {
    try {
      const { error } = await supabase.auth.signOut();
      if (error) {
        Alert.alert('Error', `Logout failed: ${error.message}`);
        return;
      }
      setAuth(null);
      Alert.alert('Success', 'You have logged out successfully.', [
        {
          text: 'OK',
          onPress: () => router.push('sign-in'),
        },
      ]);
    } catch (error) {
      Alert.alert('Error', 'Something went wrong during logout.');
    }
  };

  // Placeholder avatar image
  const avatarUri =
    user?.avatar_url ||
    'https://icons.veryicon.com/png/o/miscellaneous/user-avatar/user-avatar-male-5.png';

  return (
    <View className="flex-1 items-center bg-gray-100 p-6 mt-9">
      {/* Header with Back Button and Title */}
      <View className="flex-row items-center mb-6 w-full">
        <TouchableOpacity onPress={() => router.back()} className="mr-4">
          <MaterialIcons name="arrow-back" size={24} color="blue" />
        </TouchableOpacity>
        <Text className="text-3xl font-bold flex-1 text-center">Profile</Text>
      </View>

      {/* Avatar and Edit Button Section */}
      <View className="relative mb-6">
        <Image
          source={{ uri: avatarUri }}
          className="w-40 h-40 rounded-full border-4 border-blue-500"
        />
        {/* Edit Button Positioned at Bottom Right of Avatar */}
        <Pressable
          onPress={() => router.push('editposts')}
          className="absolute bottom-0 right-0 bg-blue-500 p-2 rounded-full"
        >
          <MaterialIcons name="edit" size={24} color="white" />
        </Pressable>
      </View>

      {/* User Info */}
      <Text className="text-2xl font-semibold mb-2">
        Welcome, {user?.user_metadata?.name ? user.user_metadata.name : 'User'}!
      </Text>
      <Text className="text-md text-gray-600 mb-4">Email: {user?.email}</Text>

      {/* Additional Info - Bio, Phone, Address */}
      <View className="w-full bg-white rounded-lg shadow-md p-4 mb-4">
        {/* Bio */}
        <View className="flex-row items-center mb-3">
          <FontAwesome name="info-circle" size={20} color="gray" />
          <Text className="ml-3 text-md text-gray-700">{user?.user_metadata?.bio || 'No bio available'}</Text>
        </View>
        {/* Phone */}
        <View className="flex-row items-center mb-3">
          <MaterialIcons name="phone" size={20} color="gray" />
          <Text className="ml-3 text-md text-gray-700">{user?.user_metadata?.phone || 'No phone number available'}</Text>
        </View>
        {/* Address */}
        <View className="flex-row items-center mb-3">
          <MaterialIcons name="home" size={20} color="gray" />
          <Text className="ml-3 text-md text-gray-700">{user?.user_metadata?.address || 'No address available'}</Text>
        </View>
      </View>

      {/* Logout Button with Icon */}
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
