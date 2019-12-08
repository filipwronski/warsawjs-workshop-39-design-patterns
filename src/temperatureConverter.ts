import { injectable } from "inversify";

export interface ITemperatureConverter {
    convertToCelcius(temperature: number): number;
}

@injectable()
export class TeperatureConverter implements ITemperatureConverter {
    convertToCelcius(temperature: number): number {
        return temperature + 100;
    }
}

