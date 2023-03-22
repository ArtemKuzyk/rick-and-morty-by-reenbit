const LS_KEYS = {
    NAME : "name",
    CHARACTERS : "characters",
    INFO : "info",
    USER : "user"
}

class LocalStorageService {

    static get(key){
        const value = window.localStorage.getItem(key);
        try {
            return JSON.parse(value);
        } catch {
            return value;
        }
    }

    static set(key,value){
        return window.localStorage.setItem(key, JSON.stringify(value));
    }

    static remove(key){
        return window.localStorage.removeItem(key);
    }

    static clear(){
        return window.localStorage.clear();
    }

}

export { LocalStorageService, LS_KEYS }