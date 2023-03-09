// import axios from "axios";
import { LS_KEYS, LocalStorageService } from "./localStorage";

const DATA_URL = {PATH : "https://rickandmortyapi.com/api/character"};

class CharacterData{
    static async set(path){
        return fetch(path)
        .then((response) => response.json())
        .then((data) => data['results'])
        .then((result) => LocalStorageService.set(LS_KEYS.CHARACTERS, result))
        .catch(() => alert("Sorry, character-services dosn`t work"))
    }
}

export { CharacterData, DATA_URL }