import React, { useEffect, useState } from "react";
import { getapi } from "../services/api";
import Coin from "./Coin";
import Loading from "./Loading"
import styles from "./coins.module.css"


const Coins = () => {
  const [data, setData] = useState([]);
  const [search , setSearch] = useState("")
  useEffect(() => {
    const fetchapi = async () => {
      const api = await getapi();
      setData(api);
    };
    fetchapi();
  }, []);

const handlename = (event)=> {
          
       setSearch(event.target.value)
}

const searchitems = data.filter(item => item.name.toLowerCase().includes(search.toLowerCase()))

  return (
    <>
     
      {data.length ? (
        <div className={styles.conatiner}>
           <input onChange={handlename} type="text" placeholder="Search" value={search} />
          {searchitems.map((item) => (
            <Coin key={item.id} Coindata={item} />
          ))}
        </div>
      ) : (
        <Loading />
      )}
    </>
  );
};

export default Coins;
