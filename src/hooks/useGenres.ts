import apiClient from "@/services/api-client"
import { CanceledError } from "axios"
import { useEffect, useState } from "react"


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
    const [error, setError] = useState('');
    const [isLoading, setLoading] = useState(false)

    useEffect(()=>{
        const controller = new AbortController();
        setLoading(true)
        apiClient
        .get<FetchGenre>("/genres",{signal: controller.signal})
        .then((result)=>{
            setGenre(result.data.results)
            setLoading(false)
            }
        ).catch((err)=>{ 
            if(err instanceof CanceledError) return
            setError(err.message)
            setLoading(false)
        }
        )
        return ()=>controller.abort()
    },[]);
    return  {genres,error,isLoading}
}

export default useGenre