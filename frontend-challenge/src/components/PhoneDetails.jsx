import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function PhoneDetails() {
    const {id} = useParams();
    const [details, setDetails] = useState("");
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        axios.get(`http://localhost:5005/phone/${id}`)
        .then((result) => {
            setDetails(result.data);
            setIsLoading(false)
        })
    })
    return ( <>
    {isLoading ? (<div>Loading...</div>) : (
    <><h1>Details:</h1>
    <div>
        <p>Name: {details.name}</p>
        <p>Built by: {details.manufacturer}</p>
        <p>{details.description}</p>
        <p>Color: {details.color}</p>
        <p>Price: {details.price}</p>
        <img src={`../images/${details.imageFileName}`} alt={details.name}/>
        <p>Screen size: {details.screen}</p>
        <p>Processor: {details.processor}</p>
        <p>RAM: {details.ram}</p>

    </div> </>)}
       </> );
}

export default PhoneDetails;