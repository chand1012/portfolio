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
      <GridItem>
        <Tooltip label={github}>
          <Link href={`https://github.com/${github}`}>
            <BsGithub size={24} />
          </Link>
        </Tooltip>
      </GridItem>
    );
  }

  if (twitter) {
    icons.push(
      <GridItem>
        <Tooltip label={twitter}>
          <Link href={`https://twitter.com/${twitter}`}>
            <BsTwitter size={24} />
          </Link>
        </Tooltip>
      </GridItem>
    );
  }

  if (facebook) {
    icons.push(
      <GridItem>
        <Tooltip label="Facebook">
          <Link href={`https://facebook.com/${facebook}`}>
            <BsFacebook size={24} />
          </Link>
        </Tooltip>
      </GridItem>
    );
  }

  if (instagram) {
    icons.push(
      <GridItem>
        <Tooltip label={instagram}>
          <Link href={`https://instagram.com/${instagram}`}>
            <FiInstagram size={24} />
          </Link>
        </Tooltip>
      </GridItem>
    );
  }

  if (youtube) {
    icons.push(
      <GridItem>
        <Tooltip label="YouTube">
          <Link href={`https://youtube.com/channel/${youtube}`}>
            <BsYoutube size={24} />
          </Link>
        </Tooltip>
      </GridItem>
    );
  }

  if (twitch) {
    icons.push(
      <GridItem>
        <Tooltip label={twitch}>
          <Link href={`https://twitch.tv/${twitch}`}>
            <FaTwitch size={24} />
          </Link>
        </Tooltip>
      </GridItem>
    );
  }

  if (linkedin) {
    icons.push(
      <GridItem>
        <Tooltip label="LinkedIn">
          <Link href={`https://linkedin.com/in/${linkedin}`}>
            <BsLinkedin size={24} />
          </Link>
        </Tooltip>
      </GridItem>
    );
  }

  if (dev) {
    icons.push(
      <GridItem>
        <Tooltip label={dev}>
          <Link href={`https://dev.to/${dev}`}>
            <FaDev size={24} />
          </Link>
        </Tooltip>
      </GridItem>
    );
  }

  if (email) {
    icons.push(
      <GridItem>
        <Tooltip label={email}>
          <Link href={`mailto:${email}`}>
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
