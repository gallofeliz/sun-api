const HttpServer = require('js-libs/http-server').default
const { handleExitSignals } = require('js-libs/exit-handle')
const createLogger = require('js-libs/logger').default
const logger = createLogger('info')
const SolarCalc = require('solar-calc')

const httpServer = new HttpServer({
    logger,
    port: 8080,
    api: {
        routes: [
            {
                method: 'get',
                path: '/:coord/:date?',
                handler(req, res) {
                    const [lat, long] = req.params.coord.split(',').map(e => parseFloat(e))
                    const date = req.params.date ? new Date(req.params.date) : new Date

                    if (!Number.isFinite(lat) || !Number.isFinite(long) || isNaN(date)) {
                        res.status(400)
                        res.end('Invalid parameters')
                        return
                    }

                    const solar = new SolarCalc(date, lat, long)
                    res.send({
                        date: date,
                        sunrise: solar.sunrise,
                        sunset: solar.sunset,
                        sunLight: date > solar.sunrise && date < solar.sunset,
                        civilDawn: solar.civilDawn,
                        civilDusk: solar.civilDusk,
                        civilLight: date > solar.civilDawn && date < solar.civilDusk,
                        nauticalDawn: solar.nauticalDawn,
                        nauticalDusk: solar.nauticalDusk,
                        nauticalLight: date > solar.nauticalDawn && date < solar.nauticalDusk,
                        astronomicalDawn: solar.astronomicalDawn,
                        astronomicalDusk: solar.astronomicalDusk,
                        astronomicalLight: date > solar.astronomicalDawn && date < solar.astronomicalDusk,
                        solarNoon: solar.solarNoon
                    })
                }
            }
        ]
    }
})

httpServer.start()

handleExitSignals(() => {
    httpServer.stop()
})
