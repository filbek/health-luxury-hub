import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://cfwwcxqpyxktikizjjxx.supabase.co'
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNmd3djeHFweXhrdGlraXpqanh4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDcwNDUyOTcsImV4cCI6MjA2MjYyMTI5N30.YUD6Uwxyd38xXs7R60UC-199FE52VYkqOZSXHtrBiH0'

export const supabase = createClient(supabaseUrl, supabaseAnonKey)
