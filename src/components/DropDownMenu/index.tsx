import { Button, Menu, MenuItem } from '@mui/material'
import { makeStyles } from '@mui/styles'
import { useState, ReactNode, MouseEvent } from 'react'

import Link from 'components/NextLink'

const useStyles = makeStyles(theme => ({
  menuItem: {
    fontSize: 16,
    fontFamily: 'museo-sans',
    textDecoration: 'none',
    borderRadius: 85,
    transition: '.2s ease-in 0s',
    backgroundColor: 'none',
    color: theme.palette.mode === 'dark' ? '#FFF' : 'rgba(0, 0, 0, 0.5)',
    '&:hover': {
      textDecoration: 'none',
      color: '#05EEFF'
    },
    '&:focus': {
      textDecoration: 'none'
    },
    [theme.breakpoints.down('lg')]: {
      paddingLeft: 0
    }
  }
}))

type DropDownMenuProps = {
  menuItems: MenuItemProp[]
  buttonLabel: string
  buttonColor?: 'inherit' | 'primary' | 'secondary'
  buttonVariant?: 'contained' | 'outlined' | 'text'
}

type MenuItemProp = {
  label: string
  component?: ReactNode
  href?: string
}
function DropdownMenu({ menuItems, buttonLabel, buttonColor, buttonVariant }: DropDownMenuProps) {
  const classes = useStyles()
  const [dropdownAnchor, setDropdownAnchor] = useState<null | HTMLElement>(null)

  const handleOpenMenu = (event: MouseEvent<HTMLButtonElement>) => {
    setDropdownAnchor(event.currentTarget)
  }

  const handleCloseMenu = () => {
    setDropdownAnchor(null)
  }

  return (
    <div>
      <Button
        aria-haspopup="true"
        onClick={handleOpenMenu}
        variant={buttonVariant || 'contained'}
        color={buttonColor || 'primary'}
        className={classes.menuItem}
        sx={{
          textTransform: 'none'
        }}
      >
        {buttonLabel}
      </Button>
      <Menu
        anchorEl={dropdownAnchor}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'center'
        }}
        keepMounted
        transformOrigin={{
          vertical: 'top',
          horizontal: 'center'
        }}
        open={Boolean(dropdownAnchor)}
        onClose={handleCloseMenu}
      >
        {menuItems.map((option, index) => {
          if (option.component) {
            return (
              <MenuItem key={index} onClick={handleCloseMenu}>
                {option.component}
              </MenuItem>
            )
          } else if (option.href) {
            return (
              <Link key={index} className={classes.menuItem} href={option.href}>
                <MenuItem onClick={handleCloseMenu}>{option.label}</MenuItem>
              </Link>
            )
          }
        })}
      </Menu>
    </div>
  )
}

export default DropdownMenu
