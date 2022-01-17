import { Card, Grid, Link, Text, Tooltip } from "@geist-ui/react";
import {
  Twitter,
  Github,
  Linkedin,
  Youtube,
  Instagram,
  Twitch,
} from "@geist-ui/react-icons";

import DevTo from "./icons/DevTo";
export interface SocialMediaProps {
  twitter?: string;
  github?: string;
  linkedin?: string;
  youtube?: string;
  instagram?: string;
  facebook?: string;
  tiktok?: string;
  twitch?: string;
  dev?: string;
}

const SocialMedia = ({
  twitter,
  github,
  linkedin,
  youtube,
  instagram,
  twitch,
  dev,
}: SocialMediaProps) => {
  const twitterLink = twitter ? (
    <Grid>
      <Link href={`https://twitter.com/${twitter}`} target="_blank">
        <Tooltip text="Twitter">
          <Twitter color="#1A8CD8" size={36} />
        </Tooltip>
      </Link>
    </Grid>
  ) : null;

  const githubLink = github ? (
    <Grid>
      <Link href={`https://github.com/${github}`} target="_blank">
        <Tooltip text="GitHub">
          <Github size={36} />
        </Tooltip>
      </Link>
    </Grid>
  ) : null;

  const twitchLink = twitch ? (
    <Grid>
      <Link href={`https://twitch.tv/${twitch}`} target="_blank">
        <Tooltip text="Twitch">
          <Twitch color="#8C45F6" size={36} />
        </Tooltip>
      </Link>
    </Grid>
  ) : null;

  const instagramLink = instagram ? (
    <Grid>
      <Link href={`https://instagram.com/${instagram}`} target="_blank">
        <Tooltip text="Instagram">
          <Instagram color="#B83999" size={36} />
        </Tooltip>
      </Link>
    </Grid>
  ) : null;

  const linkedinLink = linkedin ? (
    <Grid>
      <Link href={`https://www.linkedin.com/in/${linkedin}`} target="_blank">
        <Tooltip text="LinkedIn">
          <Linkedin size={36} />
        </Tooltip>
      </Link>
    </Grid>
  ) : null;

  const youtubeLink = youtube ? (
    <Grid>
      <Link href={`https://www.youtube.com/channel/${youtube}`} target="_blank">
        <Tooltip text="YouTube">
          <Youtube color="#FF0000" size={36} />
        </Tooltip>
      </Link>
    </Grid>
  ) : null;

  const devLink = dev ? (
    <Grid>
      <Link href={`https://dev.to/${dev}`} target="_blank">
        <Tooltip text="Dev.to">
          <DevTo size={36} />
        </Tooltip>
      </Link>
    </Grid>
  ) : null;

  return (
    <Card>
      <Grid.Container gap={1} direction="column">
        <Grid>
          <Text h3>Connect with Me</Text>
        </Grid>
        <Grid>
          <Grid.Container gap={1}>
            {twitterLink}
            {githubLink}
            {linkedinLink}
            {instagramLink}
            {twitchLink}
            {youtubeLink}
            {devLink}
          </Grid.Container>
        </Grid>
      </Grid.Container>
    </Card>
  );
};

export default SocialMedia;
