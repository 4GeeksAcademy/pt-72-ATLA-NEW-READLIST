import React, {useEffect, useState, useContext} from 'react'
import { Context } from '../store/appContext';
import { useParams } from 'react-router'

export default function CharacterDescription() {
    const { id } = useParams()
    const [character, setCharacter] = useState({});
    const {store, actions} = useContext(Context);
  
    useEffect(() => {
      async function getCharacter() {
        let response = await fetch(`https://last-airbender-api.fly.dev/api/v1/characters/${id}`)
        let data = await response.json()
        setCharacter(data)
      }
      getCharacter()
    }, [])

  return (
    <div>
        <img src={character.photoUrl}/>
        <h1>Name:</h1> 
        <h6>{character.name}</h6>
        <h1>Love:</h1>
        <h6>{character.love}</h6>
        <h1>Profession:</h1>
        <h6>{character.proffession}</h6>


    </div>
  )
}
