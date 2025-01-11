import React, { useEffect, useState } from 'react';
import { Text, View, TextInput, TouchableOpacity, Image, Pressable, Alert, ActivityIndicator } from 'react-native';
import { useRouter } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import { MaterialIcons } from '@expo/vector-icons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { useAuth } from '@/provider/AuthProvider';

const Edit = () => {
  const router = useRouter();
  const { user: currentUser } = useAuth();
  const [isLoading, setIsLoading] = useState(false); // State to track loading status

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    address: '',
    bio: '',
  });

  useEffect(() => {
    if (currentUser) {
      setFormData({
        name: currentUser.name,
        phone: currentUser.phone || '',
        address: currentUser.address || '',
        bio: currentUser.bio || '',
      });
    }
  }, [currentUser]);

  const handleGoBack = () => {
    router.back();
  };

  const handleInputChange = (field, value) => {
    setFormData({ ...formData, [field]: value });
  };

  const handleSubmit = async () => {
    const { name, phone, address } = formData; // Destructure directly from formData

    // Check if required fields are filled
    if (!name || !phone || !address) {
      Alert.alert('Please fill in all fields');
      return; // Prevent submission if any field is empty
    }

  

    setIsLoading(true); // Set loading state to true

    // You can now proceed with form submission logic, like an API call to update the user
    const userdata = { ...formData };
    console.log('Form data:', userdata);

    // Simulate an API call with a timeout
    setTimeout(() => {
      setIsLoading(false); // Set loading state to false after the call
      Alert.alert('Profile updated successfully');
      router.back(); // Navigate back after successful update
    }, 2000); // Simulate a 2-second delay
  };

  // Placeholder avatar image
  const avatarUri = currentUser?.avatar || 'https://icons.veryicon.com/png/o/miscellaneous/user-avatar/user-avatar-male-5.png';

  return (
    <SafeAreaView className="flex-1 p-4">
      <View className="flex-1">
        {/* Header */}
        <View className="flex-row items-center mb-6">
          <TouchableOpacity onPress={handleGoBack} className="flex-row items-center mr-2">
            <MaterialIcons name="arrow-back" size={24} color="blue" />
          </TouchableOpacity>
          <Text className="text-3xl font-bold flex-1 text-center">Edit Profile</Text>
        </View>

        {/* Avatar */}
        <View className="flex items-center mb-6">
          <View className="relative">
            <Image
              source={{ uri: avatarUri }}
              className="w-40 h-40 rounded-full border-4 border-blue-500"
            />
            {/* Edit Button Positioned at Bottom Right of Avatar */}
            <Pressable
              onPress={() => router.push('editposts')}
              className="absolute bottom-0 right-0 bg-white p-2 rounded-full"
            >
              <FontAwesome name="camera" size={24} color="blue" />
            </Pressable>
          </View>
        </View>

        {/* Form Fields */}
        <View className="space-y-6">
          {/* Name Input */}
          <View className="flex-row items-center border p-2 rounded-lg mb-4 bg-gray-50">
            <MaterialIcons name="person" size={26} color="#4A90E2" className="mr-4" />
            <TextInput
              value={formData.name}
              onChangeText={(text) => handleInputChange('name', text)}
              placeholder="Full Name"
              placeholderTextColor="black"
              className="flex-1 text-lg text-gray-700"
            />
          </View>

          {/* Phone Number Input */}
          <View className="flex-row items-center border p-2 rounded-lg mb-4 bg-gray-50">
            <MaterialIcons name="phone" size={26} color="#4A90E2" className="mr-4" />
            <TextInput
              value={formData.phone}
              onChangeText={(text) => handleInputChange('phone', text)}
              placeholder="Phone Number"
              placeholderTextColor="black"
              keyboardType="phone-pad"
              className="flex-1 text-lg text-gray-700"
            />
          </View>

          {/* Address Input */}
          <View className="flex-row items-center border p-2 rounded-lg mb-4 bg-white">
            <MaterialIcons name="home" size={26} color="#4A90E2" className="mr-4" />
            <TextInput
              value={formData.address}
              onChangeText={(text) => handleInputChange('address', text)}
              placeholder="Address"
              placeholderTextColor="black"
              className="flex-1 text-lg text-orange-700"
            />
          </View>

          {/* Bio Input */}
          <View className="flex-row items-start p-4 border rounded-lg mb-4 bg-white">
            <MaterialIcons name="info" size={26} color="#4A90E2" className="mr-2" />
            <TextInput
              value={formData.bio}
              onChangeText={(text) => handleInputChange('bio', text)}
              placeholder="Enter your Bio"
              placeholderTextColor="black"
              multiline
              numberOfLines={6}
              className="flex-1 text-lg text-black"
              style={{ minHeight: 120, textAlignVertical: 'top' }} // Align text to top
            />
          </View>

          {/* Update Button */}
          <TouchableOpacity
            onPress={handleSubmit}
            className="bg-blue-500 p-4 rounded-lg items-center mt-6 shadow-lg"
          >
            {isLoading ? (
              <ActivityIndicator size="small" color="white" />
            ) : (
              <Text className="text-white text-xl font-bold">Update</Text>
            )}
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Edit;
