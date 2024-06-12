// Import Axios
import axios, {AxiosError} from 'axios';

export class ApiConfig {
    baseUrl: string = "http://plapy.studio";
    userId: string = "289527965484711939";
    channelId: string = "832971631466250260";
    guildId: string = "598975996871311402";
    apiKey: string = "d34da5660edde044538068cf58c63fded0bcc920";
}

let nowPlaying: string = "Nothing Playing";
let thumbnailUrl: string = "https://static.vecteezy.com/system/resources/previews/027/508/193/original/pause-button-icon-on-transparent-background-stop-icon-button-free-png.png";

export function getNowPlayingTitle(){
    return nowPlaying;
}
export function getNowPlayingThumbnail(){
    return thumbnailUrl;
}



let apiClient = axios.create({
    baseURL: "",
    headers: {
        apiKey: "",
        guildid: "",
        userid: "",
        channelid: "",
    },
})
// Create an Axios instance
export const updateApiClient = (baseUrl: string, userId: string, channelId: string, guildId: string, apiKey: string) => {
    apiClient = axios.create({
    baseURL: baseUrl,
    headers: {
        apiKey: apiKey,
        guildid: guildId,
        userid: userId,
        channelid: channelId,
    },
});
}

export async function getNowPlaying(guildId: string) {
    try {
        const response = await apiClient.get('/now-playing/' + guildId);
        console.log(response.data);
        nowPlaying = response.data.title;
        let video_id = response.data.url.split('v=')[1];
        let ampersandPosition = video_id.indexOf('&');
        if (ampersandPosition !== -1) {
            video_id = video_id.substring(0, ampersandPosition);
        }
        thumbnailUrl = 'https://img.youtube.com/vi/' + video_id + '/0.jpg';
    } catch (error) {
        if (axios.isAxiosError(error)) {
            console.error(error.response ? error.response.data : error.message);
        } else {
            console.error("Unexpected error", error);
        }
    }


}

// Function to stop the music
export async function stopMusic() {
    try {
        const response = await apiClient.post('/stop');
        console.log(response.data);
    } catch (error) {
        if (axios.isAxiosError(error)) {
            console.error(error.response ? error.response.data : error.message);
        } else {
            console.error("Unexpected error", error);
        }
    }
}

// Function to skip the current song
export async function skipMusic() {
    try {
        const response = await apiClient.post('/skip');
        console.log(response.data);
    } catch (error) {
        if (axios.isAxiosError(error)) {
            console.error(error.response ? error.response.data : error.message);
        } else {
            console.error("Unexpected error", error);
        }
    }
}

// Function to change the volume
export async function setVolume(volume: number) {
    try {
        const response = await apiClient.post('/volume', {}, {
            headers: {
                volume: volume,
            },
        });
        console.log(response.data);
    } catch (error) {
        if (axios.isAxiosError(error)) {
            console.error(error.response ? error.response.data : error.message);
        } else {
            console.error("Unexpected error", error);
        }
    }
}

// Function to play a song
export async function playMusic(songName: string) {
    try {
        const response = await apiClient.post('/play', {}, {
            headers: {
                song: songName,
            },
        });
        console.log(response.data);
    } catch (error) {
        if (axios.isAxiosError(error)) {
            console.error(error.response ? error.response.data : error.message);
        } else {
            console.error("Unexpected error", error);
        }
    }
}
