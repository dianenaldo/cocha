import { useParams } from "react-router-dom";
const Weather = () => {
    const { lat, lon } = useParams<{ lat: string, lon: string }>();
    return (
        <>{lat}{lon}</>
    )
}

export default Weather