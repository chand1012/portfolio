import { Card, Text, Grid, Divider } from "@geist-ui/react";

export interface AboutMeProps {
  children: React.ReactNode;
}

const AboutMe = ({ children }: AboutMeProps) => {
  return (
    <Card width={75}>
      <Grid.Container direction="column" gap={1}>
        <Grid>
          <Text h3>About Me</Text>
          <Divider />
        </Grid>
        <Grid>
          <Text font="1rem">{children}</Text>
        </Grid>
      </Grid.Container>
    </Card>
  );
};

export default AboutMe;
