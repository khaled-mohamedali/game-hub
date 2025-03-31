import apiClient from "@/services/api-client"
import { useState } from "react"


interface Genre {
    id: number,
    name: string
}

interface FetchGenre{
    count : number
    results : Genre []
}


const useGenre = ()=>{
    const [genres, setGenre] = useState<Genre[]>([]);
    apiClient
    .get<FetchGenre>("/genres")
    .then((result)=>{
        setGenre(result.data.results)
        console.log(result.data.results)
        }
    ).catch((err)=>
        console.log(err.message)
    )
    return  {genres}
}

export default useGenre