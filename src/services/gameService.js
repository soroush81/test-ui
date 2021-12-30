import axios from 'axios'
import http from './httpService'

const apiEndPoint = "/game/";

function gameUrl(gameId, pitId) {
    return `${apiEndPoint}${gameId}/pit/${pitId}`
}
export async function createGame() {
    const { data } = await axios.post('http://localhost:8080/game/');
    console.log(data)
    return data;
}

export async function play(gameId, pitId) {
    return await axios.put(`http://localhost:8080/game/${gameId}/pit/${pitId}`)
}