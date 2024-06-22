import { API_URL } from "$lib/consts.js";
import { dark_accent, light_accent, dark_background, light_background } from "$lib/consts.js";

export async function getImages(startColor, endColor) {
    const res = await fetch(
        `${API_URL}waves?layers=6&points=6&wonkyness=3&start_y=0.5&end_y=0.8&start_color=${startColor}&end_color=${endColor}&format=json`
    );

    return await res.json();
}

export async function getLightmodeImages() {
    return await getImages(light_accent, light_background);
}

export async function getDarkmodeImages() {
    return await getImages(dark_accent, dark_background);
}

export async function getBothThemesAndBackups() {
    const [light1, light2, dark1, dark2] = await Promise.all([
        getLightmodeImages(),
        getLightmodeImages(),
        getDarkmodeImages(),
        getDarkmodeImages(),
    ]);

    return {
        light: [light1, light2],
        dark: [dark1, dark2],
    };
}
