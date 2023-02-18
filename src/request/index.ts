export const getUserDetails = async(user : string) => {
    const response = await fetch(`https://api.github.com/users/${user}`);
    const data = await response.json();
    return data;
}

export const getWeather = async(city : string) => {
    const response = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=${import.meta.env.VITE_WEATHER_API_KEY}&q=${city}&days=1&aqi=no&alerts=no`);
    const data = await response.json();
    return data;
}