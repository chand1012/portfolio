import { Box, Spinner, Grid, GridItem } from "@chakra-ui/react";
import ArticleCard from "../components/ArticleCard";
import useArticles from "../hooks/articles";

export interface LatestArticlesProps {
  max?: number;
}

const LatestArticles = ({ max }: LatestArticlesProps) => {
  const { data, isLoading, error, isError } = useArticles(max);

  if (isLoading) {
    return <Spinner />;
  }

  if (isError) {
    console.log(error);
    return null;
  }

  const articles = data.items.map((article: any, index: number) => {
    return (
      <GridItem key={index}>
        <ArticleCard
          title={article.title}
          link={article.link}
          date={article.pubDate}
          description={article.contentSnippet}
        />
      </GridItem>
    );
  });

  return (
    <Grid templateColumns="repeat(5, 1fr)" gap={6}>
      {articles}
    </Grid>
  );
};

export default LatestArticles;
