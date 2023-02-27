# sun-api

⚠️ Broken. js-libs needs to be updated.

Sunrise, sunset, dawn, dusk API

No docker provided (for the moment)

## How to use

You want now the informations, use coordinates in the url `/lat,lon`
Your want information for other date, use coordinates and date `/lat,long/date`

Example :

```
curl -s 'http://localhost:8080/-13.5202365,-71.977184' | jq
{
  "date": "2022-07-24T11:39:38.622Z",
  "sunrise": "2022-07-24T11:10:40.000Z",
  "sunset": "2022-07-24T22:38:20.000Z",
  "sunLight": true,
  "civilDawn": "2022-07-24T10:48:06.000Z",
  "civilDusk": "2022-07-24T23:00:53.000Z",
  "civilLight": true,
  "nauticalDawn": "2022-07-24T10:22:06.000Z",
  "nauticalDusk": "2022-07-24T23:26:52.000Z",
  "nauticalLight": true,
  "astronomicalDawn": "2022-07-24T09:56:15.000Z",
  "astronomicalDusk": "2022-07-24T23:52:43.000Z",
  "astronomicalLight": true,
  "solarNoon": "2022-07-24T16:54:27.000Z"
}
```

Or with date (default local date, to be defined) :
```
curl -s 'http://localhost:8080/-13.5202365,-71.977184/2022-01-01T12:00:00' | jq
{
  "date": "2022-01-01T11:00:00.000Z",
  "sunrise": "2022-01-01T10:23:09.000Z",
  "sunset": "2022-01-01T23:18:02.000Z",
  "sunLight": true,
  "civilDawn": "2022-01-01T09:59:43.000Z",
  "civilDusk": "2022-01-01T23:41:27.000Z",
  "civilLight": true,
  "nauticalDawn": "2022-01-01T09:32:06.000Z",
  "nauticalDusk": "2022-01-02T00:09:03.000Z",
  "nauticalLight": true,
  "astronomicalDawn": "2022-01-01T09:03:54.000Z",
  "astronomicalDusk": "2022-01-02T00:37:14.000Z",
  "astronomicalLight": true,
  "solarNoon": "2022-01-01T16:50:37.000Z"
}
```

Or with offset (You can put Z to send UTC dates)
```
curl -s 'http://localhost:8080/-13.5202365,-71.977184/2022-01-01T12:00:00+05:00' | jq
{
  "date": "2022-01-01T07:00:00.000Z",
  "sunrise": "2022-01-01T10:23:09.000Z",
  "sunset": "2022-01-01T23:18:02.000Z",
  "sunLight": false,
  "civilDawn": "2022-01-01T09:59:43.000Z",
  "civilDusk": "2022-01-01T23:41:27.000Z",
  "civilLight": false,
  "nauticalDawn": "2022-01-01T09:32:06.000Z",
  "nauticalDusk": "2022-01-02T00:09:03.000Z",
  "nauticalLight": false,
  "astronomicalDawn": "2022-01-01T09:03:54.000Z",
  "astronomicalDusk": "2022-01-02T00:37:14.000Z",
  "astronomicalLight": false,
  "solarNoon": "2022-01-01T16:50:37.000Z"
}
```
