function NotFoundPage(): JSX.Element {
  return (
    <div className="page page--gray page--main" style={{ textAlign: 'center', padding: '50px' }}>
      <h1>404 Not Found</h1>
      <p>Page does not exist</p>
      <a href="/" style={{ color: 'blue', textDecoration: 'underline' }}>Go back to Main page</a>
    </div>
  );
}

export default NotFoundPage;
