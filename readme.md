# Api Weather

## Description

C'est une API de météo conçue avec Node.js et Express.js.
Recommandée pour les services météorologiques, les applications météorologiques.

## Utilisation

Pour utiliser cette API, vous devez envoyer une requête GET à l'URL suivante:

```
https://api-weather-run/api/apiWeather
```

La réponse sera un objet JSON avec la structure suivante :

```
{
    "date": "DATE",
    "city": "Nom de la ville",
    "country": "Nom du pays",
    "description": "DESCRIPTION",
    "minTemperature": "MIN_TEMPERATURE",
    "maxTemperature": "MAX_TEMPERATURE",
    "temperature": "TEMPERATURE",
    "windSpeed": "WIND_SPEED",
    "weatherIndiceUV": "WEATHER_INDICE_UV",
    "weatherPressure": "WEATHER_PRESSURE",
    "weatherStatus": "WEATHER_STATUS",

}
```

## Exemple

```
https://api-weather-run/api/apiWeather?city=London
```

Retourne:

```
{
    "date": "2020-04-20T18:00:00.000Z",
    "city": "London",
    "country": "GB",
    "description": "light rain",
    "minTemperature": 9.44,
    "maxTemperature": 10.56,
    "temperature": 10.56,
    "windSpeed": 4.1,
    "weatherIndiceUV": 0,
    "weatherPressure": 1009,
    "weatherStatus": "Rain"
}
```

## Auteur

- **Coupama Brian** - _Initial work_ - [bc_548]()

## License

Ce projet est sous licence ``MIT License`` - voir le fichier [LICENSE.md](LICENSE.md) pour plus d'informations.

```

```