import React, { useState } from 'react';
import { Text, View, TextInput, Image, TouchableOpacity, Alert } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { FontAwesome } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { Link, useRouter } from 'expo-router';
import { supabase } from '../../lib/supabase';



const SignUp = () => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleSignUp = async () => {
    if (!email || !password) {
      Alert.alert('Error', 'Email and password are required');
      return;
    }

    setLoading(true);
    try {
      const { data, error } = await supabase.auth.signUp({
        email,
        password,
        options: {
          data: {
            name: fullName
          },
        },
      });
      // console.log(data)

      if (error) {
        Alert.alert('Error', error.message);
      } else {
        Alert.alert('Success', 'Account created successfully..');
        setFullName('');
        setEmail('');
        setPassword('');
        router.push('/(auth)/sign-in');
      }
    } catch (error) {
      Alert.alert('Error', 'Something went wrong. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

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
        <Text className="text-3xl font-bold text-white mb-4">Create an Account</Text>

        {/* Input Form */}
        <View className="w-full max-w-md space-y-4">
          {/* Name Input */}
          <View className="flex-row items-center border border-gray-300 bg-white rounded-lg px-4 py-3 my-2">
            <FontAwesome name="user" size={20} color="#4A5568" />
            <TextInput
              placeholder="Full Name"
              placeholderTextColor="#A0AEC0"
              className="flex-1 ml-4 text-gray-800"
              value={fullName}
              onChangeText={setFullName}
            />
          </View>

          {/* Email Input */}
          <View className="flex-row items-center border border-gray-300 bg-white rounded-lg px-4 py-3 my-2">
            <FontAwesome name="envelope" size={20} color="#4A5568" />
            <TextInput
              placeholder="Email Address"
              placeholderTextColor="#A0AEC0"
              className="flex-1 ml-4 text-gray-800"
              keyboardType="email-address"
              value={email}
              onChangeText={setEmail}
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
              value={password}
              onChangeText={setPassword}
            />
          </View>
        </View>

        {/* Sign Up Button */}
        <TouchableOpacity
          className={`w-full max-w-md py-3 rounded-lg mt-6 ${
            loading ? 'bg-gray-400' : 'bg-yellow-500'
          }`}
          disabled={loading}
          onPress={handleSignUp}
        >
          <Text className="text-center text-gray-800 font-semibold text-lg">
            {loading ? 'Signing Up...' : 'Sign Up'}
          </Text>
        </TouchableOpacity>

        {/* Already Have Account */}
        <Text className="text-sm text-white text-center mt-4">
          Already have an account?{' '}
          <Link href={'/(auth)/sign-in'} className="text-yellow-500 font-semibold">
            Login
          </Link>
        </Text>
      </SafeAreaView>
    </LinearGradient>
  );
};

export default SignUp;
