import { Grid, Text } from "@geist-ui/react";

const articles = [
  "3dprintingintro",
  "Arch-Beginners",
  "ChristmasTimeRant",
  "FreeHosting",
  "FromPythonToGo",
  "GameStreaming",
  "GistbinGistClient",
  "git-gud1",
  "git-gud2",
  "How-To-Host-A-Flask-Server-With-Gunicorn-And-HTTPS",
  "MakePowerPCGreatAgain",
  "NodeRecursionBad",
  "NodeTheEasyWay",
  "PythonForProgrammers",
  "PythonForProgrammers2",
  "PythonForProgrammers3",
  "WhatsWrongWithDiscordBots",
];

const NotFound = () => {
  const containsArticle = articles.some((article) =>
    window.location.toString().includes(article)
  );

  if (containsArticle) {
    // simulate redirect
    window.location.href = `https://blog.chand1012.dev${window.location.pathname}`;
  }

  return (
    <Grid.Container justify="center">
      <Grid>
        <Text h1>Page not found.</Text>
      </Grid>
    </Grid.Container>
  );
};

export default NotFound;
