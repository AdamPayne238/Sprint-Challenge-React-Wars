import React, { useEffect, useState } from "react";
import axios from "axios";
import StartWarsCard from './StarWarsCard.js';
import { Container, Grid } from "semantic-ui-react";



function CharacterList() {
  // NOTE: The value given to setState() must be of the same type as your vale is expected to be
  const [character, setCharacter] = useState([]);

  useEffect(() => {
    axios
      .get(`https://swapi.co/api/people/`, {
        params: {}
      })
      .then(response => {
        const character = response.data.results;
        console.log("response", response.data.results);
        setCharacter(character);
      });
  }, []);

  return (
    <Container text>
    <Grid relaxed columns={3} divided="vertically">
      <Grid.Row padded="vertically" columns={3}>
          {character.map(characters => {
            return (
              <StartWarsCard
                name={characters.name}
                height={characters.height}
                mass={characters.mass}
                gender={characters.gender}
              />
            );
          })}
        </Grid.Row>
      </Grid>
    </Container>
  );
}

export default CharacterList;