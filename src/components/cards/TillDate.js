import React, { useContext } from 'react';
import GlobalDataContext from '../../apiCalls/GlobalDataContext';


export const TillDate = () => {
    const context = useContext(GlobalDataContext);
    console.log(context);
    return (
        <div>
            
        </div>
    )
}
