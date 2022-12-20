import { useRouteError, Link } from "react-router-dom";

export default function ErrorPage() {
  const error: any = useRouteError();
  console.error(error);

  return (
    <div className="container container-xs">
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>

      <div style={{ display: "flex", justifyContent: "end" }}>
        <h4>
          <Link to="/">{">> "}Home</Link>
        </h4>
      </div>
    </div>
  );
}
