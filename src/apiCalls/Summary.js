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
                })
            }
            fetchData();
        }
        
    },[props]);

    return(
        <GlobalDataContext.Provider
            value = {{globalData,
                      }}>
                {children}
        </GlobalDataContext.Provider>
    )
}
