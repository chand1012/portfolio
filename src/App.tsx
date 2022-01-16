import { useState } from "react";
import { GeistProvider, CssBaseline, Text, Link } from "@geist-ui/react";
import { Grid, Tabs } from "@geist-ui/react";
import { Switch, Route, useHistory, useLocation } from "react-router-dom";

// local components
import NavBar, { ThemeType } from "./components/NavBar";

// pages
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";

function App() {
  const [themeType, setThemeType] = useState<ThemeType>("dark");
  const switchThemes = () => {
    setThemeType((last) => (last === "dark" ? "light" : "dark"));
  };
  const history = useHistory();
  const location = useLocation();

  const title = (
    <Link>
      <Text h4>Chandler Lofland</Text>
    </Link>
  );

  return (
    <GeistProvider themeType={themeType}>
      <CssBaseline />
      <NavBar title={title} themeSwitcher={switchThemes} themeType={themeType}>
        <Tabs
          style={{
            marginLeft: "auto",
          }}
          hideDivider
          value={location.pathname}
          onChange={(value: any) => history.push(value)}
        >
          <Tabs.Item label={"home"} value={"/"} />
          {/* <Tabs.Item label={"distros"} value={"/distros"} />
          <Tabs.Item label={"about"} value={"/about"} /> */}
        </Tabs>
      </NavBar>
      <Grid.Container gap={2} justify="center">
        <Switch>
          <Route exact path="/">
            <Grid>
              <Index />
            </Grid>
          </Route>
          <Route path="*">
            <Grid>
              <NotFound />
            </Grid>
          </Route>
        </Switch>
      </Grid.Container>
    </GeistProvider>
  );
}

export default App;
