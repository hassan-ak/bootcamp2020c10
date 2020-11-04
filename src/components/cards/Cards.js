import React from 'react'
import { Summary } from '../../apiCalls/Summary'
import { TillDate } from './TillDate'

export const Cards = () => {
    return (
        <Summary>
            <div>
            <TillDate></TillDate>
            </div>
            
        </Summary>
    )
}
