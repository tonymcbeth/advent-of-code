const calculateFuel = (mass: number) => Math.floor(mass / 3) - 2;
export const calculate = (mass: number, initialFuel = 0): any => {
  const fuelForMass = calculateFuel(mass);
  const totalFuel = fuelForMass + initialFuel;
  if (calculateFuel(fuelForMass) <= 0) return totalFuel;

  return calculate(fuelForMass, totalFuel);
};
