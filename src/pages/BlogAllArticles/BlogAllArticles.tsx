import './BlogAllArticles.css';

const BlogAllArticles = () => {
  return (
    <div className="headerAllArticles">
      <header>
        <h1>BloG-ME</h1>
        <div className="subContentOfheaderAllArticles">
          <h2 className="subContentOfheaderAllArticles_Title">
            Express yourself!
          </h2>
          <p
            /* ref={headerSectionRef} */ className="headerAllArticles_Paragraph"
          >
            A ready to go app for your articles and opinions
          </p>
        </div>
      </header>
      <body>
        <h1>My Articles</h1>
        <div className="bodyAllArticlesWrapper">
          <h2>Map through Articles cards Component here</h2>
        </div>
        <h2>Pagination Component goes here</h2>
      </body>
    </div>
  );
};

export default BlogAllArticles;
