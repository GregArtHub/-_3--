// ❌ НЕПРАВИЛЬНО - Нарушение принципа подстановки
class Bird {
  fly() {
    console.log('Flying...');
  }
}

class Duck extends Bird {
  // Утка может летать - ОК
}

class Penguin extends Bird {
  fly() {
    throw new Error("Penguins can't fly!");
  }
  // Пингвин не может летать, но вынужден реализовывать метод fly
}

function makeBirdFly(bird) {
  bird.fly(); // Выбросит ошибку для пингвина!
}

// ✅ ПРАВИЛЬНО - Правильная иерархия
class Bird {
  constructor(name) {
    this.name = name;
  }
  
  eat() {
    console.log(`${this.name} is eating`);
  }
}

class FlyingBird extends Bird {
  fly() {
    console.log(`${this.name} is flying`);
  }
}

class NonFlyingBird extends Bird {
  swim() {
    console.log(`${this.name} is swimming`);
  }
}

class Duck extends FlyingBird {
  quack() {
    console.log('Quack!');
  }
}

class Penguin extends NonFlyingBird {
  slide() {
    console.log(`${this.name} is sliding on ice`);
  }
}

class Eagle extends FlyingBird {
  soar() {
    console.log(`${this.name} is soaring high`);
  }
}

// Использование
function makeBirdFly(bird) {
  if (bird instanceof FlyingBird) {
    bird.fly(); // Безопасно, знаем что птица умеет летать
  } else {
    console.log(`${bird.name} cannot fly`);
  }
}

const duck = new Duck('Donald');
const penguin = new Penguin('Pingu');
const eagle = new Eagle('Sky King');

makeBirdFly(duck);    // Donald is flying
makeBirdFly(penguin); // Pingu cannot fly
makeBirdFly(eagle);   // Sky King is flying
