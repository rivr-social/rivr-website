import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { AppBar, Toolbar, Button, Menu, MenuItem, Box, Popper, Paper, MenuList, Grow, IconButton, Drawer, List, ListItem, ListItemText, Collapse, useMediaQuery, useTheme, Slide, useScrollTrigger } from '@mui/material'
import { ExpandMore, Menu as MenuIcon, ExpandLess } from '@mui/icons-material'
import { organization } from '../data/organization'

function HideOnScroll({ children }: { children: React.ReactElement }) {
  const trigger = useScrollTrigger({
    target: undefined,
  })

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  )
}

export default function NavigationBar() {
  const router = useRouter()
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('md'))
  const [activeMenu, setActiveMenu] = useState<{
    id: string | null;
    anchorEl: HTMLElement | null;
  }>({ id: null, anchorEl: null });
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [mobileSubMenus, setMobileSubMenus] = useState<{[key: string]: boolean}>({
    about: false,
    features: false,
    community: false
  })

  // Check if a route is active
  const isActiveRoute = (paths: string[]) => {
    return paths.some(path => router.pathname === path)
  }

  // Handle mouse enter for menu items
  const handleMouseEnter = (event: React.MouseEvent<HTMLElement>, id: string) => {
    setActiveMenu({ id, anchorEl: event.currentTarget });
  }

  // Handle mouse leave for menu items and dropdowns
  const handleMouseLeave = () => {
    setActiveMenu({ id: null, anchorEl: null });
  }
  
  // Handle mouse enter for dropdown menu
  const handleMenuMouseEnter = () => {
    // Keep the current menu open
  }
  
  // Handle clicking a menu item
  const handleMenuItemClick = (href: string) => {
    router.push(href);
    handleMouseLeave();
    setMobileMenuOpen(false);
  }

  // Mobile menu handlers
  const handleMobileMenuToggle = () => {
    setMobileMenuOpen(!mobileMenuOpen)
  }

  const handleMobileSubMenuToggle = (menu: string) => {
    setMobileSubMenus(prev => ({
      ...prev,
      [menu]: !prev[menu]
    }))
  }



  return (
    <>
      <HideOnScroll>
        <AppBar position="fixed" sx={{ zIndex: 1300 }}>
          <Toolbar>
            <Link href="/" style={{ textDecoration: 'none', color: 'inherit', flexGrow: 1 }}>
              <img
                src="/wordmark.png"
                alt="Rivr Logo"
                style={{ height: 40, cursor: 'pointer' }}
              />
            </Link>

            {/* Mobile Hamburger Menu Button */}
            {isMobile && (
              <IconButton
                edge="end"
                color="inherit"
                aria-label="menu"
                onClick={handleMobileMenuToggle}
                sx={{ color: '#016964' }}
              >
                <MenuIcon />
              </IconButton>
            )}
        
            {/* Desktop Menu */}
            {!isMobile && (
              <div className="desktopMenu">
          <Link href="/" passHref>
            <Button 
              className="nav-button"
              sx={{ 
                color: isActiveRoute(['/']) ? '#db9936' : '#016964',
                '&:hover': { backgroundColor: 'rgba(1, 105, 100, 0.1)', color: '#db9936' }
              }}
            >
              Home
            </Button>
          </Link>
          
          {/* About Button with Dropdown */}
          <Box 
            onMouseEnter={(e) => handleMouseEnter(e as React.MouseEvent<HTMLElement>, 'about')}
            onMouseLeave={handleMouseLeave}
            sx={{ display: 'inline-block', position: 'relative' }}
          >
            <Button
              className="nav-button"
              endIcon={<ExpandMore />}
              onClick={() => handleMenuItemClick('/about')}
              sx={{ 
                color: isActiveRoute(['/about', '/manifesto', '/team', '/whitepaper', '/investors']) || activeMenu.id === 'about' 
                  ? '#db9936' 
                  : '#016964',
                backgroundColor: activeMenu.id === 'about' ? 'rgba(1, 105, 100, 0.1)' : 'transparent',
                '& .MuiSvgIcon-root': { 
                  color: activeMenu.id === 'about' ? '#db9936' : '#016964' 
                }
              }}
            >
              About
            </Button>
            <Popper
              open={activeMenu.id === 'about'}
              anchorEl={activeMenu.anchorEl}
              placement="bottom-start"
              transition
              disablePortal
              style={{ zIndex: 1400 }}
            >
              {({ TransitionProps }) => (
                <Grow {...TransitionProps} style={{ transformOrigin: 'top left' }}>
                  <Paper 
                    onMouseEnter={handleMenuMouseEnter}
                    onMouseLeave={handleMouseLeave}
                    sx={{ mt: 0.5, boxShadow: 3 }}
                  >
                    <MenuList>
                      <MenuItem onClick={() => handleMenuItemClick('/about#manifesto')} sx={{ px: 2, py: 1, '&:hover': { backgroundColor: 'rgba(1, 105, 100, 0.1)', color: '#db9936' } }}>Manifesto</MenuItem>
                      <MenuItem onClick={() => handleMenuItemClick('/about#team')} sx={{ px: 2, py: 1, '&:hover': { backgroundColor: 'rgba(1, 105, 100, 0.1)', color: '#db9936' } }}>Team</MenuItem>
                      <MenuItem onClick={() => handleMenuItemClick('/about#whitepaper')} sx={{ px: 2, py: 1, '&:hover': { backgroundColor: 'rgba(1, 105, 100, 0.1)', color: '#db9936' } }}>Whitepaper</MenuItem>
                      <MenuItem onClick={() => handleMenuItemClick('/about#investors')} sx={{ px: 2, py: 1, '&:hover': { backgroundColor: 'rgba(1, 105, 100, 0.1)', color: '#db9936' } }}>Investors</MenuItem>
                    </MenuList>
                  </Paper>
                </Grow>
              )}
            </Popper>
          </Box>
          
          {/* Features Button with Dropdown */}
          <Box 
            onMouseEnter={(e) => handleMouseEnter(e as React.MouseEvent<HTMLElement>, 'features')}
            onMouseLeave={handleMouseLeave}
            sx={{ display: 'inline-block', position: 'relative' }}
          >
            <Button
              className="nav-button"
              endIcon={<ExpandMore />}
              onClick={() => handleMenuItemClick('/features')}
              sx={{ 
                color: isActiveRoute(['/features', '/local-members', '/event-hosts', '/sellers', '/organizations']) || activeMenu.id === 'features' 
                  ? '#db9936' 
                  : '#016964',
                backgroundColor: activeMenu.id === 'features' ? 'rgba(1, 105, 100, 0.1)' : 'transparent',
                '& .MuiSvgIcon-root': { 
                  color: activeMenu.id === 'features' ? '#db9936' : '#016964' 
                }
              }}
            >
              Features
            </Button>
            <Popper
              open={activeMenu.id === 'features'}
              anchorEl={activeMenu.anchorEl}
              placement="bottom-start"
              transition
              disablePortal
              style={{ zIndex: 1400 }}
            >
              {({ TransitionProps }) => (
                <Grow {...TransitionProps} style={{ transformOrigin: 'top left' }}>
                  <Paper 
                    onMouseEnter={handleMenuMouseEnter}
                    onMouseLeave={handleMouseLeave}
                    sx={{ mt: 0.5, boxShadow: 3 }}
                  >
                    <MenuList>
                      <MenuItem onClick={() => handleMenuItemClick('/features#local-members')} sx={{ px: 2, py: 1, '&:hover': { backgroundColor: 'rgba(1, 105, 100, 0.1)', color: '#db9936' } }}>For Local Members</MenuItem>
                      <MenuItem onClick={() => handleMenuItemClick('/features#event-hosts')} sx={{ px: 2, py: 1, '&:hover': { backgroundColor: 'rgba(1, 105, 100, 0.1)', color: '#db9936' } }}>For Event Hosts</MenuItem>
                      <MenuItem onClick={() => handleMenuItemClick('/features#sellers')} sx={{ px: 2, py: 1, '&:hover': { backgroundColor: 'rgba(1, 105, 100, 0.1)', color: '#db9936' } }}>For Sellers</MenuItem>
                      <MenuItem onClick={() => handleMenuItemClick('/features#organizations')} sx={{ px: 2, py: 1, '&:hover': { backgroundColor: 'rgba(1, 105, 100, 0.1)', color: '#db9936' } }}>For Organizations</MenuItem>
                      <MenuItem onClick={() => handleMenuItemClick('/features#flowpass')} sx={{ px: 2, py: 1, '&:hover': { backgroundColor: 'rgba(1, 105, 100, 0.1)', color: '#db9936' } }}>FlowPass</MenuItem>
                    </MenuList>
                  </Paper>
                </Grow>
              )}
            </Popper>
          </Box>
          
          {/* Community Button with Dropdown */}
          <Box 
            onMouseEnter={(e) => handleMouseEnter(e as React.MouseEvent<HTMLElement>, 'community')}
            onMouseLeave={handleMouseLeave}
            sx={{ display: 'inline-block', position: 'relative' }}
          >
            <Button
              className="nav-button"
              endIcon={<ExpandMore />}
              onClick={() => handleMenuItemClick('/community')}
              sx={{ 
                color: isActiveRoute(['/community', '/impact-stories', '/blog']) || activeMenu.id === 'community' 
                  ? '#db9936' 
                  : '#016964',
                backgroundColor: activeMenu.id === 'community' ? 'rgba(1, 105, 100, 0.1)' : 'transparent',
                '& .MuiSvgIcon-root': { 
                  color: activeMenu.id === 'community' ? '#db9936' : '#016964' 
                }
              }}
            >
              Community
            </Button>
            <Popper
              open={activeMenu.id === 'community'}
              anchorEl={activeMenu.anchorEl}
              placement="bottom-start"
              transition
              disablePortal
              style={{ zIndex: 1400 }}
            >
              {({ TransitionProps }) => (
                <Grow {...TransitionProps} style={{ transformOrigin: 'top left' }}>
                  <Paper 
                    onMouseEnter={handleMenuMouseEnter}
                    onMouseLeave={handleMouseLeave}
                    sx={{ mt: 0.5, boxShadow: 3 }}
                  >
                    <MenuList>
                      <MenuItem onClick={() => handleMenuItemClick('/community#impact-stories')} sx={{ px: 2, py: 1, '&:hover': { backgroundColor: 'rgba(1, 105, 100, 0.1)', color: '#db9936' } }}>Impact Stories</MenuItem>
                      <MenuItem onClick={() => handleMenuItemClick('/community#blog')} sx={{ px: 2, py: 1, '&:hover': { backgroundColor: 'rgba(1, 105, 100, 0.1)', color: '#db9936' } }}>Blog</MenuItem>
                    </MenuList>
                  </Paper>
                </Grow>
              )}
            </Popper>
          </Box>
          
          <Link href="/download-app" passHref>
            <Button 
              className="nav-button"
              sx={{ 
                color: isActiveRoute(['/download-app']) ? '#db9936' : '#016964',
                '&:hover': { backgroundColor: 'rgba(1, 105, 100, 0.1)', color: '#db9936' }
              }}
            >
              Download App
            </Button>
          </Link>
              </div>
            )}
          </Toolbar>
        </AppBar>
      </HideOnScroll>

      {/* Mobile Drawer Menu */}
      <Drawer
        anchor="right"
        open={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
        sx={{
          '& .MuiDrawer-paper': {
            width: 280,
            bgcolor: 'rgba(0, 0, 0, 0.9)',
            color: 'white !important',
            '& .MuiListItemText-primary': {
              color: 'white !important'
            },
            '& .MuiSvgIcon-root': {
              color: 'white !important'
            }
          }
        }}
      >
        <List sx={{ pt: 4 }}>
          <ListItem 
            button 
            onClick={() => handleMenuItemClick('/')}
            sx={{ 
              color: 'white',
              '&:hover': { 
                backgroundColor: 'rgba(219, 153, 54, 0.1)', 
                color: '#db9936' 
              }
            }}
          >
            <ListItemText 
              primary="Home" 
              sx={{ 
                color: isActiveRoute(['/']) ? '#db9936 !important' : 'white !important',
                '&:hover': { color: '#db9936 !important' }
              }} 
            />
          </ListItem>

          {/* About Section */}
          <ListItem 
            button 
            onClick={() => handleMobileSubMenuToggle('about')}
            sx={{ 
              color: 'white',
              '&:hover': { 
                backgroundColor: 'rgba(219, 153, 54, 0.1)', 
                color: '#db9936' 
              }
            }}
          >
            <ListItemText 
              primary="About" 
              sx={{ 
                color: isActiveRoute(['/about', '/manifesto', '/team', '/whitepaper', '/investors']) ? '#db9936 !important' : 'white !important'
              }} 
            />
            <Box sx={{ color: 'white !important' }}>
              {mobileSubMenus.about ? <ExpandLess /> : <ExpandMore />}
            </Box>
          </ListItem>
          <Collapse in={mobileSubMenus.about} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItem 
                button 
                sx={{ 
                  pl: 4,
                  color: 'white',
                  '&:hover': { 
                    backgroundColor: 'rgba(219, 153, 54, 0.1)', 
                    color: '#db9936' 
                  }
                }} 
                onClick={() => handleMenuItemClick('/about#manifesto')}
              >
                <ListItemText primary="Manifesto" sx={{ color: 'white !important' }} />
              </ListItem>
              <ListItem 
                button 
                sx={{ 
                  pl: 4,
                  color: 'white',
                  '&:hover': { 
                    backgroundColor: 'rgba(219, 153, 54, 0.1)', 
                    color: '#db9936' 
                  }
                }} 
                onClick={() => handleMenuItemClick('/about#team')}
              >
                <ListItemText primary="Team" sx={{ color: 'white !important' }} />
              </ListItem>
              <ListItem 
                button 
                sx={{ 
                  pl: 4,
                  color: 'white',
                  '&:hover': { 
                    backgroundColor: 'rgba(219, 153, 54, 0.1)', 
                    color: '#db9936' 
                  }
                }} 
                onClick={() => handleMenuItemClick('/about#whitepaper')}
              >
                <ListItemText primary="Whitepaper" sx={{ color: 'white !important' }} />
              </ListItem>
              <ListItem 
                button 
                sx={{ 
                  pl: 4,
                  color: 'white',
                  '&:hover': { 
                    backgroundColor: 'rgba(219, 153, 54, 0.1)', 
                    color: '#db9936' 
                  }
                }} 
                onClick={() => handleMenuItemClick('/about#investors')}
              >
                <ListItemText primary="Investors" sx={{ color: 'white !important' }} />
              </ListItem>
            </List>
          </Collapse>

          {/* Features Section */}
          <ListItem 
            button 
            onClick={() => handleMobileSubMenuToggle('features')}
            sx={{ 
              color: 'white',
              '&:hover': { 
                backgroundColor: 'rgba(219, 153, 54, 0.1)', 
                color: '#db9936' 
              }
            }}
          >
            <ListItemText 
              primary="Features" 
              sx={{ 
                color: isActiveRoute(['/features', '/local-members', '/event-hosts', '/sellers', '/organizations']) ? '#db9936 !important' : 'white !important'
              }} 
            />
            <Box sx={{ color: 'white !important' }}>
              {mobileSubMenus.features ? <ExpandLess /> : <ExpandMore />}
            </Box>
          </ListItem>
          <Collapse in={mobileSubMenus.features} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItem 
                button 
                sx={{ 
                  pl: 4,
                  color: 'white',
                  '&:hover': { 
                    backgroundColor: 'rgba(219, 153, 54, 0.1)', 
                    color: '#db9936' 
                  }
                }} 
                onClick={() => handleMenuItemClick('/features#local-members')}
              >
                <ListItemText primary="For Local Members" sx={{ color: 'white !important' }} />
              </ListItem>
              <ListItem 
                button 
                sx={{ 
                  pl: 4,
                  color: 'white',
                  '&:hover': { 
                    backgroundColor: 'rgba(219, 153, 54, 0.1)', 
                    color: '#db9936' 
                  }
                }} 
                onClick={() => handleMenuItemClick('/features#event-hosts')}
              >
                <ListItemText primary="For Event Hosts" sx={{ color: 'white !important' }} />
              </ListItem>
              <ListItem 
                button 
                sx={{ 
                  pl: 4,
                  color: 'white',
                  '&:hover': { 
                    backgroundColor: 'rgba(219, 153, 54, 0.1)', 
                    color: '#db9936' 
                  }
                }} 
                onClick={() => handleMenuItemClick('/features#sellers')}
              >
                <ListItemText primary="For Sellers" sx={{ color: 'white !important' }} />
              </ListItem>
              <ListItem 
                button 
                sx={{ 
                  pl: 4,
                  color: 'white',
                  '&:hover': { 
                    backgroundColor: 'rgba(219, 153, 54, 0.1)', 
                    color: '#db9936' 
                  }
                }} 
                onClick={() => handleMenuItemClick('/features#organizations')}
              >
                <ListItemText primary="For Organizations" sx={{ color: 'white !important' }} />
              </ListItem>
              <ListItem 
                button 
                sx={{ 
                  pl: 4,
                  color: 'white',
                  '&:hover': { 
                    backgroundColor: 'rgba(219, 153, 54, 0.1)', 
                    color: '#db9936' 
                  }
                }} 
                onClick={() => handleMenuItemClick('/features#flowpass')}
              >
                <ListItemText primary="FlowPass" sx={{ color: 'white !important' }} />
              </ListItem>
            </List>
          </Collapse>

          {/* Community Section */}
          <ListItem 
            button 
            onClick={() => handleMobileSubMenuToggle('community')}
            sx={{ 
              color: 'white',
              '&:hover': { 
                backgroundColor: 'rgba(219, 153, 54, 0.1)', 
                color: '#db9936' 
              }
            }}
          >
            <ListItemText 
              primary="Community" 
              sx={{ 
                color: isActiveRoute(['/community', '/impact-stories', '/blog']) ? '#db9936 !important' : 'white !important'
              }} 
            />
            <Box sx={{ color: 'white !important' }}>
              {mobileSubMenus.community ? <ExpandLess /> : <ExpandMore />}
            </Box>
          </ListItem>
          <Collapse in={mobileSubMenus.community} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItem 
                button 
                sx={{ 
                  pl: 4,
                  color: 'white',
                  '&:hover': { 
                    backgroundColor: 'rgba(219, 153, 54, 0.1)', 
                    color: '#db9936' 
                  }
                }} 
                onClick={() => handleMenuItemClick('/community#impact-stories')}
              >
                <ListItemText primary="Impact Stories" sx={{ color: 'white !important' }} />
              </ListItem>
              <ListItem 
                button 
                sx={{ 
                  pl: 4,
                  color: 'white',
                  '&:hover': { 
                    backgroundColor: 'rgba(219, 153, 54, 0.1)', 
                    color: '#db9936' 
                  }
                }} 
                onClick={() => handleMenuItemClick('/community#blog')}
              >
                <ListItemText primary="Blog" sx={{ color: 'white !important' }} />
              </ListItem>
            </List>
          </Collapse>

          <ListItem 
            button 
            onClick={() => handleMenuItemClick('/download-app')}
            sx={{ 
              color: 'white',
              '&:hover': { 
                backgroundColor: 'rgba(219, 153, 54, 0.1)', 
                color: '#db9936' 
              }
            }}
          >
            <ListItemText 
              primary="Download App" 
              sx={{ 
                color: isActiveRoute(['/download-app']) ? '#db9936 !important' : 'white !important'
              }} 
            />
          </ListItem>
        </List>
      </Drawer>
    </>
  )
}