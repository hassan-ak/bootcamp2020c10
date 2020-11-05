import React, { useEffect , useState } from 'react';
import GlobalDataContext from './GlobalDataContext'

export const Summary = ({children,props}) => {

    const [globalData, setGlobalData] = useState({  TotalConfirmed:0,
        TotalRecovered:0,
        TotalDeaths:0,
        NewConfirmed:0,
        NewRecovered:0,
        NewDeaths:0,
        Dated:0,
        Country:"Global",
    })

    const [totalData, setTotalData] = useState({  confirmed:"",
        recovered:"",
        deaths:"",
        Dated:"",
    })

    const [totalDataWorld, setTotalDataWorld] = useState({  confirmed:"",
        recovered:"",
        deaths:"",
        Dated:"",
    })
    
    // useEffect Hooks to use fetch Data
    useEffect(() => {
        if (props === "global") {
            async function fetchData() {
                const response = await fetch('https://api.covid19api.com/summary');
                const data = await response.json();
                setGlobalData({ TotalConfirmed: `${data.Global.TotalConfirmed}`,
                                TotalRecovered: `${data.Global.TotalRecovered}`,
                                TotalDeaths: `${data.Global.TotalDeaths}`,
                                NewConfirmed: `${data.Global.NewConfirmed}`,
                                NewRecovered: `${data.Global.NewRecovered}`,
                                NewDeaths: `${data.Global.NewDeaths}`,
                                Dated: `${data.Date}`,
                                Country:"Global"
                })
            }
            fetchData();
        } else {
            async function fetchData() {
                const response = await fetch('https://api.covid19api.com/summary');
                const data = await response.json();
                const countries = await data.Countries;
                let selectedDataSet = await countries.filter(item => item.Slug === props);

                setGlobalData({ TotalConfirmed: `${selectedDataSet[0].TotalConfirmed}`,
                                TotalRecovered: `${selectedDataSet[0].TotalRecovered}`,
                                TotalDeaths: `${selectedDataSet[0].TotalDeaths}`,
                                NewConfirmed: `${selectedDataSet[0].NewConfirmed}`,
                                NewRecovered: `${selectedDataSet[0].NewRecovered}`,
                                NewDeaths: `${selectedDataSet[0].NewDeaths}`,
                                Dated: `${selectedDataSet[0].Date}`,
                                Country:`${selectedDataSet[0].Country}`
                })
            }
            fetchData();
        }
        
    },[props]);


    // function to fetch data from day one

    useEffect(() => {
        if (props === "global") {
            
            async function fetchAllData() {
                const response = await fetch(`https://covid19.mathdro.id/api/daily`);
                const data = await response.json();
                const infected = (data.map(item=>(item.totalConfirmed)));
                const recover = (data.map(item=>(item.totalRecovered)));
                const death = (data.map(item=>(item.deaths.total)));
                const date = (data.map((item=>(item.reportDate))));
                setTotalDataWorld({ confirmed: `${infected}`,
                                    recovered: `${recover}`,
                                    deaths: `${death}`,
                                    Dated:`${date}`
                })
            }

        fetchAllData();
        }else{
            async function fetchAllData() {
                const response = await fetch(`https://api.covid19api.com/total/country/${props}`);
                const data = await response.json();
                const infected = (data.map(item=>(item.Confirmed)));
                const recover = (data.map(item=>(item.Recovered)));
                const death = (data.map(item=>(item.Deaths)));
                const date = (data.map((item=>(item.Date))));
                setTotalData({ confirmed: `${infected}`,
                               recovered: `${recover}`,
                               deaths: `${death}`,
                               Dated:`${date}`
                })
            }
        fetchAllData();
        }
    }, [props]);


    return(
        <GlobalDataContext.Provider
            value = {{globalData,
                      totalData,
                      totalDataWorld,
                      }}>
                {children}
        </GlobalDataContext.Provider>
    )
}
