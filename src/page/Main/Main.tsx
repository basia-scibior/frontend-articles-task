import * as React from "react";
import { FC, useEffect, useState } from "react";
import { Container, Content, ErrorContainer } from "./Main.styles";
import { Filters } from "../../component/Filters/Filters";
import { Article } from "../../models/Article";
import { Article as SingleArticle } from "../../component/Article/Article";
import { SortBar } from "../../component/SortBar/SortBar";
import { ArticlesApi } from "../../api/articles";
import { Category } from "../../models/Category";
import { SortDirection } from "../../models/SortDirection";

export const MainPage: FC = () => {
  const [articles, setArticles] = useState<Article[]>([]);
  const [hasError, setHasError] = useState(false);
  const [selectedCategories, setSelectedCategories] = useState<Category[]>([]);
  const [sortDirection, setSortDirection] = useState<SortDirection>("desc");

  useEffect(() => {
    const categories =
      selectedCategories.length === 0
        ? [Category.fashion, Category.sport]
        : selectedCategories;
    ArticlesApi.listArticles(categories)
      .then((articles) => setArticles(articles))
      .catch((error) => setHasError(true));
  }, [selectedCategories]);

  const sortDates = (articleA: Article, articleB: Article) =>
    sortDirection === "asc"
      ? articleA.date.unix() - articleB.date.unix()
      : articleB.date.unix() - articleA.date.unix();

  const sortedArticles = [...articles].sort(sortDates);

  return (
    <Container>
      <SortBar onChangeDirection={setSortDirection} direction={sortDirection} />
      <Content>
        <Filters
          selectedCategories={selectedCategories}
          onChangeSelectedCategories={setSelectedCategories}
        />
        <div>
          {hasError && (
            <ErrorContainer>
              Something went wrong. Please refresh the page.
            </ErrorContainer>
          )}
          {!hasError &&
            sortedArticles.map((article) => (
              <SingleArticle
                key={article.id}
                image={article.image}
                content={article.preamble}
                date={article.date}
                title={article.title}
              />
            ))}
        </div>
      </Content>
    </Container>
  );
};
