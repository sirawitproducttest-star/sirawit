// supabase-config.js
const SUPABASE_URL = 'https://syadfbmtewdkexsmfjrp.supabase.co';
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InN5YWRmYm10ZXdka2V4c21manJwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODY4MDI0MTcsImV4cCI6MjEwMjM3ODQxN30.yROrRKWUVre99ZCWgGxaG1IAKnKFaLdtdcqyIO3IhPQ';

// Create Supabase client globally so all files can use it
const _supabase = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

// Also expose as _supabaseGuard for backward compatibility with mahjong_game.html
const _supabaseGuard = _supabase;

// Expose for 10-sec question.html
const _supabase10s = _supabase;
