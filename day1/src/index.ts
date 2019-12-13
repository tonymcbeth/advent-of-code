import input from "../input/input.json";
import { calculate } from "./calculator";

console.log(input.reduce((acc, i) => acc + calculate(i), 0));
