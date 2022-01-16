import { Card, Grid, Text } from "@geist-ui/react";

export interface BillboardProps {
  title: string;
  subtitle: string;
  background: string;
  description: string;
  other?: React.ReactNode;
}

const Billboard = ({
  title,
  subtitle,
  description,
  background,
  other,
}: BillboardProps) => {
  const extraGrid = other ? <Grid>{other}</Grid> : null;

  return (
    <Card
      width={75}
      height={25}
      style={{
        // the specified image as the background
        background: `url(${background})`,
        // center the image
        backgroundPosition: "center",
        // do not repeat the image
        backgroundRepeat: "no-repeat",
        // scale to fit
        backgroundSize: "cover",
      }}
      hoverable
    >
      <Card
        style={{
          // make the background semi-transparent
          background: "rgba(0, 0, 0, 0.5)",
        }}
        width={30}
      >
        <Grid.Container direction="column" gap={1}>
          <Grid>
            <Text style={{ color: "#ffffff" }} h1>
              {title}
            </Text>
          </Grid>
          <Grid>
            <Text style={{ color: "#ffffff" }} h3>
              {subtitle}
            </Text>
          </Grid>
          <Grid>
            <Text style={{ color: "#ffffff" }} h5>
              {description}
            </Text>
          </Grid>
          {extraGrid}
        </Grid.Container>
      </Card>
    </Card>
  );
};

export default Billboard;
