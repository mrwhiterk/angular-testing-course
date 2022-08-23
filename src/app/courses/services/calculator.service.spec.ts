import { CalculatorService } from "./calculator.service";
import { LoggerService } from "./logger.service";

describe ('CalculatorService', () => { // 1 suite has many specs
  
  it('should add two numbers', () => {
    const calculator = new CalculatorService(new LoggerService());

    const result = calculator.add(2, 2);

    expect(result).toBe(4);

  })

  it('should subtract two numbers', () => {
    const calculator = new CalculatorService(new LoggerService());

    const result = calculator.subtract(2, 2);

    expect(result).toBe(0, "unexpected subtraction result");
    
  })
})