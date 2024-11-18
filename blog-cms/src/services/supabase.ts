import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://kuuftnscxbpxczchepbs.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imt1dWZ0bnNjeGJweGN6Y2hlcGJzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzE0NjU3MzUsImV4cCI6MjA0NzA0MTczNX0.op8Zy2achgCcArgZ-atUTFNoNE83fNbRiJoj9kpzIUI";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
