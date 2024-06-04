import { Card, CardContent, Grid, Typography } from '@mui/material'
import React from 'react'
import { useStyles } from './CardStyle'

const CardGridComponent :React.FC<cardProps> = (props) => {
  return (
    <>
      <Grid item xs={12} sm={6} md={3}>
          <Card style={{ backgroundColor: `${props.backgroundcolor}`, color: 'black' }}>
            <CardContent style={useStyles.cardContent}>
              <Typography variant="h5" component="h2">
                {props.name}
              </Typography>
              <Typography variant="h5">{props.countvar}</Typography>
            </CardContent>
          </Card>
        </Grid>
    </>
  )
}

export default CardGridComponent
