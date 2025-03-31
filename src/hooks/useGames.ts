import apiClient from "@/services/api-client";
import { CanceledError } from "axios";
import { useEffect, useState } from "react";

export interface Game {
  id: number;
  name: string;
  background_image: string
  parent_platforms: {platform:Platform}[]
  metacritic: number
}

export interface Platform {
  id:number
  name:string
  slug: string
}


interface FetchGamesResponse {
  count: number;
  results: Game[];
}

const useGames = () => {
  const [games, setGames] = useState<Game[]>([]);
  const [error, setError] = useState("");
  const [isLaoding, setLoading] = useState(false);


  // For Making Http requests
  useEffect(() => {
    const controller = new AbortController();
    setLoading(true);
    apiClient
      .get<FetchGamesResponse>("/games",{signal: controller.signal})
      .then((res) =>{setGames(
        res.data.results),
        console.log(res.data.results)
        setLoading(false)
      })
      .catch((err) => {
        if(err instanceof CanceledError) return
        setError(err.message)
        setLoading(false)
      });

      return ()=>{ controller.abort()

      }
  },[]);
  return {games,error,isLaoding}
}
export default useGames