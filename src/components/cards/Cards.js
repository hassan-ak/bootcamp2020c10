import React from 'react'
import { Summary } from '../../apiCalls/Summary'
import { TillDate } from './TillDate'
import { Today } from './Today'

export const Cards = () => {
    return (
        <Summary>
            <div>
            <TillDate></TillDate>
            <Today></Today>
            </div>
            
        </Summary>
    )
}
