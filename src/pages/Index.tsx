import { Grid } from "@geist-ui/react";
import { Button, Link, Text } from "@geist-ui/react";
import AboutMe from "../components/AboutMe";
import Billboard from "../components/Billboard";
import SocialMedia from "../components/SocialMedia";

const ResumeLink = (
  <Link
    href="https://docs.google.com/document/d/12e4IwMAA7qYuqqWLyQUYQQ01UkC9V4Hai0d_jm9IY7o/edit?usp=sharing"
    target="_blank"
  >
    <Button>
      <Text h6>Resume</Text>
    </Button>
  </Link>
);

const Index = () => {
  return (
    <Grid.Container direction="column" gap={1}>
      <Grid>
        <Billboard
          title="Chandler Lofland"
          subtitle="Software Engineer"
          background="/img/banner.jpg"
          description="I am a full stack engineer with a passion for building software."
          other={ResumeLink}
        />
      </Grid>
      <Grid>
        <SocialMedia
          twitter="Chand1012Dev"
          github="chand1012"
          linkedin="chandler-lofland-81217914b"
          youtube="UCRKeF9dxhScFwB4VyOqxkhQ"
          instagram="chand1012"
          twitch="chand1012"
        />
      </Grid>
      <Grid>
        <AboutMe>
          {" "}
          I am a full stack engineer with a passion for building software.{" "}
        </AboutMe>
      </Grid>
    </Grid.Container>
  );
};

export default Index;
