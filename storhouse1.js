import { create } from "zustand";

export const countstore12 = create((set, get) => ({
  value1: [],

    fetchdata: async () => {
        const url = 'https://real-time-news-data.p.rapidapi.com/topic-news-by-section?topic=TECHNOLOGY&section=CAQiSkNCQVNNUW9JTDIwdk1EZGpNWFlTQldWdUxVZENHZ0pKVENJT0NBUWFDZ29JTDIwdk1ETnliSFFxQ2hJSUwyMHZNRE55YkhRb0FBKi4IACoqCAoiJENCQVNGUW9JTDIwdk1EZGpNWFlTQldWdUxVZENHZ0pKVENnQVABUAE&limit=500&country=US&lang=en';
        const options = {
            method: 'GET',
            headers: {
                'x-rapidapi-key': '854660b5bemshdd177fb04fbf564p1bb694jsn9571180e5941',
                'x-rapidapi-host': 'real-time-news-data.p.rapidapi.com'
            }
        };

      try {
        const response = await fetch(url, options);
        const result = await response.json();
        console.log(result);
        set({ value1: result.data });
      } catch (error) {
        console.error(error);
      }
    },
}));
