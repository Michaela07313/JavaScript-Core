function solve(inputName, inputAge, inputWeight, inputHeight) {
    let heigthInMeters = inputHeight / 100;
    let personData = {
        name: inputName,
        personalInfo: {
            age: inputAge,
            weight: inputWeight,
            height: inputHeight
        },
        BMI: Math.round(inputWeight / (heigthInMeters * heigthInMeters))
    };

    if(personData.BMI < 18.5) {
        personData.status = 'underweight';
    } else if(personData.BMI >= 18.5 && personData.BMI < 25) {
        personData.status = 'normal';
    } else if(personData.BMI >= 25 && personData.BMI < 30) {
        personData.status = 'overweight';
    } else if(personData.BMI >= 30) {
        personData.status = 'obese';
        personData.recommendation = 'admission required';
    }

    return personData;
}
