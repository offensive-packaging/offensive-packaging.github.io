import { Card, Grid } from '@mui/material'
import { makeStyles } from '@mui/styles'

import contribute from './perks'

import PFeatureBlock from 'components/PFeatureBlock'

const useStyles = makeStyles(theme => ({
  card: {
    borderRadius: theme.spacing(3),
    height: '100%'
  }
}))

const GetInvolvedSection = () => {
  const classes = useStyles()

  return (
    <Grid container item xs={12} md={9} spacing={4} justifyContent="center">
      {contribute.map((data, i) => (
        <Grid item sm={12} lg={6} key={`card-${i}`}>
          <Card className={classes.card}>
            <PFeatureBlock title={data.title} Icon={data.icon}>
              {data.description}
            </PFeatureBlock>
          </Card>
        </Grid>
      ))}
    </Grid>
  )
}

export default GetInvolvedSection
