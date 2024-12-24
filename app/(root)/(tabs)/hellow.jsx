import React from 'react';
import { View, Text, TouchableOpacity, Alert, Pressable, Image } from 'react-native';
import { useAuth } from '@/provider/AuthProvider';
import { supabase } from '@/lib/supabase';
import { useRouter } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';

const Hellow = () => {
  const { user, setAuth } = useAuth();
  const router = useRouter(); // Initialize the router

  // Handle logout


  return (
<SafeAreaView >
      <View className="flex-row justify-between items-center p-4 ">
        {/* Header */}
        <Text className="text-4xl font-bold text-black">Link Up</Text>

        {/* Menu Options */}
        <View className="flex-row space-x-4">
          <Pressable onPress={() => router.push('notification')} className="p-4">
            <Text className="text-2xl text-black">🔔</Text>
          </Pressable>
          <Pressable onPress={() => router.push('newpost')} className="p-4">
            <Text className="text-2xl text-black">➕</Text>
          </Pressable>
          <Pressable onPress={() => router.push('profile')} className="p-3 flex-row items-center space-x-2">
            {/* Avatar Image */}
            <Image
              source={{ uri: 'https://cdn-icons-png.flaticon.com/512/6858/6858504.png' }} // Replace with actual image URL or local source
              style={{ width: 40, height: 40, borderRadius: 20 }} // Adjust size and border radius as needed
            />
          </Pressable>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Hellow;
