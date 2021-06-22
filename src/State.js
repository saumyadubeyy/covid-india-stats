import React, {useState, useEffect} from 'react'
import './State.css'

const url = "https://api.covid19india.org/data.json"
   
const State = () => {
const [data, setData] = useState([])

const getCovidData = async () => {
    try {
        const response = await fetch(url)
        const covidData = await response.json()
        setData(covidData.statewise)
    } catch (error) {
        console.log(error)
    }   
}

const result = data.filter((obj, ind) => ind !== 0) ;
    

useEffect(() => {
    getCovidData()
    
}, [])


return (
    <div>
        <table className='states'>
            <thead>
                <tr>
                    <th>State</th>
                    <th>Confirmed</th>
                    <th>Recovered</th>
                    <th>Deaths</th>
                    <th>Active</th>
                </tr>
            </thead>
            
            <tbody>
            {
                result.map((currentState, index) => {
                    return(
                        <tr key={index}>
                            <td id='st'>
                                <div>
                                    {currentState.state}
                                </div>
                            </td>
                            <td className='td2 hover'>
                                <div>
                                    <div className="plusred">
                                        ↑ {currentState.deltaconfirmed}
                                    </div>
                                    {currentState.confirmed} 
                                </div>
                            </td>
                            <td className='td2 hover'>
                                <div>
                                    <div className="plusgreen">
                                        ↑ {currentState.deltarecovered}
                                    </div>
                                    {currentState.recovered}
                                </div>
                            </td>
                            <td className='td2 hover'>
                                <div>
                                    <div className="plusgrey">
                                        ↑ {currentState.deltadeaths}
                                    </div>
                                    {currentState.deaths}
                                </div>
                            </td>
                            <td className='td2 hover'>{currentState.active}</td>
                        </tr>
                    )
                })
            }                     
            </tbody>               
        </table>
    </div>
)
}

export default State


