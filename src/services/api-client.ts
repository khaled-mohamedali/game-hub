import axios from "axios";



export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params:{
        key:'5ec77abcfad34a67a9888be67f04d7b6',
    }
})