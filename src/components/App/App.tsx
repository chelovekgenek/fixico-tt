import React from "react";
import { Provider } from "react-redux";
import { SnackbarProvider } from "notistack";

import { ReviewList } from "components/ReviewList";
import { ReviewForm } from "components/ReviewForm";
import { Notifier } from "components/Notifier";
import { store } from "store";

import { GlobalStyles, Layout } from "./App.styled";

export const App: React.FC = () => (
  <Provider store={store}>
    <SnackbarProvider>
      <GlobalStyles />
      <Notifier />
      <Layout>
        <ReviewForm />
        <ReviewList />
      </Layout>
    </SnackbarProvider>
  </Provider>
);
