import React from "react";
import { Button, Divider, Grid, Link, Tooltip, Spacer } from "@geist-ui/react";
import { Moon, Sun } from "@geist-ui/react-icons";

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
      <Grid>
        <Link href="/">{title}</Link>
      </Grid>
      <Grid alignContent="center">{children}</Grid>
      <Grid>
        <Tooltip placement="bottom" text="Toggle Theme">
          <Button style={{ marginLeft: 10 }} auto onClick={themeSwitcher}>
            <div style={{ marginTop: 6 }}>
              {themeType === "light" ? <Moon /> : <Sun />}
            </div>
          </Button>
        </Tooltip>
      </Grid>
    </Grid.Container>

    <Divider />
  </header>
);

export default NavBar;
