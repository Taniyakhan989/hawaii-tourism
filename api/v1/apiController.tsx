import axios from "axios";
import { API_URL } from "@/config";

class apiControllerv1 {
    static async getHighlights() {
        const response = await axios.get(`${API_URL}/v1/highlights`);
        return response.data;
    }

    static async getCategories() {
        const response = await axios.get(`${API_URL}/v1/categories`);
        return response.data;
    }

    static async getActivities(activityType: string) {
        const response = await axios.get(`${API_URL}/v1/activities/${activityType}`);
        return response.data;
    }
}

export default apiControllerv1;