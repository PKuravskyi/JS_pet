const heroNameEl = document.getElementById('hero-name')
const monsterHealthBar = document.getElementById('monster-health')
const heroHealthBar = document.getElementById('hero-health')
const bonusLifeEl = document.getElementById('bonus-life')
const startOverBtn = document.getElementById('start-over')

const attackBtn = document.getElementById('attack-btn')
const strongAttackBtn = document.getElementById('strong-attack-btn')
const healBtn = document.getElementById('heal-btn')
const healCountEl = document.getElementById('heal-count')
const hideLogBtn = document.getElementById('hide-log-btn')

const battleLogSection = document.getElementById('battle-log')
const logEntriesSection = document.getElementById('log-entries')

const adjustHealthBars = (maxLife) => {
  monsterHealthBar.max = maxLife
  monsterHealthBar.value = maxLife
  heroHealthBar.max = maxLife
  heroHealthBar.value = maxLife
}

const setHeroName = () => {
  Swal.fire({
    title: `Please enter hero's name`,
    input: 'text',
    allowOutsideClick: false,
    inputPlaceholder: 'John Doe',
    inputAttributes: {
      maxlength: 12,
    },
    inputValidator: (value) => {
      if (!value) {
        return "Name can't be empty!"
      } else if (!/^[a-zA-Z\s]*$/.test(value)) {
        return "Name can only contain alpha characters.\nFor example 'Beast Master'"
      } else {
        heroNameEl.innerText = value.toUpperCase()
      }
    },
  })
}

const dealMonsterDamage = (damage) => {
  const dealtDamage = (Math.random() * damage).toFixed(0)
  monsterHealthBar.value = +monsterHealthBar.value - dealtDamage
  return dealtDamage
}

const dealHeroDamage = (damage) => {
  const dealtDamage = (Math.random() * damage).toFixed(0)
  heroHealthBar.value = +heroHealthBar.value - dealtDamage
  return dealtDamage
}

const increaseHeroHealth = (healValue) => {
  heroHealthBar.value = +heroHealthBar.value + healValue
  currentHeroLife = heroHealthBar.value
}

const resetValues = () => {
  adjustHealthBars(CHOSEN_MAX_LIFE)
  currentMonsterLife = +heroHealthBar.value
  currentHeroLife = +monsterHealthBar.value
  healCountEl.innerText = HEAL_COUNT_VALUE
  document.querySelectorAll('.log-entry').forEach((element) => element.remove())
}

const removeBonusLife = () => {
  bonusLifeEl.parentNode.removeChild(bonusLifeEl)
}

const setHeroHealth = (health) => {
  heroHealthBar.value = health
}
