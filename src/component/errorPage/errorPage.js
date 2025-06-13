import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div id="error-page" style={{ fontFamily: 'canvas',
                                    fontSize: '24px',
                                    margin: '25px',
                                    width: '100%'}} >
      <div style={{textAlign: 'center'}}>
                <h1 style={{textAlign: 'center'}}>Oops!</h1>
                <img src={'/img/error_page.png'} style={{maxWidth: '300px'}} alt="img should be here"/>
                <p>Sorry, an unexpected error has occurred.</p>
                <p>
                  <i>{error.statusText || error.message}</i>
                </p>

      </div>

    </div>
  );
}