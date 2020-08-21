import React from 'react';
import { Button, Card, CardContent, CardActions, Typography } from '@material-ui/core'; 
// componentes propios de material ui - ej documentacion  Card ->  https://material-ui.com/components/cards/

import './index.scss';

class Home extends React.PureComponent {
  render() {
    const { greeting = '' } = this.props; // La prop greeting la recibí por destructuración
    // Tambien puede accederse como this.props.greeting
    return <div className="home">
      <Card>
        <CardContent variant="outlined">
        <Typography variant="h5" component="h2">
          {greeting}
        </Typography>
        </CardContent>
        <CardActions>
          <Button color="primary" variant="contained">
            Dismiss
          </Button>
        </CardActions>
      </Card>
    </div>
  }
}
export default Home;