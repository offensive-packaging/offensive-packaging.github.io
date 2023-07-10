import { CardActionArea, Grid, Typography } from '@mui/material'
import { makeStyles } from '@mui/styles'

import contribute from './contribute'

import PFeatureBlock from 'components/PFeatureBlock'

const useStyles = makeStyles(theme => ({
  cardArea: {
    borderRadius: theme.spacing(3),
    height: theme.spacing(35)
  },
  headingSubTitle: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(6.5)
  },
  developBlock: {
    marginTop: 154
  },
  icon: {
    width: 32,
    height: 32,
    fill: theme.palette.mode === 'light' ? '#FFFFFF' : '#06043E'
  },
  iconWrapper: {
    width: 64,
    height: 64,
    padding: 16,
    background: theme.palette.mode === 'light' ? '#03232E' : '#FFFFFF',
    borderRadius: 6,
    marginBottom: 20
  }
}))

const GetInvolvedSection = () => {
  const classes = useStyles()

  return (
    <Grid container item xs={12} md={9} spacing={4} justifyContent="center">
      <Grid
        item
        container
        xs={10}
        justifyContent="center"
        alignItems="center"
        direction="column"
        wrap="nowrap"
        className={classes.developBlock}
      >
        <Typography variant="h1" align="center" paragraph>
          Contribute to the Parrot Project
        </Typography>
        <Typography className={classes.headingSubTitle} variant="subtitle2Semi" align="center">
          ParrotOS was born as a fully open source project, anyone can see what is inside.
        </Typography>
      </Grid>
      {contribute.map((data, i) => (
        <Grid item sm={12} lg={6} key={`card-${i}`}>
          <CardActionArea className={classes.cardArea} href={data.url}>
            <PFeatureBlock title={data.title} Icon={data.icon}>
              {data.description}
            </PFeatureBlock>
          </CardActionArea>
        </Grid>
      ))}
    </Grid>
  )
}

export default GetInvolvedSection
