import '../styles/globals.css';
import '../styles/reset.css';

export default function RootLayout({ children }) {
  return (
    <html lang="ko">
      <head></head>
      <body>
        <div id="modal"></div>
        <div>{children}</div>
        {/* <script src="/bundle.js"></script> */}
      </body>
    </html>
  );
}
