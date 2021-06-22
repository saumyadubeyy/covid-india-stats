import React, {useState, useEffect} from 'react'
import './Data.css'
const url= 'https://api.covid19india.org/data.json'

const Data = () => {
    const [data, setData] = useState([])
    

    const getData = async () => {
        try{
            const res = await fetch(url)
            const data = await res.json()
            setData(data.statewise[0])
        } catch (error){
            console.log(error)
        }
        
    }
    
    useEffect(() => {
        getData()
    },[])
    
    return (
        <div>
            <table className='center'>
                <tbody>
                    <tr className='tr'>
                        <td className='red top td'><span>Confirmed</span></td>
                        <td className='blue top td'><span>Active</span></td>
                        <td className='green top td'><span>Recovered</span></td>
                        <td className='grey top td'><span>Deceased</span></td>
                    </tr>

                    <tr>
                        <td className='mid td'>
                            <div className='plus redp'>
                                +{data.deltaconfirmed}
                            </div>
                        </td>
                        <td  className='mid td'>
                        </td>
                        <td  className='mid td'>
                            <div className='plus green'>
                                +{data.deltarecovered}
                            </div></td>
                        <td className='mid td'>
                        <div className='plus grey'>
                                +{data.deltadeaths}
                            </div>
                        </td>
                    </tr>

                    <tr>
                        <td className='red bottom td'>
                            <div className='num'>
                                {data.confirmed}
                            </div>
                        </td>
                        <td className='blue bottom td'>
                            <div className='num'>
                                {data.active}
                            </div>
                        </td>
                        <td className='green bottom td'>
                            <div className='num'> 
                                {data.recovered}
                            </div>
                        </td>
                        <td className='grey bottom td'>
                            <div className='num'>
                                {data.deaths}
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default Data
