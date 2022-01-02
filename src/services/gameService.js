import http from './httpService'

const apiEndPoint = "/game/";

function gameUrl(gameId, pitId) {
    return `${apiEndPoint}${gameId}/pit/${pitId}`
}
export async function createGame() {
    const { data } = await http.post(apiEndPoint);
    return data;
}

export async function play(gameId, pitId) {
    return await http.put(gameUrl(gameId, pitId))
}