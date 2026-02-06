// ❌ НЕПРАВИЛЬНО - Модификация существующего кода
class DiscountCalculator {
  calculate(amount, userType) {
    if (userType === 'regular') {
      return amount * 0.95; // 5% скидка
    }
    
    if (userType === 'vip') {
      return amount * 0.85; // 15% скидка
    }
    
    if (userType === 'student') {
      return amount * 0.90; // 10% скидка
    }
    
    // При добавлении нового типа пользователя нужно изменять этот класс
    return amount;
  }
}

// ✅ ПРАВИЛЬНО - Расширение через новые классы
class DiscountStrategy {
  calculate(amount) {
    throw new Error('Method must be implemented');
  }
}

class RegularDiscount extends DiscountStrategy {
  calculate(amount) {
    return amount * 0.95;
  }
}

class VIPDiscount extends DiscountStrategy {
  calculate(amount) {
    return amount * 0.85;
  }
}

class StudentDiscount extends DiscountStrategy {
  calculate(amount) {
    return amount * 0.90;
  }
}

class BlackFridayDiscount extends DiscountStrategy {
  calculate(amount) {
    return amount * 0.70; // 30% скидка
  }
}

class DiscountCalculator {
  constructor(strategy) {
    this.strategy = strategy;
  }
  
  setStrategy(strategy) {
    this.strategy = strategy;
  }
  
  calculate(amount) {
    return this.strategy.calculate(amount);
  }
}

// Использование
const calculator = new DiscountCalculator(new RegularDiscount());
console.log(calculator.calculate(100)); // 95

// Легко добавляем новую стратегию без изменения существующего кода
calculator.setStrategy(new BlackFridayDiscount());
console.log(calculator.calculate(100)); // 70
