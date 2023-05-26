const Stats = (props) => {
  return (
    <div className="stats my-5">
      <div className="container d-flex flex-column justify-content-center align-items-center">
        <h1 className="mb-3">Investing to us pays off</h1>

        <div className="d-flex flex-md-wrap text-center mt-4">
          <div className="stats-row me-5">
            <h2 className="stats-title">200%</h2>
            <p className="stats-title__sub">return on investment*</p>
          </div>
          <div className="stats-row me-5">
            <h2 className="stats-title">$2.1</h2>
            <p className="stats-title__sub">
              Eiusmod amet commodo elit eu et dolore in.
            </p>
          </div>
          <div className="stats-row me-5">
            <h2 className="stats-title">85%</h2>
            <p className="stats-title__sub">
              Commodo eu aliquip non laboris amet qui incididunt anim.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export { Stats };
