import { TeperatureConverter } from "./temperatureConverter";
import { inject, injectable } from "inversify";
import { Types } from "./IoC/Types";
import { IHttp } from "./Http";


@injectable()
export class TemperatureSensor {

    public constructor (
        @inject(Types.IHttp) private _http: IHttp,
        @inject(Types.ITemperatureConverter) private temperatureConverter: TeperatureConverter,
    ) {

    }
    public readTemperature(): number {
        const response = this._http.get('http://123.1123.1123');
        const temperature = response;
        return this.convertToCelcius(temperature);
    }

    public convertToCelcius(temperature: number): number {
        return this.temperatureConverter.convertToCelcius(temperature)
    }
}