import axios from "axios";
import { useEffect, useState } from "react"
import { Link } from "react-router-dom";





function Home() {
    const [isLoading, setIsLoading] = useState(true)
    const [phones, setPhones] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:5005/phones")
        .then((result) => {
            setPhones(result.data);
            setIsLoading(false)
        });
    }, []);


    return ( <div className="bigBox">
    {isLoading ? (
        <div>
            Loading...
        </div>
    ): (
        phones.map((e) => {
            return(
            <div key={e.id} className="box">
                <h1>{e.name}</h1>
                <Link to={`/phone/${e.id}`}>Click for more details</Link>
            </div>
            )
            
        })
    )}
    </div>
    );
}

export default Home;