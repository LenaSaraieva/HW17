//Дан масив об'єктів. Вивести масив телефонних номерів користувачів, у яких баланс більше 2000 доларів. І знайти суму всіх балансів користувачів
let users = [];
const usersWithBalanceOver2000 = users.filter(user => {
    const balance = parseFloat(user.balance.replace(/[^0-9.-]+/g,""));
    return balance > 2000;
  });

const phoneNumbers = usersWithBalanceOver2000.map(user => user.phone);
console.log("Phone numbers with balance over $2000:", phoneNumbers);

const totalBalance = users.reduce((sum, user) => {
    const balance = parseFloat(user.balance.replace(/[^0-9.-]+/g,""));
    return sum + balance; 
}, 0);

    console.log("Total balance of all users:", totalBalance);
