import React from 'react';
import './Players.css'

function Players({ player }) {
    return (
      <>
       <div className='container'>
        <div className='part'>
          <ul>
            <li className='player-name'>{player.player_name}</li>
            <li className='player-stat'>Points: {player.PTS}</li>
            <li className='player-stat'>Assists: {player.AST}</li>
            <li className='player-stat'>Steals: {player.STL}</li>
          </ul>
        </div>
      </div>
      </>
      );
  }
export default Players;
{/*****<Card key={player.id} className="player-card">
      <CardContent>
        <Typography variant="h6" className="player-name">
          {player.player_name}
        </Typography>
        <Grid container>
          <Grid item xs={6}>
            <Typography variant="body1" className="player-info">
              <strong>Team:</strong> {player.team}
            </Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography variant="body1" className="player-info">
              <strong>Points:</strong> {player.PTS}
            </Typography>
          </Grid>
        </Grid>
      </CardContent>
    </Card> */}
