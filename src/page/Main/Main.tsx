import * as React from "react";
import { FC, useEffect, useState } from "react";
import { Container, ErrorContainer } from "./Main.styles";
import { Sidebar } from "../../component/Sidebar/Sidebar";
import { Article } from "../../models/Article";
import { Article as SingleArticle } from "../../component/Article/Article";
import { SortBar } from "../../component/SortBar/SortBar";
import { ArticlesApi } from "../../api/articles";
import { Category } from "../../models/Category";
import listArticles = ArticlesApi.listArticles;

export const MainPage: FC = () => {
  const [articles, setArticles] = useState<Article[]>([]);
  const [hasError, setHasError] = useState(false);
  const [selectedCategories, setSelectedCategories] = useState<Category[]>([]);

  useEffect(() => {
    const categories =
      selectedCategories.length === 0
        ? [Category.fashion, Category.sport]
        : selectedCategories;
    listArticles(categories)
      .then((articles) => setArticles(articles))
      .catch((error) => setHasError(true));
  }, [selectedCategories]);

  console.log(articles);

  return (
    <div>
      <SortBar
        onSort={() =>
          setArticles(
            articles.sort((articleA, articleB) => articleA.date - articleB.date)
          )
        }
      />
      <Container>
        <Sidebar
          selectedCategories={selectedCategories}
          setSelectedCategories={setSelectedCategories}
        />
        <div>
          {hasError && (
            <ErrorContainer>
              Something went wrong. Please refresh the page.
            </ErrorContainer>
          )}
          {!hasError &&
            articles.map((article) => (
              <SingleArticle
                key={article.id}
                imageUrl={article.image}
                content={article.preamble}
                date={article.date}
                title={article.title}
              />
            ))}
        </div>
      </Container>
    </div>
  );
};
