import type { LayoutServerLoad } from "./$types";

export const load: LayoutServerLoad = async () => {
    return {
        google_analytics: import.meta.env.VITE_GOOGLE_ANALYTICS_ID
    }
}