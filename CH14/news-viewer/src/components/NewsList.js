import React from 'react';
import styled from 'styled-components';
import NewsItem from './NewsItem';

const NewsListBlock = styled.div`
  box-sizing: border-box;
  padding-bottom: 3rem;
  width: 768px;
  margin: 0 auto;
  margin-top: 2rem;
  @media screen and (max-width: 768px) {
    width: 100%;
    padding-left: 1rem;
    padding-right: 1rem;
  }
`;

const sampleArticle = {
    "title": "여자 컬링 '팀 킴' 한일전 승리…4강 불씨 되살렸다! - KBS뉴스",
    "description": "[앵커] 여자 컬링 대표팀 '팀 킴'이 라이벌 일본과의 한일전에서 짜릿한 승리를 거두며 4강행 희망을 되살...",
    "url": "https://news.kbs.co.kr/news/view.do?ncd=5395675",
    "urlToImage": "https://news.kbs.co.kr/data/news/title_image/newsmp4/newsnet/2022/02/15/90_5395675.jpg",
}

const NewsList = () => {
  return (
    <NewsListBlock>
        <NewsItem article={sampleArticle}/>
        <NewsItem article={sampleArticle}/>
        <NewsItem article={sampleArticle}/>
        <NewsItem article={sampleArticle}/>
        <NewsItem article={sampleArticle}/>
        <NewsItem article={sampleArticle}/>
    </NewsListBlock>
  );
};

export default NewsList;