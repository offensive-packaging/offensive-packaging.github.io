import { Grid, Card, CardContent } from '@mui/material'
import { useState } from 'react'

import careers from './careers'

import JobItem from 'components/JobItem'

const JobsSection = () => {
  const [openDialogs, setOpenDialogs] = useState<string[]>([])

  const handleClickOpen = (title: string) => {
    setOpenDialogs((prevOpenDialogs: string[]) => [...prevOpenDialogs, title])
  }

  const handleClose = (title: string) => {
    setOpenDialogs((prevOpenDialogs: string[]) =>
      prevOpenDialogs.filter((dialogTitle: string) => dialogTitle !== title)
    )
  }

  const careersData = careers.map((data, i) => (
    <JobItem
      key={i}
      data={data}
      openDialogs={openDialogs}
      handleClickOpen={handleClickOpen}
      handleClose={handleClose}
    />
  ))

  return (
    <Grid container alignItems="center" direction="column" justifyContent="center" wrap="nowrap">
      <Card>
        <CardContent>{careersData}</CardContent>
      </Card>
    </Grid>
  )
}

export default JobsSection
