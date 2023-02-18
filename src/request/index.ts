export const getUserDetails = async(user : string) => {
    const response = await fetch(`https://api.github.com/users/${user}`);
    const data = await response.json();
    return data;
}

export const getGeoLocation = async(city : string) => {
    const cityUri = encodeURI(city);
    const response = await fetch(`https://api.openweathermap.org/geo/1.0/direct?q=${cityUri}&appid=${import.meta.env.VITE_WEATHER_API_KEY}`);
    const data = await response.json();
    return data;
}