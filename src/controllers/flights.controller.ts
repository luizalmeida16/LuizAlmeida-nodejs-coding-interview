import { JsonController, Get } from 'routing-controllers'
import { FlightsService } from '../services/flights.service'

const flightsService = new FlightsService()

@JsonController('/flights', { transformResponse: false })
export default class FlightsController {
    @Get()
    async getAll() {
        const data = await flightsService.getAll()
        return {
            status: 200,
            data,
        }
    }
}
