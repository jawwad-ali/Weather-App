import React, { useEffect, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from "./Weather.module.css"

export default function Weather() {
    const [data, setData] = useState([])
    const [locationData, setlocationData] = useState([])
    const [condition, setCondition] = useState([])
    const [isLoading, setLoading] = useState(false) 

    useEffect(() => {
        async function callApi() {
            const api = await fetch("http://api.weatherapi.com/v1/current.json?key=43a9ca3cf0df40ee93e141939200210&q=karachi")
            setLoading(true)
            const { current, location, current: { condition } } = await api.json()

            // console.log(current)
            // console.log(location)

            setData(current)
            setlocationData(location)
            setCondition(condition)

            setLoading(false)
        }
        callApi()
    }, [])



    const currentTime = new Date()
    let hrs = currentTime.getHours()
    let min = currentTime.getMinutes()
    let sec = currentTime.getSeconds()

    if (isLoading)
        return <div className="spinner-border text-warning" style={{ textAlign: "center" }}>
            <span className="sr-only">Loading...</span>
        </div>

    return (
        <div className="container">
            <div className="row">
                <div className="col-lg-12 text-center mt-5">
                    {/* <img className={styles.weather_icon} src={condition.icon} /> */}
                    <h4>{condition.text}</h4>
                    <p className={styles.temp}>
                        {data.feelslike_c} <sup>°</sup>
                    </p>
                    <p className={styles.city_name}>
                        {locationData.name}
                    </p>
                    <p className={styles.lastupdated}>
                        <small>Last Updated At:  {hrs}:{min}:{sec}</small>
                    </p>
                </div>
            </div>

            {/* <img src={condition.icon} />
            <p>region:{locationData.region}</p> */}
        </div>
    )
}
