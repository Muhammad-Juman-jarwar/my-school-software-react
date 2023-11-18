import React from 'react';

const Error2 = () => {
  return (
    <React.Fragment>
      <div className="auth option2">
  <div className="auth_left">
    <div className="card">
      <div className="card-body text-center">
        <div className="display-3 text-muted mb-5"><i className="si si-exclamation" /> 500</div>
        <h1 className="h3 mb-3">Oops.. You just found an error page..</h1>
        <p className="h6 text-muted font-weight-normal mb-3">We are sorry but your request contains bad syntax and cannot be fulfilled…</p>
        <a className="btn btn-primary" href="javascript:history.back()"><i className="fe fe-arrow-left mr-2" />Go back</a>
      </div>
    </div>
  </div>
</div>

    </React.Fragment>
  );
};
export default Error2;