function solve(inputObject) {
    if(inputObject.handsShaking) {
        inputObject.bloodAlcoholLevel += inputObject.weight * inputObject.experience * 0.1;
        inputObject.handsShaking = false;
    }

    return inputObject;
}

console.log(solve({ weight: 120, experience: 20, bloodAlcoholLevel: 200, handsShaking: true }));