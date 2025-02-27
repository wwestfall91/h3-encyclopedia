import { createClient } from "@supabase/supabase-js";
import { Database } from "./types/database.types.ts";
const supabaseUrl = "https://pcqogrogefantlbvbtaa.supabase.co";
import { EpisodeType } from "../models/enums/EpisodeType.ts";

//const supabaseKey = process.env.SUPABASE_KEY;
const supabase = createClient<Database>(
  supabaseUrl,
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBjcW9ncm9nZWZhbnRsYnZidGFhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzQyMzE4NzUsImV4cCI6MjA0OTgwNzg3NX0.uKPqD0PB12HzUefK0RuxQz8_bYzg8RaDHShZlypYJW8"
);

// export async function getLastButtonDate() {
//   const response = await supabase
//     .from("LastButtonData")
//     .select("lastButtonDate")
//     .eq("id", 1)
//     .single();

//   return response.data?.lastButtonDate;
// }

export async function getAllSoundbites(){
  const soundbites = (await supabase.from("soundbites").select());
  return soundbites;
}

export async function getAllPeople(){
  const people = (await supabase.from("people").select());
  return people;
}

export async function getAllEpisodes(){
  const episodes = (await supabase.from("episodes").select());
  return episodes;
}

export async function getEpisodeByName(episodeName: string){
  const episode = await supabase.from("episodes").select("date").eq("title", episodeName).single();
  return episode;
}

export async function getEpisodeByTypeAndNumber(type: EpisodeType, episodeNumber: number){                                                  
  const episode = await supabase.from("episodes").select().match({
    type: EpisodeType[type], // This format converts enum to string
    number: episodeNumber
  });
  return episode;
}

export async function getSoundbiteByTitle(title: string){
  const soundbite = await supabase.from("soundbites").select().match({title: title});
  return soundbite;
}



export async function getPersonById(personId: string){
  const person = await supabase.from("people").select().match({personId: personId});
  return person;
}

export async function getPersonByName(firstName: string, lastName: string){
  const person = await supabase.from("people").select().match({firstName: firstName, lastName: lastName});
  return person;
}
