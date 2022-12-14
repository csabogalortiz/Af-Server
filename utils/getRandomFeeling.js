const getRandomFeeling = allfeelings => {
    const random = allfeelings[Math.floor(Math.random() * allfeelings.length)]
    return random
}

module.exports = { getRandomFeeling }