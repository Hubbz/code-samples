import React, { useState, useEffect, useContext } from 'react';
import NextImage from 'next/image';
import NextLink from 'next/link';
import { useRouter } from 'next/router';
import {
  AppBar,
  Box,
  Drawer,
  Grid,
  GridItem,
  Icon,
  Menu,
  Section,
  Spacer,
  Typography,
  styled,
  useTheme,
} from '@x/x'; // Sensitive information hidden.
import { Toolbar } from '@mui/material';
import { clsx } from 'clsx';
import SearchBar from '~/components/SearchBar';
import Button from '~/components/Button';
import LinkWrapper from '~/helpers/LinkWrapper';
import Theme from '~/theme/Hub/Hub';
import type { HeaderProps } from './Header.types';
import styles from './Header.css';
import { primaryMenuHorizontal, primaryMenuVertical, topBarMenu } from './HeaderMenuStyles.css';
import { AuthContext } from '~/pages/_app';

// Mock data.
import {
  topBarMenuData,
  primaryMenuData,
  mobileExtraMenuData,
  accountSignedOutData,
  accountSignedInData,
} from './data';

// Provide custom styling for various menus.
const PrimaryMenuHorizontal = styled(Menu)(primaryMenuHorizontal);
const PrimaryMenuVertical = styled(Menu)(primaryMenuVertical);
const TopBarMenu = styled(Menu)(topBarMenu);

const Header = ({
  menuDrawerExpanded = false,
  searchDrawerExpanded = false,
  className,
}: HeaderProps) => {
  const { authStatus } = useContext(AuthContext);
  const router = useRouter();
  const theme = useTheme<typeof Theme>();
  const [mobileMenuOpen, setMobileOpen] = useState(menuDrawerExpanded);
  const [searchOpen, setSearchOpen] = useState(searchDrawerExpanded);

  // Handle the mobile menu drawer.
  const handleMenuDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);

    if (!mobileMenuOpen && searchOpen) {
      setSearchOpen((prevState) => !prevState);
    }
  };

  // Handle the search drawer.
  const handleSearchDrawerToggle = () => {
    setSearchOpen((prevState) => !prevState);

    if (!searchOpen && mobileMenuOpen) {
      setMobileOpen((prevState) => !prevState);
    }
  };

  // Makes sure the menu and search drawers close when the route changes.
  useEffect(() => {
    const handleRouteChange = () => {
      setMobileOpen(false);
      setSearchOpen(false);
    };

    router.events.on('routeChangeStart', handleRouteChange);

    return () => {
      router.events.off('routeChangeStart', handleRouteChange);
    };
    // Only run once.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // The mobile menu drawer content.
  const menuDrawerContent = (
    <Box>
      <Section paddingTop="sm" contentMaxWidth="md">
        <Grid>
          <GridItem textMode="light">
            <PrimaryMenuVertical
              data={primaryMenuData}
              label="primary"
              variant="primary"
              orientation="vertical"
              linkWrapper={LinkWrapper}
            />
            <Spacer height={theme.tokens.spacing.sm} />
            <PrimaryMenuVertical
              data={mobileExtraMenuData}
              label="additional"
              variant="primary"
              orientation="vertical"
              linkWrapper={LinkWrapper}
            />
            <Spacer height={theme.tokens.spacing.sm} />
            <PrimaryMenuVertical
              data={authStatus ? accountSignedInData : accountSignedOutData}
              label="external links"
              variant="primary"
              orientation="vertical"
              linkWrapper={LinkWrapper}
            />
            <Spacer height={theme.tokens.spacing.sm} />
            <PrimaryMenuVertical
              data={topBarMenuData}
              label="external links"
              variant="primary"
              orientation="vertical"
              linkWrapper={LinkWrapper}
            />
          </GridItem>
        </Grid>
      </Section>
    </Box>
  );

  // The search drawer content.
  const searchDrawerContent = (
    <Box>
      <Section paddingTop="sm" paddingBottom={false}>
        <Grid direction="column">
          <GridItem
            sx={{
              display: 'flex',
              justifyContent: 'center',
              '& .comp-searchbar-wrapper': {
                width: 'auto',
              },
            }}
          >
            <SearchBar variant="header" />
          </GridItem>
          <GridItem>
            <Spacer height={theme.tokens.spacing.xxxs} />
          </GridItem>
          <GridItem sx={{ display: 'flex', justifyContent: 'center' }}>
            <Button
              size="small"
              variant="text"
              color="inverse"
              aria-label="close site search"
              onClick={handleSearchDrawerToggle}
            >
              Close Search <Icon name="close" variant="material" size={24} />
            </Button>
          </GridItem>
        </Grid>
      </Section>
    </Box>
  );

  return (
    <AppBar className={clsx('comp-header', className)} color="transparent" position="sticky">
      <Toolbar className="comp-header-toolbar" disableGutters>
        {/* Top bar. */}
        <Section
          paddingTop={false}
          paddingBottom={false}
          disableGutters
          backgroundColor={theme.tokens.colors.paletteBackgroundPaper}
          className="comp-header-toolbar__top"
        >
          <Grid justifyContent="space-between" alignItems="center">
            <GridItem xs>
              <TopBarMenu
                data={topBarMenuData}
                align="left"
                label="external links"
                variant="alt-1"
                orientation="horizontal"
                linkWrapper={LinkWrapper}
                dropdownOnHover
              />
            </GridItem>
            <GridItem xs="auto">
              <TopBarMenu
                data={authStatus ? accountSignedInData : accountSignedOutData}
                align="right"
                label="account"
                variant="alt-1"
                orientation="horizontal"
                linkWrapper={LinkWrapper}
                dropdownOnHover
              />
            </GridItem>
          </Grid>
        </Section>

        {/* Main header. */}
        <Section
          paddingTop={false}
          paddingBottom={false}
          backgroundColor={theme.tokens.colors.paletteBackgroundDark}
          disableGutters
          className="comp-header-toolbar__main"
        >
          <Grid>
            {/* Main header area on mobile. */}
            <GridItem xs className="comp-header-toolbar__main-mobile" textMode="light">
              <Grid justifyContent="space-between" alignItems="center">
                <GridItem xs>
                  <NextLink href="/">
                    <NextImage
                      src="/assets/graphics/Brand/logo.svg"
                      alt="Company name"
                      width={308}
                      height={36}
                      className="header-logo"
                    />
                  </NextLink>
                </GridItem>
                <GridItem xs="auto">
                  <Button
                    size="small"
                    variant="text"
                    color="inverse"
                    aria-label={searchOpen ? 'close site search' : 'open site search'}
                    onClick={handleSearchDrawerToggle}
                  >
                    <Icon name={searchOpen ? 'close' : 'search'} variant="material" size={24} />
                  </Button>
                  <Button
                    size="small"
                    variant="text"
                    color="inverse"
                    aria-label={mobileMenuOpen ? 'close site menu' : 'open site menu'}
                    onClick={handleMenuDrawerToggle}
                  >
                    <Typography variant="body2" className="menu-label">
                      Menu
                    </Typography>
                    <Icon name={mobileMenuOpen ? 'close' : 'menu'} variant="material" size={24} />
                  </Button>
                </GridItem>
              </Grid>
            </GridItem>

            {/* Main header area on desktop. */}
            <GridItem className="comp-header-toolbar__main-desktop">
              <Grid justifyContent="space-between" alignItems="center">
                <GridItem xs>
                  <NextLink href="/">
                    <NextImage
                      src="/assets/graphics/Brand/logo.svg"
                      alt="Company name"
                      width={308}
                      height={36}
                      className="header-logo"
                    />
                  </NextLink>
                </GridItem>
                <GridItem
                  xs="auto"
                  className="comp-header-toolbar__main-desktop__right"
                  textMode="light"
                >
                  <Box className="comp-header-toolbar__searchbar">
                    <SearchBar variant="header" />
                  </Box>
                  <Box className="comp-header-toolbar__buttons">
                    <NextLink href="#" passHref legacyBehavior>
                      <Button variant="text" color="inverse" size="small">
                        <Icon
                          name="headset_mic"
                          alt="clinical support button icon"
                          variant="material"
                          role="img"
                          size={24}
                        />
                        <Typography variant="small" color={theme.tokens.colors.paletteTextLight}>
                          Clinical Support
                        </Typography>
                      </Button>
                    </NextLink>
                    <NextLink href="#" passHref legacyBehavior>
                      <Button variant="text" color="inverse" size="small">
                        <Icon
                          name="help_outline"
                          alt="help button icon"
                          variant="material"
                          role="img"
                          size={24}
                        />
                        <Typography variant="small" color={theme.tokens.colors.paletteTextLight}>
                          Help/FAQ
                        </Typography>
                      </Button>
                    </NextLink>
                  </Box>
                </GridItem>
              </Grid>
            </GridItem>
          </Grid>
        </Section>

        {/* Primary menu on desktop. */}
        <Section
          paddingTop={false}
          paddingBottom={false}
          backgroundColor={theme.tokens.colors.paletteBackgroundMain}
          disableGutters
          className="comp-header-toolbar__bottom"
        >
          <Grid>
            <GridItem>
              <PrimaryMenuHorizontal
                data={primaryMenuData}
                align="right"
                label="topic"
                variant="primary"
                orientation="horizontal"
                linkWrapper={LinkWrapper}
                dropdownOnHover
                className="comp-header-toolbar__primary-menu"
              />
            </GridItem>
          </Grid>
        </Section>
      </Toolbar>

      {/* Mobile menu drawer. */}
      <Drawer
        className="header-drawer header-drawer--mobile-menu"
        variant="temporary"
        anchor="right"
        open={mobileMenuOpen}
        onClose={handleMenuDrawerToggle}
        ModalProps={{
          keepMounted: true, // Better open performance on mobile.
        }}
        sx={{
          // Inline styles because this renders outside of the header.
          display: { xs: 'block', lg: 'none' },
          '& .MuiDrawer-paper': {
            paddingTop: '64px',
            boxSizing: 'border-box',
            width: '100%',
            backgroundColor: theme.tokens.colors.paletteBackgroundDark,
          },
        }}
      >
        {menuDrawerContent}
      </Drawer>

      {/* Search drawer. */}
      <Drawer
        className="header-drawer header-drawer--search"
        variant="temporary"
        anchor="top"
        open={searchOpen}
        onClose={handleSearchDrawerToggle}
        ModalProps={{
          keepMounted: true, // Better open performance on mobile.
        }}
        sx={{
          // Inline styles because this renders outside of the header.
          '& .MuiDrawer-paper': {
            paddingTop: '64px',
            boxSizing: 'border-box',
            backgroundColor: theme.tokens.colors.paletteBackgroundDark,
          },
        }}
      >
        {searchDrawerContent}
      </Drawer>
    </AppBar>
  );
};

export default styled(Header)(styles);
