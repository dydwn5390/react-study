import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import NewsItem from './NewsItem';
import axios from 'axios';

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
    title: "여자 컬링 '팀 킴' 한일전 승리…4강 불씨 되살렸다! - KBS뉴스",
    description:
        "[앵커] 여자 컬링 대표팀 '팀 킴'이 라이벌 일본과의 한일전에서 짜릿한 승리를 거두며 4강행 희망을 되살...",
    url: 'https://news.kbs.co.kr/news/view.do?ncd=5395675',
    urlToImage:
        'https://news.kbs.co.kr/data/news/title_image/newsmp4/newsnet/2022/02/15/90_5395675.jpg',
};

const NewsList = () => {
    const [articles, setArticles] = useState(null);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        // asynce를 사용하는 함수 따로 선언
        const fetchData = async () => {
            setLoading(true);
            try {
                const response = await axios.get(
                    'https://newsapi.org/v2/top-headlines?country=kr&apiKey=4f6f519db55148dd87f7107473e15ca6',
                );
                setArticles(response.data.articles);
            } catch (e) {
                console.log(e);
            }
            setLoading(false);
        };
        fetchData();
    }, []);

    // 대기 중일 때
    if (loading) {
        return <NewsListBlock>대기중...</NewsListBlock>;
    }
    // 아직 articles 값이 설정되지 않았을 때
    if (!articles) {
        return null;
    }
    // article 값이 유효할 때
    return (
        <NewsListBlock>
            {articles.map((article) => (
                <NewsItem key={article.url} article={article} />
            ))}
        </NewsListBlock>
    );
};

export default NewsList;
