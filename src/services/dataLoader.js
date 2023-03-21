// import axios from "axios";
import { LS_KEYS, LocalStorageService } from "./localStorage";

const DATA_URL = {PATH : "https://rickandmortyapi.com/api/character"};

const sort = (arr) => {
    const result = arr.sort((a,b) => a.name.charCodeAt(0) - b.name.charCodeAt(0));
    return result;
}

class CharacterData{
    static async set(path){
        return fetch(path)
        .then((response) => response.json())
        .then((data) => {
            if(!data.error){
                const resultData = sort(data['results']);
                LocalStorageService.set(LS_KEYS.CHARACTERS, resultData);
                LocalStorageService.set(LS_KEYS.INFO, data['info']);
            } else {
                console.log('sdsd')
                LocalStorageService.remove(LS_KEYS.INFO);
            }
        })
        .catch(() => {
            alert("Sorry, character-services dosn`t work")
        })
    }
}

export { CharacterData, DATA_URL }