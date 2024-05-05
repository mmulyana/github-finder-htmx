async function getUserByName(name) {
  try {
    const res = await fetch('https://api.github.com/users/' + name)
    const data = await res.json()
    return data
  } catch (error) {
    console.log(error)
    return error.message
  }
}

module.exports = { getUserByName }
