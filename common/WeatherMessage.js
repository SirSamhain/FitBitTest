export class WeatherMessage {
    constructor(location, temp, humidity, windSpeed, description, icon) {
        this.location = location;
        this.temp = temp;
        this.humidity = humidity;
        this.windSpeed = windSpeed;
        this.description = description;
        this.icon = icon;
    }
}