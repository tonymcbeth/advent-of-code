import { calculate } from "../src/calculator";

describe("Given a mass of 12", () => {
  it("Then the total amount of fuel tanks is 2", () => {
    expect(calculate(12)).toEqual(2);
  });
});

describe("Given a mass of 16", () => {
  it("Then the total amount of fuel tanks is 3", () => {
    expect(calculate(16)).toEqual(3);
  });
});

describe("Given a mass of 1969", () => {
  it("Then the total amount of fuel tanks is 966.", () => {
    expect(calculate(1969)).toEqual(966);
  });
});

describe("Given an input of masses", () => {
  let inputs: [number, number, number];

  beforeEach(() => {
    inputs = [12, 16, 100756];
  });

  it("Then calcumates total anout of fuel used", () => {
    expect(inputs.reduce((acc, i) => acc + calculate(i), 0)).toEqual(50351);
  });
});
