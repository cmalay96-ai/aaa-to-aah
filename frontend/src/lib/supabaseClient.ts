export const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://tbdmuznvuezgjjvlorhg.supabase.co/rest/v1/';
export const SUPABASE_ANON_KEY = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRiZG11em52dWV6Z2pqdmxvcmhnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Nzg4NjM1NTMsImV4cCI6MjA5NDQzOTU1M30.L83DhdnmRNHovfubhbJUxqAlMOrkaYKoq-ET_hOwRXw';

export const supabaseFetch = async (endpoint: string, options: RequestInit = {}) => {
  const headers = {
    'apikey': SUPABASE_ANON_KEY,
    'Authorization': `Bearer ${SUPABASE_ANON_KEY}`,
    'Content-Type': 'application/json',
    'Prefer': 'return=representation', // returns the inserted/updated row
    ...options.headers,
  };

  const response = await fetch(`${SUPABASE_URL}${endpoint}`, {
    ...options,
    headers,
  });

  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.message || 'Supabase request failed');
  }

  // Handle empty responses (like from DELETE)
  if (response.status === 204) {
    return null;
  }

  return response.json();
};
