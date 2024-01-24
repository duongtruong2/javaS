

const calcAverageHumanAge = function (ages) {
    const humanAges = ages.map(age => (age <= 2 ? 2 * age : 16 + age * 4));
    const adults = humanAges.filter(age => age >= 18);
    console.log(humanAges);
    console.log(adults);
  
    const average = adults.reduce(
      (acc, age, i, arr) => acc + age / arr.length,
      0
    );
  
    return average;
  };
  const avg1 = calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]);
  const avg2 = calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]);
  console.log("Test Data 1 - Tuổi trung bình của chó trưởng thành: " + avg1.toFixed(2) + " tuổi người" );
  console.log("Test Data 2 - Tuổi trung bình của chó trưởng thành: " + avg2.toFixed(2) + " tuổi người" );


