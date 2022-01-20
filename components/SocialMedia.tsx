import { Grid, GridItem, Link, Tooltip } from "@chakra-ui/react";
import {
  BsFacebook,
  BsGithub,
  BsLinkedin,
  BsTwitter,
  BsYoutube,
} from "react-icons/bs";
import { FiInstagram } from "react-icons/fi";
import { FaDev, FaTwitch } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";

export interface SocialMediaProps {
  twitter?: string;
  facebook?: string;
  instagram?: string;
  youtube?: string;
  linkedin?: string;
  github?: string;
  twitch?: string;
  dev?: string;
  email?: string;
}

const SocialMedia = ({
  twitter,
  facebook,
  instagram,
  youtube,
  linkedin,
  github,
  twitch,
  dev,
  email,
}: SocialMediaProps) => {
  const icons = [];

  if (github) {
    icons.push(
      <GridItem key={0}>
        <Tooltip label="GitHub">
          <Link target="_blank" href={`https://github.com/${github}`}>
            <BsGithub size={24} />
          </Link>
        </Tooltip>
      </GridItem>
    );
  }

  if (twitter) {
    icons.push(
      <GridItem key={1}>
        <Tooltip label="Twitter">
          <Link target="_blank" href={`https://twitter.com/${twitter}`}>
            <BsTwitter size={24} />
          </Link>
        </Tooltip>
      </GridItem>
    );
  }

  if (facebook) {
    icons.push(
      <GridItem key={2}>
        <Tooltip label="Facebook">
          <Link target="_blank" href={`https://facebook.com/${facebook}`}>
            <BsFacebook size={24} />
          </Link>
        </Tooltip>
      </GridItem>
    );
  }

  if (instagram) {
    icons.push(
      <GridItem key={3}>
        <Tooltip label="Instagram">
          <Link target="_blank" href={`https://instagram.com/${instagram}`}>
            <FiInstagram size={24} />
          </Link>
        </Tooltip>
      </GridItem>
    );
  }

  if (youtube) {
    icons.push(
      <GridItem key={4}>
        <Tooltip label="YouTube">
          <Link target="_blank" href={`https://youtube.com/channel/${youtube}`}>
            <BsYoutube size={24} />
          </Link>
        </Tooltip>
      </GridItem>
    );
  }

  if (twitch) {
    icons.push(
      <GridItem key={5}>
        <Tooltip label="Twitch">
          <Link target="_blank" href={`https://twitch.tv/${twitch}`}>
            <FaTwitch size={24} />
          </Link>
        </Tooltip>
      </GridItem>
    );
  }

  if (linkedin) {
    icons.push(
      <GridItem key={6}>
        <Tooltip label="LinkedIn">
          <Link target="_blank" href={`https://linkedin.com/in/${linkedin}`}>
            <BsLinkedin size={24} />
          </Link>
        </Tooltip>
      </GridItem>
    );
  }

  if (dev) {
    icons.push(
      <GridItem key={7}>
        <Tooltip label="Dev.to">
          <Link target="_blank" href={`https://dev.to/${dev}`}>
            <FaDev size={24} />
          </Link>
        </Tooltip>
      </GridItem>
    );
  }

  if (email) {
    icons.push(
      <GridItem key={8}>
        <Tooltip label="Email">
          <Link target="_blank" href={`mailto:${email}`}>
            <MdOutlineEmail size={24} />
          </Link>
        </Tooltip>
      </GridItem>
    );
  }

  return (
    <Grid
      templateColumns="repeat(10, 1fr)"
      gap={1}
      justifyContent="center"
      alignItems="center"
    >
      {icons}
    </Grid>
  );
};

export default SocialMedia;
