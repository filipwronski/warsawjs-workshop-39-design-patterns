import 'reflect-metadata';
import { injectable } from 'inversify';
import { TemperatureSensor } from './temperatureSensor';

@injectable()
export class Main
{
    constructor(private temperatureSensor: TemperatureSensor) {

    }
    public async Start(): Promise<void>
    {
        console.log(this.temperatureSensor.readTemperature())
    }
}
