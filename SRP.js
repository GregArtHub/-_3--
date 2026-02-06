// НЕПРАВИЛЬНО - Класс с множеством ответственностей
class Order {
  calculateTotal() {
    // расчет суммы
  }
  
  saveToDatabase() {
    // сохранение в БД
  }
  
  sendEmailConfirmation() {
    // отправка email
  }
  
  generateInvoice() {
    // генерация счета
  }
  
  validatePayment() {
    // валидация платежа
  }
}

//  ПРАВИЛЬНО - Разделение ответственности
class Order {
  constructor(items) {
    this.items = items;
    this.total = 0;
  }
  
  calculateTotal() {
    this.total = this.items.reduce((sum, item) => sum + item.price, 0);
    return this.total;
  }
}

class OrderRepository {
  save(order) {
    // логика сохранения в БД
    console.log('Saving order to database:', order);
  }
  
  findById(id) {
    // логика поиска
  }
}

class EmailService {
  sendConfirmation(order, customerEmail) {
    // логика отправки email
    console.log(`Sending confirmation to ${customerEmail} for order ${order.id}`);
  }
}

class InvoiceGenerator {
  generate(order) {
    // логика генерации счета
    return `Invoice for order ${order.id}: $${order.total}`;
  }
}

// Использование
const order = new Order([{name: 'Book', price: 20}, {name: 'Pen', price: 5}]);
order.calculateTotal();

const orderRepo = new OrderRepository();
orderRepo.save(order);

const emailService = new EmailService();
emailService.sendConfirmation(order, 'customer@example.com');

const invoiceGen = new InvoiceGenerator();
const invoice = invoiceGen.generate(order);
