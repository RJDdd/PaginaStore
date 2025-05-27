import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://lrghqupggsruqgxtgsmo.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxyZ2hxdXBnZ3NydXFneHRnc21vIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDU5NjIyNjEsImV4cCI6MjA2MTUzODI2MX0.iLHOy11kz32yWYN6mWRcCnzUfDnu39Zq698iPDBAbTU'; 

export const supabase = createClient(supabaseUrl, supabaseKey, {
  auth: {
    persistSession: true,
    autoRefreshToken: true,
  },
});
