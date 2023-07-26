import { error } from "@sveltejs/kit";
import { getBothThemesAndBackups } from "$lib/wavy.js";

export async function load() {
    const both = await getBothThemesAndBackups();

    if (both) {
        return {
            paths: both,
        };
    } else {
        return error({
            status: 500,
            message: "Internal Server Error",
        });
    }
}
