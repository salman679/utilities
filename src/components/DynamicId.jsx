// but there is a small problem: it will increase by the previous item.
// So when your item is empty, you see a bug. so it is not recommended.
// recommended id crypto.randomId()

const getNextId = (data) => {
  const maxId = data.reduce((prev, current) =>
    prev && prev > current.id ? prev : current.id
  );
  return maxId + 1;
};
