export default function calculateNutrientLevels(
  weight,
  gender,
  height,
  age,
  purpose,
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

  // Step 2: Adjust for Activity Level to estimate TDEE
  let activityFactor;
  switch (purpose) {
    case "weight_loss":
      activityFactor = 1.2; // Sedentary
      break;
    case "weight_gain":
      activityFactor = 1.5; // Moderately Active
      break;
    case "bulking":
      activityFactor = 1.7; // Very Active
      break;
    default:
      throw new Error("Invalid purpose");
  }
  const tdee = bmr * activityFactor;

  // Step 3: Determine Macronutrient Distribution based on purpose
  let proteinRatio, carbRatio, fatRatio;
  switch (purpose) {
    case "weight_loss":
      proteinRatio = 0.3;
      carbRatio = 0.4;
      fatRatio = 0.3;
      break;
    case "weight_gain":
      proteinRatio = 0.25;
      carbRatio = 0.55;
      fatRatio = 0.2;
      break;
    case "bulking":
      proteinRatio = 0.35;
      carbRatio = 0.45;
      fatRatio = 0.2;
      break;
    default:
      throw new Error("Invalid purpose");
  }

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
