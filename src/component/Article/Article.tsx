import { FC } from "react";
import * as React from "react";
import {
  ArticleImage,
  Container,
  Content,
  Header,
  Title,
  Date,
  Preamble,
} from "./Article.styles";
import placeholderUrl from "../../images/placeholder.jpg";
import { Moment } from "moment";

interface ArticleProps {
  image: string;
  title: string;
  date: Moment;
  content: string;
}

export const Article: FC<ArticleProps> = ({ image, title, date, content }) => {
  return (
    <Container>
      <ArticleImage src={image ? image : placeholderUrl} />
      <Content>
        <Header>
          <Title>{title}</Title>
          <Date>{date.format("D. MMM YYYY")}</Date>
        </Header>
        <Preamble>{content}</Preamble>
      </Content>
    </Container>
  );
};
