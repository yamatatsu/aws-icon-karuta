import "@testing-library/jest-dom";
import { render, screen, fireEvent } from "@testing-library/react";
import Karuta from "./Karuta";

const dummySort: <T>(a: T[]) => T[] = (a) => a;
const initialIcons = {
  icon1: { id: "icon1", name: "Icon 1", icon: "url-of-icon1" },
  icon2: { id: "icon2", name: "Icon 2", icon: "url-of-icon2" },
};

test("initial view", async () => {
  render(<Karuta initialIconDict={initialIcons} randomSort={dummySort} />);

  expect(screen.queryByTestId("icon1")).toBeVisible();
  expect(screen.queryByTestId("icon2")).toBeVisible();

  expect(screen.queryByTestId("icon1_mask")).not.toBeInTheDocument();
  expect(screen.queryByTestId("icon2_mask")).not.toBeInTheDocument();

  expect(screen.queryByTestId("completion")).not.toBeInTheDocument();
});

test("not masked when incorrect", async () => {
  render(<Karuta initialIconDict={initialIcons} randomSort={dummySort} />);

  fireEvent.click(screen.getByTestId("icon2"));

  expect(screen.queryByTestId("icon1_mask")).not.toBeInTheDocument();
  expect(screen.queryByTestId("icon2_mask")).not.toBeInTheDocument();
  expect(screen.queryByTestId("icon2")).toHaveClass("shake");
});

test("masked when correct", async () => {
  render(<Karuta initialIconDict={initialIcons} randomSort={dummySort} />);

  fireEvent.click(screen.getByTestId("icon1"));

  expect(screen.queryByTestId("icon1_mask")).toBeVisible();
  expect(screen.queryByTestId("icon2_mask")).not.toBeInTheDocument();
});

test("completion", async () => {
  render(<Karuta initialIconDict={initialIcons} randomSort={dummySort} />);

  fireEvent.click(screen.getByTestId("icon1"));

  expect(screen.queryByTestId("icon1_mask")).toBeVisible();
  expect(screen.queryByTestId("icon2_mask")).not.toBeInTheDocument();
  expect(screen.queryByTestId("completion")).not.toBeInTheDocument();

  fireEvent.click(screen.getByTestId("icon2"));

  expect(screen.queryByTestId("icon1_mask")).toBeVisible();
  expect(screen.queryByTestId("icon2_mask")).toBeVisible();
  expect(screen.queryByTestId("completion")).toBeVisible();
});
