// strategy

class Human {
    constructor(
        public name = "",
        public age = 0,
    ) {

    }
}

test('strategy', () => {
    const young: Human[] = [];
    const old: Human[] = [];

    const human: Human = new Human("Human1", 15);

    if (human.age < 15) {
        young.push(human)
    }
    else if (human.age > 18) {
        old.push(human)
    }
})

interface IStrategy {
    isApplicable(human: Human): boolean;
    execute(human: Human): void;
}

const young: Human[] = []
const old: Human[] = []

class IsYoungStrategy implements IStrategy {
    isApplicable(human: Human): boolean {
        return human.age <= 18;
    }

    execute(human: Human): void {
        young.push(human);
    }
}

test('strategy 2', () => {
    const young: Human[] = [];
    const old: Human[] = [];

    const human: Human = new Human("Human1", 15);
    const strategies = [new IsYoungStrategy()]
    const strategy: IStrategy | undefined = strategies.find(strategy => strategy.isApplicable(human))
    if (strategy === undefined) {
        throw Error('strategy is undefined')
    }
    strategy.execute(human)

    expect(young.length).toBe(0)
    expect(old.length).toBe(0)
})