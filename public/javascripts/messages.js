const setHours = require('date-fns/setHours');
const format = require('date-fns/format');
const setMilliseconds = require('date-fns/setMilliseconds');

const randomTime = Math.floor(Math.random() * -100) * 654321;

const messages = [
  {
    subject: "My favorite foods",
    author: "Jessie",
    added: format(setMilliseconds(new Date(), randomTime), "PPp"),
    text: "I like pizza, candy, apples, orange juice, and coffee. Lot's and lot's of coffee! Iste excepturi quaerat quo delectus. Nihil rerum ea facilis voluptas eos quia consequatur eligendi. Quibusdam neque consequatur eius explicabo vitae velit, commodi cumque distinctio eaque veritatis?"
  },
  {
    subject: "What I did today",
    author: "Jerry Smith",
    added: format(setHours(new Date(), -17), "PPp"),
    text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quo neque laborum reiciendis saepe aliquid nam sapiente provident consectetur illo commodi, ullam doloribus aspernatur illum eveniet perferendis autem sint quos assumenda? Exercitationem voluptates impedit sapiente. Iste excepturi quaerat quo delectus. Nihil rerum ea facilis voluptas eos quia consequatur eligendi. Quibusdam neque consequatur eius explicabo vitae velit, commodi cumque distinctio eaque veritatis?"
  }
];

module.exports = messages;