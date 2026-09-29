import React, { createContext, useState, ReactNode, useContext, useEffect, useCallback, useRef } from 'react';
import { Soundbite } from '../models/Soundbite';
import * as fileHelpers from "../database/FileHelpers"
import { Episode } from '../models/Episode';
import { Person } from '../models/Person';
import { Moment } from '../models/Moments/Moment';
import { Topic } from '../models/Topic';

// Define the context value type
interface DataContextType {
  soundbites: Soundbite[];
  people: Person[];
  episodes: Episode[];
  moments: Moment[];
  loadMoments: () => Promise<Moment[]>;
  topics: Topic[];
}

// Create the context with an initial value (can be null initially)
const AppContext = createContext<DataContextType | undefined>(undefined);

// Define the provider props
interface Props {
  children: ReactNode;
}

// Create the provider component
export const DataProvider: React.FC<Props> = ({ children }) => {
    const [soundbites, setSoundbites] = useState<Soundbite[]>([]);
    const [people, setPeople] = useState<Person[]>([]);
    const [episodes, setEpisodes] = useState<Episode[]>([]);
    const [moments, setMoments] = useState<Moment[]>([]);
    const [topics, setTopics] = useState<Topic[]>([]);
    const momentsRequest = useRef<Promise<Moment[]> | null>(null);

    const loadMoments = useCallback(async () => {
      if (!momentsRequest.current) {
        momentsRequest.current = fileHelpers.getAllMoments();
      }

      const loadedMoments = await momentsRequest.current;
      setMoments(loadedMoments);
      return loadedMoments;
    }, []);

    useEffect(() => {
        setSoundbitesFromFile();
        setEpisodesFromFile();
        setPeopleFromFile();
        void loadMoments();
        setTopicsFromFile();
    }, [loadMoments]);

    const setSoundbitesFromFile = async () => {
        setSoundbites(await fileHelpers.getAllSoundbites());
    }

    const setEpisodesFromFile = async () => {
        setEpisodes(await fileHelpers.getAllEpisodes());
    }

    const setPeopleFromFile = async () => {
        setPeople(await fileHelpers.getAllPeople());
    }

    const setTopicsFromFile = async () => {
      setTopics(await fileHelpers.getAllTopics());
    }

    return (
        <AppContext.Provider value={{soundbites, episodes, people, moments, loadMoments, topics}}>
          {children}
        </AppContext.Provider>
    );
};

// Create a custom hook for easier usage
export const useDataContext = (): DataContextType => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useAppContext must be used within an AppProvider');
  }
  return context;
};

export default DataProvider;