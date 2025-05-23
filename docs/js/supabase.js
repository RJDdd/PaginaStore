import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://lrghqupggsruqgxtgsmo.supabase.co';
const supabaseKey = 'tu-clave-anon-public'; // Reemplaza con tu clave real

export const supabase = createClient(supabaseUrl, supabaseKey, {
  auth: {
    persistSession: true,
    autoRefreshToken: true,
  },
});
