import { HelmetServerState } from 'react-helmet-async';
import serialize from 'serialize-javascript';
import { RootState } from 'store/store';

type TTemplate = {
  header: any,
  footer: string,
}

const loading = `
  <div class="loaderContainer">
  <div class="loader">
    <div class="spinner"></div>
    Loading...
  </div>
  </div>
  <style>
    .loaderContainer {
      position: fixed; 
      top: 0; 
      left: 0; 
      width: 100%; 
      height: 100%; 
      background: rgb(0 0 0 / 25%); 
      display: flex; 
      justify-content: center; 
      align-items: center; 
      z-index: 100;
    }
    .loader {
      background-color: white;
      padding: 10px;
      border-radius: 5px;
      display: flex;
      flex-direction: column;
      align-items:center;
      width:400px;
    }

    .spinner {
      border: 2.9px solid #f34f4f;
      border-top: 2.9px solid #f3f3f3;
      border-radius: 50%;
      width: 30px;
      height: 30px;
      align-items: center;
      animation: spin 2s linear infinite;
      margin: 13px;
    }

      @keyframes spin {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
      }
  </style>
`;


export const getHtmlTemplate = (props: {
  preloadedState: Partial<RootState>,
  helmetData: HelmetServerState,
  scriptTags: string,
  styleTags: string,
  nonce: string,
  frescoData: any
},
): TTemplate => ({
  header: `
    <!DOCTYPE html>
      <html lang="en">
        <head>
            <meta charset="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1, minimum-scale=1" />
            <meta property="csp-nonce" content="${props.nonce}"/>
            <script src="https://code.jquery.com/jquery-3.6.4.min.js"></script>
            <script>
            $(function() {
              $.fn.size = function() {
                  return this.length;
              }
          });
            </script>
            ${props.styleTags}
            ${props.frescoData.header}
        </head>
        <body >
          <noscript>
            <b>Enable JavaScript to run this app.</b>
          </noscript>
          ${!props?.preloadedState?.loader?.isLoading ? `<div id="root">${loading}</div>` : '<div id="root">'}
          `,
  footer: `</div>
          <script nonce="${props.nonce}">window.__PRELOADED_STATE__ = ${serialize(props.preloadedState)}</script>
          ${props.scriptTags}
        </body>

        ${props.frescoData.footer}
      </html>
  ` ,
});
