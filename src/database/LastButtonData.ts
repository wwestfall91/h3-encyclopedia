import { createClient } from "@supabase/supabase-js";
import { Database } from "./types/database.types";
const supabaseUrl = "https://jsbepiauztpfxtoyyruu.supabase.co";
//const supabaseKey = process.env.SUPABASE_KEY;
const supabase = createClient<Database>(
  supabaseUrl,
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImpzYmVwaWF1enRwZnh0b3l5cnV1Iiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTcxNDE2NTM0NSwiZXhwIjoyMDI5NzQxMzQ1fQ.rJg_De1E36O6NQBs6XpVdwGnqbAnFYMAZzByHzSQM1k"
);

export async function getLastButtonDate() {
  const response = await supabase
    .from("LastButtonData")
    .select("lastButtonDate")
    .eq("id", 1)
    .single();

  return response.data?.lastButtonDate;
}
