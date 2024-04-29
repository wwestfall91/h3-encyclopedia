import { Soundbite } from "../models/Soundbite";

export const sortByName = (soundbites: Soundbite[]): Soundbite[] => {
    return soundbites.sort((a, b) =>
      a.people[0].firstName <= b.people[0].firstName ? -1 : 1
    );
}

export const sortByDate = (soundbites: Soundbite[]): Soundbite[] => {
    return soundbites.sort(
      (a, b) => Date.parse(a.episode.date) - Date.parse(b.episode.date)
    );
}