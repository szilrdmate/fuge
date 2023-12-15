import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import i18next from "i18next";
import { I18nextProvider } from "react-i18next";

import global_hu from "./translations/hu/global.json"
import global_en from "./translations/en/global.json"

i18next.init({
  interpolation: {escapeValue: true},
  lng: "hu",
  resources: {
    hu: {
      global: global_hu,
    },
    en: {
      global: global_en,
    }
  }
})

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <I18nextProvider i18n={i18next}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </I18nextProvider>
);
