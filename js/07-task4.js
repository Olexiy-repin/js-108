/*
? Напиши функцію transformUsername(user) так, щоб вона повертала новий об'єкт 
? із властивістю fullName, замість firstName та lastName.
*/

const transformUsername = user => {
  const { firstName, lastName, ...newUser } = user;

  console.log('user:', user);

  // console.log('firstName:', firstName);
  // console.log('lastName:', lastName);
  // console.log('newUser:', newUser);

  return {
    fullName: `${firstName} ${lastName}`,
    ...newUser,
  };
};

console.log(
  transformUsername({
    id: 1,
    firstName: 'Jacob',
    lastName: 'Mercer',
    email: 'j.mercer@mail.com',
    friendCount: 40,
  })
);

console.log(
  transformUsername({
    id: 2,
    firstName: 'Adrian',
    lastName: 'Cross',
    email: 'a.cross@hotmail.com',
    friendCount: 20,
  })
);
