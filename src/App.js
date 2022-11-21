import Axios from "axios";
import { useState } from "react";
import ChampionsList from "./components/ChampionsList";

function App() {
  const [champions, setChampions] = useState([]);
  const BASE_URL =
    "https://ddragon.leagueoflegends.com/cdn/10.4.1/data/en_US/champion.json";
  const SKIN_URL =
    "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/";

  async function getChampions() {
    const result = await Axios.get(BASE_URL);
    setChampions(result.data.data);
    console.log(result.data);
  }

  return <></>;
}

export default App;
