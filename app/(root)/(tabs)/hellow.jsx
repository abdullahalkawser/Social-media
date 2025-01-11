import React from 'react';
import { View, Text, TouchableOpacity, Pressable, Image, TextInput, ScrollView } from 'react-native';
import { useAuth } from '@/provider/AuthProvider';
import { useRouter } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';

const Hellow = () => {
  const { user, setAuth } = useAuth();
  const router = useRouter();

  // Dummy data for posts
  const posts = [
    {
      id: 1,
      imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9Q4dZwFKNJkXqIotgYEfk6ZDHFfF1E_is-w&s',
      caption: 'আমি আছি, তবে প্রবাসে থেকে নাটকের জন্য অপেক্ষা করা কষ্ট তারপর আবার ডিউটি, রান্নাবান্না। সবচেয়ে বেশি কষ্ট নাটকের জন্য অপেক্ষা করা। পর্বের সময় বৃদ্ধি করা জোর দাবি জানাচ্ছি.',
      commentsCount: 3,
      sharesCount: 5,
      repostsCount: 2
    },
    {
      id: 2,
      imageUrl: 'https://img.freepik.com/premium-photo/person-coding-project-laptop_1079150-36836.jpg',
      caption: 'This is a caption for the second post.',
      commentsCount: 1,
      sharesCount: 8,
      repostsCount: 3
    },
    {
      id: 3,
      imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxQa_6CZy_3I1D29J6-f62WKasYakg8HZxOQ&s',
      caption: 'This is a caption for the third post.',
      commentsCount: 6,
      sharesCount: 2,
      repostsCount: 4
    },
    {
      id: 4,
      imageUrl: 'https://d1ng1bucl7w66k.cloudfront.net/ghost-blog/2023/02/Screen-Shot-2023-02-15-at-7.33.17-PM.png',
      caption: 'This is a caption for the fourth post.',
      commentsCount: 12,
      sharesCount: 7,
      repostsCount: 5
    },
    {
      id: 5,
      imageUrl: 'https://via.placeholder.com/150/DC143C/FFFFFF?text=Post+5',
      caption: 'This is a caption for the fifth post.',
      commentsCount: 9,
      sharesCount: 11,
      repostsCount: 6
    },
    {
      id: 6,
      imageUrl: 'https://via.placeholder.com/150/8A2BE2/FFFFFF?text=Post+6',
      caption: 'This is a caption for the sixth post.',
      commentsCount: 4,
      sharesCount: 3,
      repostsCount: 1
    },
    {
      id: 7,
      imageUrl: 'https://via.placeholder.com/150/FF4500/FFFFFF?text=Post+7',
      caption: 'This is a caption for the seventh post.',
      commentsCount: 8,
      sharesCount: 6,
      repostsCount: 2
    },
    {
      id: 8,
      imageUrl: 'https://via.placeholder.com/150/20B2AA/FFFFFF?text=Post+8',
      caption: 'This is a caption for the eighth post.',
      commentsCount: 5,
      sharesCount: 4,
      repostsCount: 3
    },
    {
      id: 9,
      imageUrl: 'https://via.placeholder.com/150/FF69B4/FFFFFF?text=Post+9',
      caption: 'This is a caption for the ninth post.',
      commentsCount: 2,
      sharesCount: 3,
      repostsCount: 7
    },
    {
      id: 10,
      imageUrl: 'https://via.placeholder.com/150/8B4513/FFFFFF?text=Post+10',
      caption: 'This is a caption for the tenth post.',
      commentsCount: 10,
      sharesCount: 9,
      repostsCount: 4
    }
  ];

  return (
    <SafeAreaView style={{ flex: 1 }}>
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

      {/* Scrollable Post Section */}
      <ScrollView contentContainerStyle={{ paddingBottom: 20 }}>

         
        {posts.map((post) => (
          <View key={post.id} className="border-b border-gray-200 p-4">
            {/* Post Image */}
            <Image source={{ uri: post.imageUrl }} style={{ width: '100%', height: 250, borderRadius: 10 }} />

            {/* Post Caption */}
            <Text className="text-lg text-black mt-2">{post.caption}</Text>

            {/* Interactions */}
            <View className="flex-row justify-between mt-4">
              {/* Comments Button */}
              <Pressable className="flex-row items-center space-x-2">
                <Text className="text-blue-500">{post.commentsCount} Comments</Text>
              </Pressable>

              {/* Share Button */}
              <Pressable className="flex-row items-center space-x-2">
                <Text className="text-blue-500">{post.sharesCount} Shares</Text>
              </Pressable>

              {/* Repost Button */}
              <Pressable className="flex-row items-center space-x-2">
                <Text className="text-blue-500">{post.repostsCount} Reposts</Text>
              </Pressable>
            </View>

            {/* Add Comment Input */}
            <View className="mt-4 flex-row items-center border p-2 rounded-lg">
              <TextInput
                placeholder="Add a comment..."
                className="flex-1 text-lg text-black"
                style={{ height: 40 }}
              />
              <TouchableOpacity>
                <Text className="text-blue-500">Post</Text>
              </TouchableOpacity>
            </View>
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

export default Hellow;
