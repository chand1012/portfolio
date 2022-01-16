// import { Grid } from "@geist-ui/react";
import { Button, Link, Text } from "@geist-ui/react";
import Billboard from "../components/Billboard";

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
    <Billboard
      title="Chandler Lofland"
      subtitle="Software Engineer"
      background="/img/banner.jpg"
      description="I am a full stack engineer with a passion for building software."
      other={ResumeLink}
    />
  );
};

export default Index;
