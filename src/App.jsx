import React, { useEffect, useState } from "react";

const App = () => {
    const[city,setCity]=useState(null)
    const[search,setSearch]=useState("mumbai");
    useEffect(()=>{
        const fetchApi=async()=>{
            const apiUrl=`https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=ffe5aa10091b274c44b6cd8a2bf0b6af`
            const res=await fetch(apiUrl);
            // console.log(res);
            const response=await res.json();
            console.log(response);
            setCity(response.main);
        }
        fetchApi();
    },[search])
    const inputEvent=(event)=>{
        setSearch(event.target.value);
    }
    return (
        <>
            <div className="body_div">
                <div className="center_div">
                    <div className="head">
                        <h1>check whether</h1>
                        <input type="search" onChange={inputEvent} placeholder="enter city namex" />
                    </div>
                    {
                        !city? (<p>no daata found</p>): (<div className="res_div">
                        <h1>{search}</h1>
                        <h2>{city.temp} °Cel</h2>
                        <p>min {city.temp_min} °Cel | max {city.temp_max} °Cel</p>
                    </div>)
                    }
                    
                </div>

            </div>

        </>
    )
}
export default App;