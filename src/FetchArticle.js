import React, {
    Fragment,
    useState, useEffect
} from 'react'
import axios from 'axios'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

export default function FetchArticle() {
    const [data, setData] = useState({ hits: [] })
    const [query, setQuery] = useState("")
    const [url, setUrl] = useState(
        'https://hn.algolia.com/api/v1/search?query=redux',
    );

    const [loading, Isloading] = useState(false)

    useEffect(() => {
        const fetchData = async () => {
            Isloading(true)
            const result = await axios(url);

            setData(result.data);
            Isloading(false)
        }
        fetchData()
    }, [url])

    //serial number 
    let i = 1
    return (
        <Fragment className="container ">
            <div class="row no-gutters">
                <div class="col-lg-12">
                    <input
                        placeholder="Your Query Here"
                        className="form-control input"
                        type="text"
                        value={query}
                        onChange={event => setQuery(event.target.value)}
                    />
                    <div className="text-center mt-4">
                    <button
                        className="btn btn-success"
                        type="button"
                        onClick={() =>
                            setUrl(`http://hn.algolia.com/api/v1/search?query=${query}`)
                        }
                    >
                        Search
                    </button>    
                    
                    {loading ? (
                        <div class="d-flex justify-content-center text-warning mt-4">
                            <div class="spinner-border" role="status">
                            </div>
                        </div>

                    ) : (

                            <ul className="articles mt-4">
                                {
                                    data.hits.map(item => (
                                        <li className="articlesName" key={item.objectID}>
                                            <a href={item.url}> {i++})  {item.title}  </a>
                                        </li>
                                    ))
                                }
                            </ul>
                        )}
                    </div>

                </div>
            </div>
        </Fragment>
    )
}
