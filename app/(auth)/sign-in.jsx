import React from 'react';
import { Text, View, TextInput, Image, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { FontAwesome } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { Link } from 'expo-router';

const SignIn = () => {
  return (
    <LinearGradient
      colors={['#4A90E2', '#9013FE']}
      start={[0, 0]}
      end={[1, 1]}
      style={{ flex: 1 }}
    >
      <SafeAreaView className="flex-1 justify-center items-center px-6">
        {/* Logo Section */}
        <Image 
          source={{ uri: 'https://cdn-icons-png.flaticon.com/512/3135/3135715.png' }} 
          className="w-[150] h-[150] mb-6"
          resizeMode="contain"
        />

        {/* Title */}
        <Text className="text-3xl font-bold text-white mb-4">
 Log In
        </Text>

        {/* Input Form */}
        <View className="w-full max-w-md space-y-4">
          {/* Name Input */}
          <View className="flex-row items-center border border-gray-300 bg-white rounded-lg px-4 py-3 my-2">
            <FontAwesome name="user" size={20} color="#4A5568" />
            <TextInput 
              placeholder="Full Name"
              placeholderTextColor="#A0AEC0"
              className="flex-1 ml-4 text-gray-800"
            />
          </View>

          {/* Email Input */}
          <View className="flex-row items-center border border-gray-300 bg-white rounded-lg px-4 py-3  my-2">
            <FontAwesome name="envelope" size={20} color="#4A5568" />
            <TextInput 
              placeholder="Email Address"
              placeholderTextColor="#A0AEC0"
              className="flex-1 ml-4 text-gray-800"
              keyboardType="email-address"
            />
          </View>

          {/* Password Input */}
          <View className="flex-row items-center border border-gray-300 bg-white rounded-lg px-4 py-3 my-2">
            <FontAwesome name="lock" size={20} color="#4A5568" />
            <TextInput 
              placeholder="Password"
              placeholderTextColor="#A0AEC0"
              className="flex-1 ml-4 text-gray-800"
              secureTextEntry
            />
          </View>
        </View>

        {/* Sign Up Button */}
        <TouchableOpacity className="w-full max-w-md bg-yellow-500 py-3 rounded-lg mt-6">
          <Text className="text-center text-gray-800 font-semibold text-lg">
          Log In
          </Text>
        </TouchableOpacity>

        {/* Already Have Account */}
        <Text className="text-sm text-white text-center mt-4">
          Don't have an account?{' '}
       
                <Link href={'/(auth)/sign-up'} className="text-yellow-500 font-semibold">
                Sign Up
                    </Link>
        </Text>
      </SafeAreaView>
    </LinearGradient>
  );
};

export default SignIn;
