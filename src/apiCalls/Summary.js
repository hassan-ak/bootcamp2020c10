import React, { useEffect , useState } from 'react';
import GlobalDataContext from './GlobalDataContext'

export const Summary = ({children}) => {

    const [globalData, setGlobalData] = useState({  TotalConfirmed:"loading...",
                                                    TotalRecovered:"loading...",
                                                    TotalDeaths:"loading...",
                                                    NewConfirmed:"loading...",
                                                    NewRecovered:"loading...",
                                                    NewDeaths:"loading...",
                                                })

    // useEffect Hooks to use fetch function
    useEffect(() => {
        async function fetchData() {
            const response = await fetch('https://api.covid19api.com/summary');
            const data = await response.json();
            setGlobalData({ TotalConfirmed: `${data.Global.TotalConfirmed}`,
                            TotalRecovered: `${data.Global.TotalRecovered}`,
                            TotalDeaths: `${data.Global.TotalDeaths}`,
                            NewConfirmed: `${data.Global.NewConfirmed}`,
                            NewRecovered: `${data.Global.NewRecovered}`,
                            NewDeaths: `${data.Global.NewDeaths}`,
            })
        }
        fetchData();
    },[1]);

    return(
        <GlobalDataContext.Provider
            value = {{globalData,
                      }}>
                {children}
        </GlobalDataContext.Provider>
    )
}
