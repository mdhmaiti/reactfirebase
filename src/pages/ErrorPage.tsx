
import { isRouteErrorResponse, useRouteError } from "react-router-dom";

export function ErrorPage() {
  const error = useRouteError();

  if (isRouteErrorResponse(error)) {
    if (error.status === 401) {
      // for the unauthorized
      return (
        <div id="error-page">
          <h1>Unauthorized Access</h1>
          <p>You are not authorized to view this page.</p>
        </div>
      );
    } else if (error.status === 404) {
      // when the page is not found i.e 404 status code 
      return (
        <div id="error-page">
          <h1>Page Not Found</h1>
          <p>The requested page could not be found.</p>
        </div>
      );
    } else {
      return (
        <div id="error-page">
          <h1>Oops! {error.status}</h1>
          <p>{error.statusText}</p>
          {error.data?.message && (
            <p>
              <i>{error.data.message}</i>
            </p>
          )}
        </div>
      );
    }
  } else if (error instanceof Error) {
    // some thing uunexpected 
    return (
      <div id="error-page">
        <h1>Oops! Unexpected Error</h1>
        <p>Something went wrong.</p>
        <p>
          <i>{error.message}</i>
        </p>
      </div>
    );
  } else {
    // general error page 
    return (
      <div id="error-page">
        <h1>Oops! An Error Occurred</h1>
        <p>Something went wrong while processing your request.</p>
      </div>
    );
  }
}
