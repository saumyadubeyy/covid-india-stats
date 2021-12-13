import React, {useState, useEffect} from 'react'
import '../css/Data.css'
const url = "https://api.apify.com/v2/key-value-stores/toDWvRj1JpTXiM8FF/records/LATEST"


const Data = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    const getData = async () => {
        try{
            const res = await fetch(url);
            const data = await res.json();
            setData(data);
            setLoading(false);
        } catch (error){
            console.log("error")
        }
    }
    
    
    useEffect(() => {        
        getData();
    },[]);
    
    return (
        <div>
            {
                loading ? <div>Loading...</div>:
                <table className='center'>
                <tbody>
                    <tr className='tr'>
                    <td className='blue top td'><span>Active</span></td>
                        <td className='red top td'><span>Confirmed</span></td>
                        <td className='green top td'><span>Recovered</span></td>
                        <td className='grey top td'><span>Deceased</span></td>
                    </tr>

                    <tr>
                        <td  className='mid td'>
                            <div className='plus blue'>
                            {
                                data.activeCasesNew >= 0 ? <div> + {data.activeCasesNew.toLocaleString('en-in')} </div>: <div>  {data.activeCasesNew.toLocaleString('en-in')} </div>
                            }
                            </div>
                        </td>
                        <td className='mid td'>
                            <div className='plus redp'>
                                
                            </div>
                        </td>
                        <td  className='mid td'>
                            <div className='plus green'>
                                {
                                    data.recoveredNew >=0 ? <div>+ {data.recoveredNew.toLocaleString('en-in')} </div>: <div> {data.recoveredNew.toLocaleString('en-in')} </div>
                                }
                            </div>
                        </td>
                        <td className='mid td'>
                            <div className='plus grey'>
                                {
                                    data.deathsNew >=0 ? <div>+ {data.deathsNew.toLocaleString('en-in')}</div>: <div>{data.deathsNew.toLocaleString('en-in')}</div>
                                }
                            </div>
                        </td>
                    </tr>

                    <tr>
                        <td className='blue bottom td'>
                            <div className='num'>
                                {data.activeCases.toLocaleString('en-in')}
                            </div>
                        </td>
                        <td className='red bottom td'>
                            <div className='num'>
                                {data.totalCases.toLocaleString('en-in')}
                            </div>
                        </td>
                        <td className='green bottom td'>
                            <div className='num'> 
                                {data.recovered.toLocaleString('en-in')}
                            </div>
                        </td>
                        <td className='grey bottom td'>
                            <div className='num'>
                                {data.deaths.toLocaleString('en-in')}
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
            }
        </div>
    )
}

export default Data
