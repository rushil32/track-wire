export function getSubCategories(id) {
  return new Promise((resolve, reject) => {
    fetch(`/category/${id}/sub_categories`)
      .then(res => res.json())
      .then(res => resolve(res['sub_categories']))
      .catch(err => reject(err));
  })
}

