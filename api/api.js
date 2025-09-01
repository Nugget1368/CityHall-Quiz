
export default class Api {
    constructor() {
        API_URL,
        BASE_URL;
    }

    static getApiUrl() {
        this.API_URL = "http://localhost:1337/api/"
        return this.API_URL;
    }
    
    static getBaseUrl() {
        this.BASE_URL = "http://localhost:1337" //Kan behöva uppdateras!
        return this.BASE_URL    ;
    }
}