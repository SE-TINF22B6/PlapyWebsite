// Import Axios
import axios, {AxiosError} from 'axios';

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

// Function to stop the music
export async function stopMusic() {
    try {
        const response = await apiClient.post('/stop');
        console.log(response.data);
    } catch (error) {
        console.error(error.response ? error.response.data : error.message);
    }
}

// Function to skip the current song
export async function skipMusic() {
    try {
        const response = await apiClient.post('/skip');
        console.log(response.data);
    } catch (error) {
        console.error(error.response ? error.response.data : error.message);
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
        console.error(error.response ? error.response.data : error.message);
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
        console.error(error.response ? error.response.data : error.message);
    }
}
