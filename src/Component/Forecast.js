import React, { useEffect, useState } from 'react'
import styles from "./Forecast.module.css"

export default function Forecast() {

    const [forecastData, setForecastData] = useState([])
    const [loading, setLoading] = useState(false)

    // FORECAST
    useEffect(() => {
        forecast()
        async function forecast() {

            const api = await fetch("http://api.weatherapi.com/v1/forecast.json?key=43a9ca3cf0df40ee93e141939200210&q=karachi&days=3")
            setLoading(true)

            const { forecast: { forecastday } } = await api.json()
            setForecastData(forecastday)

            setLoading(false)

        }
        forecast()
    }, [])

    if (loading)
        return <div className="spinner-border text-warning" style={{ textAlign: "center" }}>
            <span className="sr-only">Loading...</span>
        </div>

    return (
        <div className={styles.dataContainer}>
            <hr />
            <ul>
                {
                    forecastData.map((data, date) => {
                        return (
                            <div key={date} >
                                <div className={styles.forecast_container} key={date}>
                                    <li className={styles.date}>{data.date}</li>
                                    <li>
                                        <img className={styles.icon} src={data.day.condition.icon} alt="Forecast" />
                                    </li>
                                    <li className={styles.Temp}>{data.day.maxtemp_c} &nbsp; | &nbsp;</li>

                                    <li className={styles.Temp}>{data.day.mintemp_c}</li>
                                </div>
                                <hr />
                            </div>
                        )
                    })
                }
            </ul>
        </div>
    )
}
