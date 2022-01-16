import React from "react";
import { Button, Divider, Grid, Link, Tooltip, Spacer } from "@geist-ui/react";
import { Moon, Sun, Github } from "@geist-ui/react-icons";

// the links are not centered
// can someone who knows what they're doing help me out?

export type ThemeType = "light" | "dark";

export interface NavBarProps {
  themeType: ThemeType;
  themeSwitcher: () => void;
  children: React.ReactNode;
  title: React.ReactNode;
}

const NavBar = ({ title, children, themeSwitcher, themeType }: NavBarProps) => (
  <header>
    <Spacer h={1} />

    <Grid.Container justify="space-around">
      <Grid>{title}</Grid>
      <Grid alignContent="center">{children}</Grid>
      <Grid>
        <Tooltip placement="bottom" text="Page Source">
          <Link target="_blank" href="https://github.com/chand1012/portfolio">
            <Github />
          </Link>
        </Tooltip>
        <Button style={{ marginLeft: 10 }} auto onClick={themeSwitcher}>
          <div style={{ marginTop: 6 }}>
            {themeType === "light" ? <Moon /> : <Sun />}
          </div>
        </Button>
      </Grid>
    </Grid.Container>

    <Divider />
  </header>
);

export default NavBar;
