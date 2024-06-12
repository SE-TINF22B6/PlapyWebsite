// Import Axios
import {AxiosError} from "axios";

const axios = require('axios');

// Base URL for your API
const baseURL = 'http://yourapiurl.com';

// Your API key
const apiKey = 'your-api-key';

// Function to stop the music
export async function stopMusic(guildId: string, userId: string, channelId: string) {
    try {
        const response = await axios.post(`${baseURL}/stop`, {}, {
            headers: {
                guildid: guildId,
                userid: userId,
                channelid: channelId,
                'api-key': apiKey
            },
        });
        console.log(response.data);
    } catch (error) {
        console.error(error.response ? error.response.data : error.message);
    }
}

// Function to skip the current song
export async function skipMusic(guildId: string, userId: string, channelId: string) {
    try {
        const response = await axios.post(`${baseURL}/skip`, {}, {
            headers: {
                guildid: guildId,
                userid: userId,
                channelid: channelId,
                'api-key': apiKey
            },
        });
        console.log(response.data);
    } catch (error) {
        console.error(error.response ? error.response.data : error.message);
    }
}

// Function to change the volume
export async function setVolume(guildId: string, userId: string, channelId: string, volume: number) {
    try {
        const response = await axios.post(`${baseURL}/volume`, {}, {
            headers: {
                guildid: guildId,
                userid: userId,
                channelid: channelId,
                volume: volume.toString(),
                'api-key': apiKey
            },
        });
        console.log(response.data);
    } catch (error) {
        console.error(error.response ? error.response.data : error.message);
    }
}

// Function to play a song
export async function playMusic(guildId : string, userId: string, channelId: string, songName: string) {
    try {
        const response = await axios.post(`${baseURL}/play`, {}, {
            headers: {
                guildid: guildId,
                userid: userId,
                channelid: channelId,
                song: songName,
                'api-key': apiKey
            },
        });
        console.log(response.data);
    } catch (error) {
        console.error(error.response ? error.response.data : error.message);
    }
}

// Example usage:
// stopMusic('your-guild-id', 'your-user-id', 'your-channel-id');
// skipMusic('your-guild-id', 'your-user-id', 'your-channel-id');
// setVolume('your-guild-id', 'your-user-id', 'your-channel-id', 50);
// playMusic('your-guild-id', 'your-user-id', 'your-channel-id', 'song name or URL');
