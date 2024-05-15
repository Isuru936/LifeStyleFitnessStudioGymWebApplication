export default function calculateNutrientLevels(
  weight,
  gender,
  height,
  age,
  userId
) {
  // Convert height to meters
  const heightMeters = height / 100;

  // Step 1: Calculate BMR
  let bmr;
  if (gender === "Male") {
    bmr = 10 * weight + 6.25 * heightMeters - 5;
  } else if (gender === "Female") {
    bmr = 10 * weight + 6.25 * heightMeters - 5;
  } else {
    throw new Error("Invalid gender");
  }

  const activityFactor = 1.55;
  const tdee = bmr * activityFactor;

  const proteinRatio = 0.3;
  const carbRatio = 0.4;
  const fatRatio = 0.3;

  // Step 4: Calculate Recommended Nutrient Levels
  const protein = (tdee * proteinRatio) / 4;
  const carbs = (tdee * carbRatio) / 4;
  const fats = (tdee * fatRatio) / 9;
  const calories = protein * 4 + carbs * 4 + fats * 9;

  return {
    protein: Math.max(0, protein).toFixed(2),
    carbs: Math.max(0, carbs).toFixed(2),
    fats: Math.max(0, fats).toFixed(2),
    calories: Math.max(0, calories).toFixed(2),
    userId,
  };
}
