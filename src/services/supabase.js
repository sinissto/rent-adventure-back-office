import { createClient } from "@supabase/supabase-js";

export const supabaseBucketsUrl =
  "https://hwomlhbltvjvyjobrsns.supabase.co/storage/v1/object/public";

export const supabaseUrl = "https://hwomlhbltvjvyjobrsns.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imh3b21saGJsdHZqdnlqb2Jyc25zIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzQ2ODM2NzMsImV4cCI6MjA1MDI1OTY3M30.EHUkhqATbxRZhLC7Hr0J49na9t-cobN3sVLLpLJcuOU";

const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
