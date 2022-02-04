import { render, screen, waitFor } from "@testing-library/react";
import { Provider } from "react-redux";
import App from "./App";
import { store } from "./cart/store";
import { AppProvider } from "./contexts/AppContext";
import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";

describe("App test", () => {
  test("New released books should be fetched and renderd in home page", async () => {
    render(
      <Provider store={store}>
        <AppProvider>
          <App />
        </AppProvider>
      </Provider>
    );
    // new released books should be displayed with title "New Released Books"
    await waitFor(() => screen.findByText(/new released books/i));
  });

  test("Search form should be able to fetch data", async () => {
    render(
      <Provider store={store}>
        <AppProvider>
          <App />
        </AppProvider>
      </Provider>
    );
    const inputSearchEl = screen.getByTestId("inputSearch");
    const btnSearchEl = screen.getByTestId("btnSearch");

    userEvent.type(inputSearchEl, "hacking");
    userEvent.click(btnSearchEl);
    const imgLogoSpinner = screen.getByTestId("imgLogoSpinner");

    // logo spinner should be loaded
    expect(imgLogoSpinner).toBeInTheDocument();

    // data like price should be fetched and rendered
    await waitFor(() => screen.findByText(/price/i), {
      timeout: 5000,
    });
  });

  test("Cart table should be displayed if cart button is clicked which is in the navigation bar", () => {
    render(
      <Provider store={store}>
        <AppProvider>
          <App />
        </AppProvider>
      </Provider>
    );
    // cart table should be displayed in which fileds like title should be shown
    const btnNavCartEl = screen.getByTestId("btnNavCart");
    userEvent.click(btnNavCartEl);
    expect(screen.getByText(/title/i)).toBeInTheDocument();
  });
});
