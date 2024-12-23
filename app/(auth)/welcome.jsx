import React from 'react';
import { Text, View, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Link } from 'expo-router';
import { LinearGradient } from 'expo-linear-gradient';

const Welcome = () => {
  return (
        <LinearGradient
          colors={['#4A90E2', '#9013FE']}
          start={[0, 0]}
          end={[1, 1]}
          style={{ flex: 1 }}
        >
    <SafeAreaView className="flex-1 justify-center items-center p-6 bg-gradient-to-r from-blue-500 to-indigo-600">
      <View className="flex-1 justify-center items-center space-y-10 w-full max-w-md">

        {/* Image Section */}
<View className= 'w-auto'>
<Image 
          source={{ uri: 'https://animationexplainers.com/wp-content/uploads/2022/03/Animation-Artist.jpg' }} 
          className="w-[400] h-[400] rounded-full  border-4 border-white mb-6"
        />
</View>

        {/* Title */}
        <Text className="text-5xl font-extrabold text-center text-white ">
          Link Up
        </Text>

        {/* Description */}
        <Text className="text-lg text-center text-white  px-6">
        Social Media is a collection of online platformsA social networking site for connecting with friends, family, 
        </Text>

        {/* Get Started Button */}
        <Link 
href={'/(auth)/sign-up'}
          className="w-full py-4 bg-yellow-500  text-2xl text-center rounded-lg text-white  shadow-lg mt-10"
        >
          Get Started
        </Link>

        {/* Already Have Account */}
        <Text className="text-sm text-center text-white  mt-4">
          Already have an account?{' '}
          <Link href={'/(auth)/sign-in'} className="text-white  font-semibold">
            Log In
          </Link>
        </Text>
      </View>
    </SafeAreaView>
    </LinearGradient>
  );
};

export default Welcome;
