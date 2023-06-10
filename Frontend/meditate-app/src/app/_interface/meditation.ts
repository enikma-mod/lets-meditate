import { Howl } from "howler";

export interface Meditation {
    id: any;
    title: string;
    description: string;
    image: string;
    duration: string;
    sounds: string;
    soundFile?: Howl;
  }
  