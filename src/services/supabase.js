import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://yuctseypkwkymypzliwf.supabase.co";
const supabaseKey ="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inl1Y3RzZXlwa3dreW15cHpsaXdmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDYzNDY1NzUsImV4cCI6MjAyMTkyMjU3NX0.ga6_uLGfuw6OPY1NThSHk_vl4HGm8rTxVVMIpbPoagk";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
