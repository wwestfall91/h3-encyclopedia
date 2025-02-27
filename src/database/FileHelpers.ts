import { Episode } from "../models/Episode.ts";
import { Moment } from "../models/Moments/Moment.tsx";
import { Person } from "../models/Person.ts";
import { Soundbite } from "../models/Soundbite.ts";
import { Topic } from "../models/Topic.ts";

function readFile(filePath: string): Promise<string> {
    return fetch(filePath).then(r => r.text()).then(text => {return text});
}

export async function getAllSoundbites(){
    let soundbites : Soundbite[] = [];
    
    try{
        const data = await readFile("../../soundbites.txt");
    
        const lines = data.split('\n');
        lines.shift();
    
        lines?.map((line : string) => {
            const data = line.split("\t");
            soundbites.push(new Soundbite(data[0], data[1], data[2], data[3] as unknown as number,
                                          data[4], data[5] as unknown as number, 
                                          data[6] == "" ? "Misc" : data[6], 
                                          data[7],  
                                          data[8] == '\r' ? "" : data[8]))
        })
    }
    catch(e){
        console.log(e)
    }
    
    return soundbites;
}

export function getAllPeople(){
    let people : Person[] = [];
    try{
        readFile("../../people.txt").then(x => {
            const lines = x.split('\n');
            lines.shift();
        
            lines?.map((line : string) => {
                const data = line.split("\t");
                people.push(new Person(data[0], data[1], data[2]))
            })
        })
    }
    catch(e){
        console.log(e)
    }


    return people;
}

export async function getAllEpisodes() : Promise<Episode[]>{
    let episodes : Episode[] = [];
    try{
        
        const data = await readFile("../../episodes.txt");
    
        const lines = data.split('\n');
        lines.shift();
    
        lines?.map((line : string) => {
            const data = line.split("\t");
            episodes.push(new Episode(data[0], data[1] as unknown as number, 
                                    data[2], data[3], data[4], data[5] == undefined ? [] : data[5].split(", ")))
        })
    }
    catch(e){
        console.log("ERROR:", e)
    }

    return episodes;
}

export async function getAllMoments() : Promise<Moment[]>{
    let moments : Moment[] = [];

    try{
        const data = await readFile("../../moments.txt");
    
        const lines = data.split('\n');
        lines.shift();
    
        lines?.map((line : string) => {
            const data = line.split("\t");
            let moment = new Moment(data[0], data[1], data[2] as unknown as number, data[4], data[5], data[6], data[7], data[8], data[9])
            moments.push(moment)
        })
    }
    catch(e){
        console.log(e)
    }
    
    return moments;
}

export async function getAllTopics() : Promise<Topic[]>{
    let topics : Topic[] = [];

    try{
        const data = await readFile("../../topics.txt");

        const lines = data.split('\n');
        lines.shift();
    
        lines?.map((line : string) => {
            const data = line.split("\t");
            topics.push(new Topic(data[0], data[1], data[2], data[3]))
        })
    }
    catch(e){
        console.log(e)
    }

    return topics;
}
