export function init() {
}

export function log(error) {
    console.error(error)
}

const logService = { init, log };
export default logService;
