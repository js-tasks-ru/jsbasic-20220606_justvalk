function showSalary(users, age) {
  // ваш код...

  let arr = [];

  users.forEach (user => {
    if (user.age <= age) {
      arr.push(`${user.name}, ${user.balance}`);
    }
  });

  return arr.join('\n');
  
}
