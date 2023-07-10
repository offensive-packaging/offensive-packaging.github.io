import { Grid, Typography } from '@mui/material'
import { makeStyles } from '@mui/styles'
import { NextPage } from 'next'

import SocialsSection from 'containers/CommunityContainers/SocialsSection'
import GetInvolvedSection from 'containers/ContributeContainers/GetInvolvedSection'

const useStyles = makeStyles(theme => ({
  root: {
    marginTop: 100
  },
  headingSubTitle: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(6.5)
  },
  features: {
    marginTop: 88,
    [theme.breakpoints.down('md')]: {
      marginTop: 50
    }
  },
  developBlock: {
    marginTop: 154
  }
}))

const Community: NextPage = () => {
  const classes = useStyles()
  return (
    <Grid container className={classes.root} justifyContent="center">
      <Grid
        item
        container
        xs={10}
        justifyContent="center"
        alignItems="center"
        direction="column"
        wrap="nowrap"
      >
        <Typography variant="h1" align="center" paragraph>
          Join the Parrot Community
        </Typography>
        <Typography className={classes.headingSubTitle} variant="subtitle2Semi" align="center">
          Meet cybersecurity enthusiasts united by privacy and open source
        </Typography>
      </Grid>
      <SocialsSection className={classes.features} />
      <GetInvolvedSection />
    </Grid>
  )
}

export default Community
