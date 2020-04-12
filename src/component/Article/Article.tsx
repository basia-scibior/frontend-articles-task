import { FC } from "react";
import * as React from "react";
import {
  ArticleImage,
  Container,
  Content,
  Header,
  Title,
  Date,
} from "./Article.styles";

interface ArticleProps {
  imageUrl: string;
  title: string;
  date: string;
  content: string;
}

export const Article: FC<ArticleProps> = ({
  imageUrl,
  title,
  date,
  content,
}) => {
  return (
    <Container>
      <div>{imageUrl && <ArticleImage src={imageUrl} />}</div>
      <Content>
        <Header>
          <Title>{title}</Title>
          <Date>{date}</Date>
        </Header>
        <div>{content}</div>
      </Content>
    </Container>
  );
};
