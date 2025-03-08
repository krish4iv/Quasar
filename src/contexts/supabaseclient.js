
import { createClient } from '@supabase/supabase-js';

// Replace these with your Supabase URL and public API key
const supabaseUrl = 'https://omitkgkaasetyrejmmhb.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9taXRrZ2thYXNldHlyZWptbWhiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDExNTk2MzYsImV4cCI6MjA1NjczNTYzNn0.GQD_e3tk0Z53z4p-OTKIhfVgdRtsfi2ns3vxGGbM6yU';


// Create and export the Supabase client
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase; // Use default export for simplicity