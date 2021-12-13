import React, {useState, useEffect} from 'react'
import '../css/State.css'
const url = "https://api.apify.com/v2/key-value-stores/toDWvRj1JpTXiM8FF/records/LATEST"
   
const State = () => {
const [data, setData] = useState([])

const getCovidData = async () => {
    try {
        const response = await fetch(url)
        const covidData = await response.json()
        setData(covidData.regionData)
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
                    <th className='t-head'>State</th>
                    <th className='t-head'>Confirmed</th>
                    <th className='t-head'>Active</th>
                    <th className='t-head'>Recovered</th>
                    <th className='t-head'>Deaths</th>
                </tr>
            </thead>
            
            <tbody>
            {
                result.map((currentState, index) => {
                    return(
                        <tr key={index}>
                            <td id='st'>
                                <div>
                                    {currentState.region}
                                </div>
                            </td>
                            
                            <td className='td2 hover'>
                                <div>
                                    <div className="plusred">
                                        {
                                            currentState.newInfected >= 0 ? <div> ↑ {currentState.newInfected.toLocaleString()} </div>: <div> ↓ {Math.abs(currentState.newInfected.toLocaleString())} </div>
                                        }
                                    </div>
                                    {currentState.totalInfected.toLocaleString('en-in')}
                                </div>
                            </td>
                            <td className='td2 hover blue'>
                                <div>
                                    {currentState.activeCases.toLocaleString('en-in')}
                                </div>
                            </td>
                            <td className='td2 hover'>
                                <div>
                                    <div className="plusgreen">
                                        ↑ {currentState.newRecovered.toLocaleString('en-in')}
                                    </div>
                                    {currentState.recovered.toLocaleString('en-in')}
                                </div>
                            </td>
                            <td className='td2 hover'>
                                <div>
                                    <div className="plusgrey">
                                        {
                                            currentState.newDeceased >0 ? <div>+ {currentState.newDeceased.toLocaleString('en-in')} </div> : <div></div>
                                        }
                                    </div>
                                    {currentState.deceased.toLocaleString('en-in')}
                                </div>
                            </td>
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

