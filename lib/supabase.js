import { AppState } from 'react-native';
import 'react-native-url-polyfill/auto';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://mvmhasxgzyhqqhuevzkj.supabase.co'
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im12bWhhc3hnenlocXFodWV2emtqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzQ5OTA1MTcsImV4cCI6MjA1MDU2NjUxN30.KwNS0DauGf-_M0ZDn9e1zibxeBj3LfwcWNYSL4dNCjY'


export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    storage: AsyncStorage,
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: false,
  },
});

const handleAppStateChange = (state) => {
  if (state === 'active') {
    supabase.auth.startAutoRefresh();
  } else {
    supabase.auth.stopAutoRefresh();
  }
};

// Add AppState listener
AppState.addEventListener('change', handleAppStateChange);

// Cleanup listener if needed (e.g., inside a React component's useEffect)
export const removeAppStateListener = () => {
  AppState.removeEventListener('change', handleAppStateChange);
};
