import { Grid, Typography } from '@mui/material'
import { makeStyles } from '@mui/styles'
import { NextPage } from 'next'

import JobsSection from 'containers/CareersContainers/JobsSection'
import PerksSection from 'containers/CareersContainers/PerksSection'
import GetInvolvedSection from 'containers/ContributeContainers/GetInvolvedSection'

const useStyles = makeStyles(theme => ({
  root: {
    marginTop: 100
  },
  headingSubTitle: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(6.5)
  },
  title: {
    marginBlock: theme.spacing(8),
    [theme.breakpoints.down('md')]: {
      marginBlock: 50
    }
  },
  comingSoonSubtitle: {
    paddingTop: theme.spacing(10)
  }
}))

const Careers: NextPage = () => {
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
          Careers at ParrotOS
        </Typography>
        <Typography className={classes.headingSubTitle} variant="subtitle2Semi" align="center">
          Parrot Security (ParrotOS) is a 10 years old Free and Open source GNU/Linux distribution
          based on <strong>Debian Stable</strong>. The system is designed to be familiar for the
          security expert and easy to use for the new entry student. To date, the operating system
          has more than 400.000 active users.
        </Typography>
        <Typography className={classes.headingSubTitle} variant="h4" align="center" paragraph>
          Perks of working for an Open Source Project
        </Typography>
        <PerksSection />
        <Typography className={classes.title} variant="h2" align="center" paragraph>
          Open positions
        </Typography>
      </Grid>
      <JobsSection />
      <GetInvolvedSection />
    </Grid>
  )
}

export default Careers
