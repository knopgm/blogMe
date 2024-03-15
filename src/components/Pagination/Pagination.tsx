import styles from './Pagination.module.css';

type Pagination = {
  currentPage: number;
  numberOfPages: number;
  onPaginationChange: (a: number) => void;
};

const Pagination = ({
  currentPage,
  numberOfPages,
  onPaginationChange,
}: Pagination) => {
  const paginationNumbers = [];

  // function to set how many buttons/pages should be displayed on the pagination
  for (let i = 1; i <= numberOfPages; i++) {
    paginationNumbers.push(i);
  }
  return (
    <div>
      <div className={styles.navPageArticlesGrid}>
        <div className={styles.pagination}>
          {/* DISABLED TEMPORARILY UNTIL MORE ARTICLES ARE PUBLISHED */}

          {/* <button
          className='btnLeft'
          onClick={handleBtnLeft}
          aria-label="go-to-previous-page"
        >
          <svg
            width="40"
            height="40"
            viewBox="0 0 40 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect width="40" height="40" rx="20" fill="#EEEEEE" />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M17.2069 19.8507C17.0263 20.0313 17.0263 20.3241 17.2069 20.5047L21.9221 25.22C22.1028 25.4006 22.3956 25.4006 22.5762 25.22L22.7942 25.002C22.9748 24.8214 22.9748 24.5285 22.7942 24.3479L18.624 20.1777L22.7942 16.0075C22.9748 15.8269 22.9748 15.5341 22.7942 15.3535L22.5762 15.1354C22.3956 14.9548 22.1028 14.9548 21.9221 15.1354L17.2069 19.8507Z"
              fill="#1E1E1E"
            />
          </svg>
        </button> */}
          {paginationNumbers.map((pageNumber) => {
            return (
              <button
                // lift the pageNumber prop to the parent for the set of the currentPage
                onClick={() => onPaginationChange(pageNumber)}
                key={pageNumber}
                // aria-label={pageNumber}
                className={
                  currentPage === pageNumber
                    ? styles.pageNumber_active
                    : styles.pageNumber
                }
              >
                {pageNumber}
              </button>
            );
          })}

          {/* DISABLED TEMPORARILY UNTIL MORE ARTICLES ARE PUBLISHED */}
          {/* <button
          className='btnRight'
          onClick={handleBtnRight}
          aria-label="go-to-next-page"
        >
          <svg
            width="40"
            height="40"
            viewBox="0 0 40 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect width="40" height="40" rx="20" fill="#EEEEEE" />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M22.7931 19.8507C22.9737 20.0313 22.9737 20.3241 22.7931 20.5047L18.0779 25.22C17.8972 25.4006 17.6044 25.4006 17.4238 25.22L17.2058 25.002C17.0252 24.8214 17.0252 24.5285 17.2058 24.3479L21.376 20.1777L17.2058 16.0075C17.0252 15.8269 17.0252 15.5341 17.2058 15.3535L17.4238 15.1354C17.6044 14.9548 17.8972 14.9548 18.0779 15.1354L22.7931 19.8507Z"
              fill="#1E1E1E"
            />
          </svg>
        </button> */}
        </div>
      </div>
    </div>
  );
};

export default Pagination;
