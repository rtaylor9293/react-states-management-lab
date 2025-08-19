import { useState } from 'react'
import './App.css'

function App() {

  const [team, setTeam] = useState([])
  const handleAddFighter = (newFighter) => {
    // console.log('New Fighter:', newFighter)
    if (money < newFighter.price) {
      console.log('Not enough money')
      return; 
    } else {
      const newTeamArray = [...team, newFighter]
      setTeam(newTeamArray)
      removeZombieFighters(newFighter.id)
      handleMoney(newFighter.price)
    }
  }
  console.log('Your Team:', team)

  const totalStrength = team.reduce((sum, fighter) => sum + fighter.strength, 0)
  const totalAgility = team.reduce((sum, fighter) => sum + fighter.agility, 0)

  const [money, setMoney] = useState(100)
  const handleMoney = (dollar) => {
    const newMoneyTotal = money - dollar;
    setMoney(newMoneyTotal)
    // console.log('New Money:', money)
    // console.log('Dollar:', dollar)
  }

  const [zombieFighters, setZombieFighters] = useState([
      {
        id: 1,
        name: 'Survivor',
        price: 12,
        strength: 6,
        agility: 4,
        img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/0c2d6b.png',
      },
      {
        id: 2,
        name: 'Scavenger',
        price: 10,
        strength: 5,
        agility: 5,
        img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/033a16.png',
      },
      {
        id: 3,
        name: 'Shadow',
        price: 18,
        strength: 7,
        agility: 8,
        img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/262c36.png',
      },
      {
        id: 4,
        name: 'Tracker',
        price: 14,
        strength: 7,
        agility: 6,
        img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/3c1e70.png',
      },
      {
        id: 5,
        name: 'Sharpshooter',
        price: 20,
        strength: 6,
        agility: 8,
        img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/4b2900.png',
      },
      {
        id: 6,
        name: 'Medic',
        price: 15,
        strength: 5,
        agility: 7,
        img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/5a1e02.png',
      },
      {
        id: 7,
        name: 'Engineer',
        price: 16,
        strength: 6,
        agility: 5,
        img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/5e103e.png',
      },
      {
        id: 8,
        name: 'Brawler',
        price: 11,
        strength: 8,
        agility: 3,
        img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/67060c.png',
      },
      {
        id: 9,
        name: 'Infiltrator',
        price: 17,
        strength: 5,
        agility: 9,
        img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/ac3220.png',
      },
      {
        id: 10,
        name: 'Leader',
        price: 22,
        strength: 7,
        agility: 6,
        img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/e41f26.png',
      },
    ]);

    const removeZombieFighters = (zombieId) => {
      const newZombieArray = zombieFighters.filter(fighter => {
        // console.log('Fighter:', fighter)
        // console.log('Zombie Id:', zombieId)
        return fighter.id !== zombieId
      })
      setZombieFighters(newZombieArray)
      // console.log('New Zombie Array:', newZombieArray)
    }

    const removeTeamFighters = (teamId) => {
      const fighterToRemove = team.find(fighter => fighter.id === teamId)
      // console.log('Fighter to remove:', fighterToRemove, 'with teamId:', teamId)
      const newTeamArray = team.filter(fighter => {
        return fighter.id !== teamId
      })
      setTeam(newTeamArray)
      setMoney(money + fighterToRemove.price)
      setZombieFighters([...zombieFighters, fighterToRemove])
    }

  return (
    <>
      <main>
        <h1>Welcome to your rpg</h1>
        <h2>Money to Spend: ${money}</h2>
      </main>
      <div className='your-team'>
        <h2>Meet Your Team:</h2>
        <div className='total-strength'>
          <h3>Total Strength: {totalStrength}</h3>
          <h3>Total Agility: {totalAgility}</h3>
        </div>
        <ul>
          {team.length === 0 
            ? <h2>Choose Your Team!</h2> 
            : team.map((fighter) => (
              <li key={fighter.id}>
                <h2>{fighter.name}</h2>
                <img src={fighter.img} alt={fighter.name} />
                <p>Price: {fighter.price}</p>
                <p>Strength: {fighter.strength}</p>
                <p>Agility: {fighter.agility}</p>
                <button onClick={() => removeTeamFighters(fighter.id)}>Remove Fighter</button>
              </li>
            ))}
        </ul>

      </div>
      <div className='available-fighters'>
        <h2>Available Fighters:</h2>
        <ul>
          {zombieFighters.map((fighter) => (
            <li key={fighter.id}>
              <h2>{fighter.name}</h2>
              <img src={fighter.img} alt={fighter.name} />
              <p>Price: {fighter.price}</p>
              <p>Strength: {fighter.strength}</p>
              <p>Agility: {fighter.agility}</p>
              <button onClick={() => handleAddFighter(fighter)}>Add Fighter</button>
            </li>
          ))}
        </ul>
      </div>
    </>
  )
}

export default App