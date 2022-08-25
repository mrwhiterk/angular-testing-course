import { CalculatorService } from "./calculator.service";
import { LoggerService } from "./logger.service";

describe ('CalculatorService', () => { // 1 suite has many specs

  let calculator: CalculatorService,
      loggerSpy: any;

  beforeEach(() => {
    loggerSpy = jasmine.createSpyObj('LoggerService', ["log"]);

    calculator = new CalculatorService(loggerSpy);
  })
  
  it('should add two numbers', () => {

    // spyOn(logger, 'log'); alternate
    // logger.log.and.returnValue();
    const result = calculator.add(2, 2);

    expect(result).toBe(4);

    expect(loggerSpy.log).toHaveBeenCalledTimes(1);

  })

  it('should subtract two numbers', () => {

    const result = calculator.subtract(2, 2);

    expect(result).toBe(0, "unexpected subtraction result");

    expect(loggerSpy.log).toHaveBeenCalledTimes(1);

    
  })
})