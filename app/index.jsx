import React, { useEffect } from 'react';
import { Redirect } from 'expo-router';
import { useAuth } from '@/provider/AuthProvider';
import "../global.css";

const Index = () => {
  // const { user } = useAuth();

  // useEffect(() => {
  //   if (user) {
  //     // If the user is authenticated, redirect to the home page
  //     <Redirect href="/(root)/(tabs)/hellow" />;
  //   } else {
    // <Redirect href="/(auth)/welcome" />;
  //     // If the user is not authenticated, redirect to the welcome page
      
  //   }
  // }, [user]);

  // Optionally, you can return a loading state here if needed
  return     <Redirect href="/(auth)/welcome" />;

};

export default Index;
