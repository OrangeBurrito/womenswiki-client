import type { LayoutServerLoad } from "./$types";

export const load: LayoutServerLoad = async () => {
   let googleAnalytics = import.meta.env.VITE_GOOGLE_ANALYTICS_ID
   
    return {
        googleAnalytics
    }
}