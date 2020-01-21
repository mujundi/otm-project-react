import path from "path";
import axios from "axios";
import React from "react";
// import { getSiteData } from "react-static/node";

const pureChatScript =
  "window.purechatApi = { l: [], t: [], on: function () { this.l.push(arguments); } }; (function () { var done = false; var script = document.createElement('script'); script.async = true; script.type = 'text/javascript'; script.src = 'https://app.purechat.com/VisitorWidget/WidgetScript'; document.getElementsByTagName('HEAD').item(0).appendChild(script); script.onreadystatechange = script.onload = function (e) { if (!done && (!this.readyState || this.readyState == 'loaded' || this.readyState == 'complete')) { var w = new PCWidget({c: 'c714e54d-aafb-49e1-891f-2796dc30d270', f: true }); done = true; } }; })();";

export default {
  getSiteData: async () => {
    const data = axios.get("https://admin.otmdispatch.com/pages").then((res) => {
      return res.data;
    });
    {
      test: data;
    }
  },
  devServer: {
    disableHostCheck: true,
    public: "otmdispatch.com",
    allowedHosts: ["0.0.0.0", "localhost", "otmdispatch.com", "www.otmdispatch.com"]
  },
  siteRoot: "http://otmdispatch.com",
  plugins: [
    [
      require.resolve("react-static-plugin-source-filesystem"),
      {
        location: path.resolve("./src/pages")
      }
    ],
    require.resolve("react-static-plugin-reach-router"),
    require.resolve("react-static-plugin-sitemap")
  ],
  Document: ({
    Html,
    Head,
    Body,
    children,
    state: { siteData, renderMeta }
  }) => (
      <Html lang="en-US">
        <Head>
          <meta charSet="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link
            href="https://fonts.googleapis.com/css?family=Lato:300,400,700&display=swap"
            rel="stylesheet"
          />
          <link
            href="https://fonts.googleapis.com/css?family=Poppins:300,400,500,600,700&display=swap"
            rel="stylesheet"
          />
          <link
            rel="stylesheet"
            href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
            integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
            crossOrigin="anonymous"
          />
          <title>Truck Dispatching Services | OTM Dispatch</title>
        </Head>
        <Body>
          {children}
          <script src="https://smtpjs.com/v3/smtp.js"></script>
          <script
            type="text/javascript"
            data-cfasync="false"
            dangerouslySetInnerHTML={{ __html: pureChatScript }}
          />
          <script
            src="https://code.jquery.com/jquery-3.3.1.slim.min.js"
            integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo"
            crossOrigin="anonymous"
          ></script>
          <script
            src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js"
            integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1"
            crossOrigin="anonymous"
          ></script>
          <script
            src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js"
            integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM"
            crossOrigin="anonymous"
          ></script>
          <script
            src="https://cdnjs.cloudflare.com/ajax/libs/animejs/2.2.0/anime.min.js"
            integrity="sha256-BuxrUdr/4YoztQLxT6xmdO6hSQw2d6BtBUY1pteGds4="
            crossOrigin="anonymous"
          ></script>
          <script src="https://www.google.com/recaptcha/api.js" async defer></script>
        </Body>
      </Html>
    )
};
