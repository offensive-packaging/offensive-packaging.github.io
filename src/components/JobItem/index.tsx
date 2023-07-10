import { Paper, Stack, Typography, Box } from '@mui/material'
import { makeStyles } from '@mui/styles'
import { useState, useEffect } from 'react'
import ReactMarkdown from 'react-markdown'

import PButton from 'components/PButton'
import JobsDialog from 'src/components/PDialog/Jobs'

const useStyles = makeStyles(theme => ({
  paper: {
    margin: theme.spacing(2),
    color: theme.palette.mode === 'dark' ? 'rgba(255,255,255,0.5)' : 'rgba(0,0,0,0.5)',
    padding: theme.spacing(4),
    width: 'auto'
  },
  text: {
    color: theme.palette.mode === 'dark' ? 'rgba(255,255,255,1)' : 'rgba(0,0,0,1)',
    paddingBlock: theme.spacing(1.5)
  },
  button: {
    marginLeft: theme.spacing(20)
  }
}))

const JobItem = ({
  data,
  openDialogs,
  handleClickOpen,
  handleClose
}: {
  data: {
    title: string
    location: string
    link: string
    content: string
  }
  openDialogs: string[]
  handleClickOpen: (title: string) => void
  handleClose: (title: string) => void
}) => {
  const classes = useStyles()

  const [markdownContent, setMarkdownContent] = useState<string | null>(null)

  const fetchMarkdownContent = async () => {
    try {
      const response = await fetch(data.content)
      const content = await response.text()
      setMarkdownContent(content)
    } catch (error) {
      console.error('Error fetching Markdown file:', error)
    }
  }

  useEffect(() => {
    fetchMarkdownContent()
  }, [data.content])

  return (
    <Paper className={classes.paper} elevation={0}>
      <Stack direction={{ xs: 'column', sm: 'row' }} spacing={{ xs: 2, sm: 24 }}>
        <Typography variant="subtitle2" align="center" className={classes.text}>
          <strong>{data.title}</strong>
        </Typography>
        <Box display="flex" flexGrow={1}>
          <Box flexGrow={1} />
          {data.link !== '' ? (
            <>
              <Typography variant="subtitle2" align="center" className={classes.text}>
                {data.location}
              </Typography>
              <PButton
                className={classes.button}
                variant="outlined"
                color="primary"
                size="medium"
                onClick={() => handleClickOpen(data.title)}
              >
                Apply
              </PButton>
            </>
          ) : (
            <PButton variant="contained" color="primary" disabled>
              Apply
            </PButton>
          )}
        </Box>
        {openDialogs.includes(data.title) && (
          <JobsDialog
            open={true}
            onClose={() => handleClose(data.title)}
            fullWidth={true}
            title={data.title}
          >
            {markdownContent ? (
              <ReactMarkdown>{markdownContent}</ReactMarkdown>
            ) : (
              <p>Loading Markdown content...</p>
            )}
            <Box sx={{ paddingY: 3 }}>
              <Typography gutterBottom>
                {data.link.includes('mailto')
                  ? 'If you are interested please send us an email attaching your CV.'
                  : 'If you are interested please fill out the required fields at the following form.'}
              </Typography>
              <PButton variant="contained" color="primary" to={data.link}>
                {data.link.includes('mailto') ? 'Send CV' : 'Apply'}
              </PButton>
            </Box>
          </JobsDialog>
        )}
      </Stack>
    </Paper>
  )
}

export default JobItem
