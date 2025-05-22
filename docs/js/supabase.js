import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://lrghqupggsruqgxtgsmo.supabase.co'
const supabaseKey = process.env.SUPABASE_KEY || 'tu-clave-anon-public' // Usa la clave anónima para el frontend

export const supabase = createClient(supabaseUrl, supabaseKey, {
auth: {
    persistSession: false,
    autoRefreshToken: false
}
})