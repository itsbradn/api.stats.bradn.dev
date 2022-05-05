import { REST } from '@discordjs/rest';
import { Routes } from 'discord-api-types/v10';

const discordApi = new REST().setToken(process.env.DISCORD_APP_TOKEN || "");

async function getUser(id: string) {
    return await discordApi.get(Routes.user(id));
}

export {
    getUser
}