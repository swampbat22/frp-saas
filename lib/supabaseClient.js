import { createClient } from '@supabase/supabase-js'

// ⛳️ Replace with your actual project URL and anon key from Supabase → Settings → API
const supabaseUrl = 'https://astowlftrpmcqzqymvnd.supabase.co'
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFzdG93bGZ0cnBtY3F6cXltdm5kIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDYyMDk2NzgsImV4cCI6MjA2MTc4NTY3OH0.AxL3hxJfN8jWSt2eqvJhGQKqmykvEwGUyJ4iurATVmQ'

export const supabase = createClient(supabaseUrl, supabaseAnonKey)
