import React, { useEffect } from 'react';
import { Redirect } from 'expo-router';
import { useAuth } from '@/provider/AuthProvider';
import "../global.css";

const Index = () => {
  const { user } = useAuth();

  useEffect(() => {
    if (user) {
      // If the user is authenticated, redirect to the home page
      <Redirect href="/(root)/(tabs)/hellow" />;
    } else {
      // If the user is not authenticated, redirect to the welcome page
      <Redirect href="/(auth)/welcome" />;
    }
  }, [user]);

  // Optionally, you can return a loading state here if needed
  return null; // Render nothing or a loading spinner
};

export default Index;
