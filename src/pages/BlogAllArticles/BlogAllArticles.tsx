import Hero from '../../components/Hero/Hero';
import './BlogAllArticles.css';

const BlogAllArticles = () => {
  return (
    <div>
      <div className="headerAllArticles">
        <Hero />
      </div>

      <body className="bodyAllArticles">
        <div className="bodyAllArticles_contentWrapper">
          <h1 className="bodyAllArticles_Title">My Articles</h1>
          <div className="bodyAllArticles_CardsWrapper">
            <div className="articlesCardsGrid">Article Components here</div>
          </div>
          <h2>Pagination Component goes here</h2>
        </div>
      </body>
    </div>
  );
};

export default BlogAllArticles;
