import axios from "axios";

const api = axios.create({
    baseURL: "https://api.themoviedb.org/3/",
    params: {
        api_key: "9df278efc17c98277f435ba0fdf28c4d",
        language: "en-US"   
    }
});

; // tv 앞에 '/'를 넣으면 절대경로가 되기 때문에 넣으면 안 됨

export const tvApi = {
    nowPlaying: () => api.get('movie/now_playing'),
    upcoming: () => api.get('movie/upcoming'),
    popular: () => api.get("movie/popular")
}

export const moviesApi = {
    topRated: () => api.get('tv/top_rated'),
    popular: () => api.get("tv/popular"),
    airingToday: () => api.get("tv/airing_today")
}