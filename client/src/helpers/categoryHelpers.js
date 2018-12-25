export function getCategories() {
  return new Promise((resolve, reject) => {
    fetch('/category')
      .then(res => res.json())
      .then(res => resolve(res))
      .catch(err => reject(err));
  })
}

