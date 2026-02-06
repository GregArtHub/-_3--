// ❌ НЕПРАВИЛЬНО - "Толстый" интерфейс
class Worker {
  work() {
    // работа
  }
  
  eat() {
    // прием пищи
  }
  
  sleep() {
    // сон
  }
  
  code() {
    // программирование
  }
  
  design() {
    // дизайн
  }
  
  test() {
    // тестирование
  }
  
  manage() {
    // управление
  }
}

// Приходится реализовывать ненужные методы
class Developer extends Worker {
  design() {
    throw new Error("I'm not a designer!");
  }
  
  manage() {
    throw new Error("I'm not a manager!");
  }
}

// ✅ ПРАВИЛЬНО - Разделение интерфейсов
class Human {
  constructor(name) {
    this.name = name;
  }
  
  eat() {
    console.log(`${this.name} is eating`);
  }
  
  sleep() {
    console.log(`${this.name} is sleeping`);
  }
}

// Специфичные интерфейсы
class Workable {
  work() {
    throw new Error('Method must be implemented');
  }
}

class Codable {
  code() {
    throw new Error('Method must be implemented');
  }
}

class Designable {
  design() {
    throw new Error('Method must be implemented');
  }
}

class Testable {
  test() {
    throw new Error('Method must be implemented');
  }
}

class Manageable {
  manage() {
    throw new Error('Method must be implemented');
  }
}

// Классы реализуют только нужные интерфейсы
class Developer extends Human {
  constructor(name) {
    super(name);
  }
  
  work() {
    console.log(`${this.name} is working`);
  }
  
  code() {
    console.log(`${this.name} is coding`);
  }
  
  test() {
    console.log(`${this.name} is testing code`);
  }
}

class Designer extends Human {
  constructor(name) {
    super(name);
  }
  
  work() {
    console.log(`${this.name} is working`);
  }
  
  design() {
    console.log(`${this.name} is creating design`);
  }
}

class Manager extends Human {
  constructor(name) {
    super(name);
  }
  
  work() {
    console.log(`${this.name} is working`);
  }
  
  manage() {
    console.log(`${this.name} is managing team`);
  }
}

// Использование
const dev = new Developer('Alice');
dev.work();  // Alice is working
dev.code();  // Alice is coding
dev.eat();   // Alice is eating

const designer = new Designer('Bob');
designer.design(); // Bob is creating design

const manager = new Manager('Carol');
manager.manage(); // Carol is managing team
