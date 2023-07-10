import {
    Dialog,
    DialogContent,
    DialogProps,
    DialogTitle,
    Fade,
    Grid,
    IconButton,
    Box
  } from '@mui/material'
  import { makeStyles } from '@mui/styles'
  import { PropsWithChildren } from 'react'
  
  import CloseIcon from 'containers/TeamContainers/PastContributorsSection/assets/Close.svg'
  
  const useStyles = makeStyles(theme => ({
    closeButton: {
      position: 'absolute',
      right: theme.spacing(2),
      top: theme.spacing(2.5),
      fill: theme.palette.mode === 'dark' ? '#FFFFFF' : '#06043E'
    },
    dialogTitle: {
      textAlign: 'center',
      padding: theme.spacing(2)
    }
  }))
  
  type JobDialogProps = PropsWithChildren<
    {
      title: string
      onClose: () => void
    } & DialogProps
  >
  
  const JobDialog = ({ title, onClose, children, ...rest }: JobDialogProps) => {
    const classes = useStyles()
  
    return (
      <Dialog
        fullWidth={true}
        maxWidth="lg"
        TransitionComponent={Fade}
        transitionDuration={500}
        {...rest}
      >
        <DialogTitle className={classes.dialogTitle}>
          {title}
          {onClose ? (
            <IconButton aria-label="close" onClick={onClose} className={classes.closeButton}>
              <CloseIcon />
            </IconButton>
          ) : null}
        </DialogTitle>
        <DialogContent>
          <Grid container justifyContent="center" alignItems="center" spacing={3} xs={12}>
            <Box sx={{ p: 5 }}>{children}</Box>
          </Grid>
        </DialogContent>
      </Dialog>
    )
  }
  
  export default JobDialog
  