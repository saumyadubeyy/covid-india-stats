import React from 'react'

const Check = () => {

    const getData = async () => {
        try{
            const url = "https://api.apify.com/v2/key-value-stores/toDWvRj1JpTXiM8FF/records/LATEST";
            const response = await fetch(url);
            const data = await response.json();
            console.log(data);
        } catch{
            console.log("Errorrrrr")
        }
        
    }

    return (
        <div>
            <button onClick={getData}>Click me</button>
        </div>
    )
}

export default Check
