let uniqueNumbers = [];

const generateUniqueNumbers = () => {
  while (uniqueNumbers.length < 6) {
    const randomNumber = Math.floor(Math.random() * 10);

    if (!uniqueNumbers.includes(randomNumber)) {
      uniqueNumbers.push(randomNumber);
    }
  }
  //conseguir parejas dentro del array y sin bucle
  const uniqueNumbersCopy = [...uniqueNumbers, ...uniqueNumbers];

  uniqueNumbersCopy.sort(() => Math.random() - 0.5);
  console.log(uniqueNumbersCopy);
};
generateUniqueNumbers();
