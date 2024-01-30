// Задание 1: "Управление библиотекой книг"
// Реализуйте класс Book, представляющий книгу, со следующими свойствами и методами:
// Свойство title (название) - строка, название книги.
// Свойство author (автор) - строка, имя автора книги.
// Свойство pages (количество страниц) - число, количество страниц в книге.
// Метод displayInfo() - выводит информацию о книге (название, автор и количество страниц).

class Book {
    constructor(title, author, pages) {
        this.title = title;
        this.author = author;
        this.pages = pages;
    }
    displayInfo() {
        console.log(`Название: ${this.title}, автор: ${this.author}, количество страниц: ${this.pages}`);
    }
}
const book1 = new Book('Мастер и Маргарита', 'Булгаков М. А.', 528);
const book2 = new Book('Тихий Дон', 'Шолохов М. А.', 1600);
book1.displayInfo();
book2.displayInfo();




// Задание 2: "Управление списком студентов"
// Реализуйте класс Student, представляющий студента, со следующими свойствами и методами:
// Свойство name (имя) - строка, имя студента.
// Свойство age (возраст) - число, возраст студента.
// Свойство grade (класс) - строка, класс, в котором учится студент.
// Метод displayInfo() - выводит информацию о студенте (имя, возраст и класс).
// javascript
// // Пример использования класса
// const student1 = new Student(""John Smith"", 16, ""10th grade"");
// student1.displayInfo();
// // Вывод:
// // Name: John Smith
// // Age: 16
// // Grade: 10th grade
// const student2 = new Student(""Jane Doe"", 17, ""11th grade"");
// student2.displayInfo();
// // Вывод:
// // Name: Jane Doe
// // Age: 17
// // Grade: 11th grade"

// class Student {
//     constructor(name, age, grade) {
//         this.name = name;
//         this.age = age;
//         this.grade = grade;
//     }
//     displayInfo() {
//         console.log(`Имя студента: ${this.name}, Возраст: ${this.age}, Класс: ${this.grade}`);
//     }
// }

// const student1 = new Student('Ivan Ivanov', 17, 11);
// const student2 = new Student('Anna Petrova', 8, 2);
// student1.displayInfo();
// student2.displayInfo();





// Необязательная задача
// Создать класс "Телефонная книга" с методами для добавления,
//удаления и поиска контактов по имени или номеру телефона.
// // Пример использования
// let phonebook = new Phonebook();
// phonebook.addContact("Иванов", "123-45-67");
// phonebook.addContact("Петров", "987-65-43");
// console.log(phonebook.findContactByName("Иванов")); // { name: "Иванов", phone: "123-45-67" }
// console.log(phonebook.findContactByPhone("987-65-43")); // { name: "Петров", phone: "987-65-43" }
// phonebook.deleteContact("Иванов");
// console.log(phonebook.contacts); // [{ name: "Петров", phone: "987-65-43" }]


// class Phonebook {
//     constructor() {
//       this.contacts = [];
//     }
//     addContact(name, phone) {
//       if (!name || !phone) {
//         throw new Error("Необходимо указать имя и номер телефона контакта.");
//       }
  
//       this.contacts.push({ name, phone });
//     }
//     deleteContact(name) {
//       const index = this.contacts.findIndex((contact) => contact.name === name);
//       if (index === -1) {
//         throw new Error("Контакт с таким именем не найден.");
//       }
  
//       this.contacts.splice(index, 1);
//     }
//     findContactByName(name) {
//       return this.contacts.find((contact) => contact.name === name);
//     }
//     findContactByPhone(phone) {
//       return this.contacts.find((contact) => contact.phone === phone);
//     }
// }

// let phonebook = new Phonebook();
// phonebook.addContact("Иванов", "123-45-67");
// phonebook.addContact("Петров", "987-65-43");
// console.log(phonebook.findContactByName("Иванов"));
// console.log(phonebook.findContactByPhone("987-65-43"));
// phonebook.deleteContact("Иванов");
// console.log(phonebook.contacts);