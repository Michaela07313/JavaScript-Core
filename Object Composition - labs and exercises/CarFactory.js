function solve(inputObject) {

    let engines = [{ power: 90, volume: 1800 },{ power: 120, volume: 2400 },{ power: 200, volume: 3500 }];

    let carriage = {
        hatchback: { type: 'hatchback', color: inputObject.color },
        coupe: { type: 'coupe', color: inputObject.color }
    };

    let wheelsize = 2 * Math.floor((inputObject.wheelsize + 1) / 2) - 1;
    inputObject.carriage == 'hatchback' ? inputObject.carriage = carriage.hatchback : inputObject.carriage = carriage.coupe;
    
    inputObject.engine = engines.filter(e => e.power >= inputObject.power)[0];

    return {
        model: inputObject.model,
        engine: inputObject.engine,
        carriage: inputObject.carriage,
        wheels: [wheelsize, wheelsize, wheelsize, wheelsize]
    }

}

console.log(solve({ model: 'VW Golf II',
  power: 90,
  color: 'blue',
  carriage: 'hatchback',
  wheelsize: 14 }
));