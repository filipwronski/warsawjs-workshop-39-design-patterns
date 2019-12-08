// These two imports must go first!
import 'reflect-metadata';
import { Types } from './Types';
import { Container } from 'inversify';
import { Main } from '../Main';
import { TemperatureSensor } from '../temperatureSensor';
import { ITemperatureConverter, TeperatureConverter } from '../temperatureConverter';
import { Http, IHttp } from '../Http';

const IoC = new Container();

try
{
    IoC.bind(Main).toSelf();
    IoC.bind(TemperatureSensor).toSelf();
    IoC.bind<IHttp>(Types.IHttp).to(Http);
    IoC.bind<ITemperatureConverter>(Types.ITemperatureConverter).to(TeperatureConverter);
}
catch (ex)
{
    console.log('IoC exception:', ex);
}

export { IoC };
