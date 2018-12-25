export function getRecentCourses(limit) {
  return new Promise((resolve, reject) => {
    fetch(`/course/${limit}/recent`)
      .then(res => res.json())
      .then(res => resolve(res))
      .catch(err => reject(err));
  })
}