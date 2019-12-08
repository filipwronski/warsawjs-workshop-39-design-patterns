import { TemperatureSensor, IHttp } from "../temperatureSensor";
import { Mock, It } from 'moq.ts';
import { ITemperatureConverter } from "../temperatureConverter";

// moq.ts - super biblioteka do mokowania - podajemy typ i oczekiwaną wartość
// const httpMock = new Mock<IHttp>()
// httpMock.setup(x => x
//     .get(It.IsAny<string>()))
//     .returns(5);

test('TemperatureSensor', () => {

    const httpMock = new Mock<IHttp>()
    httpMock.setup(x => x
        .get(It.IsAny<string>()))
        .returns(5);

    const temperatureConverterMock = new Mock<ITemperatureConverter>()
    temperatureConverterMock.setup(x => x
        .convertToCelcius(It.IsAny<number>()))
        .returns(105)

    const systemUnderTest = new TemperatureSensor(httpMock.object(), temperatureConverterMock.object());

    const temperature = systemUnderTest.readTemperature();

    expect(temperature).toBe(105);
})