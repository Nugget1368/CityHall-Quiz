import Api from "./api.js";

export default class ApiHandler {
    static async getQuestionsAsync() {
        try {
            const response = await fetch(Api.getApiUrl() + "questions?populate=*");
            const json = await response.json();
            return json.data;
        }
        catch(error) {
            console.log(error);
        }
        return [];
    }

    static getImageUrl = (imageUrl = "") => Api.getBaseUrl() + imageUrl;
    
}