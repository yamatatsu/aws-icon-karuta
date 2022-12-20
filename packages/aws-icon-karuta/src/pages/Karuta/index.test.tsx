import "@testing-library/jest-dom";
import { render, screen, fireEvent } from "@testing-library/react";
import Karuta from ".";
import { testIcons } from "../../icons";

const dummySort: <T>(a: T[]) => T[] = (a) => a;

test("initial view", async () => {
  render(
    <Karuta title="" initialIconDict={testIcons} randomSort={dummySort} />
  );

  expect(screen.queryByTestId("archAlexaForBusiness64Svg")).toBeVisible();
  expect(screen.queryByTestId("archAmazonApiGateway64Svg")).toBeVisible();

  expect(
    screen.queryByTestId("archAlexaForBusiness64Svg_mask")
  ).not.toBeInTheDocument();
  expect(
    screen.queryByTestId("archAmazonApiGateway64Svg_mask")
  ).not.toBeInTheDocument();

  expect(screen.queryByTestId("completion")).not.toBeInTheDocument();
});

test("not masked when incorrect", async () => {
  render(
    <Karuta title="" initialIconDict={testIcons} randomSort={dummySort} />
  );

  fireEvent.click(screen.getByTestId("archAmazonApiGateway64Svg"));

  expect(
    screen.queryByTestId("archAlexaForBusiness64Svg_mask")
  ).not.toBeInTheDocument();
  expect(
    screen.queryByTestId("archAmazonApiGateway64Svg_mask")
  ).not.toBeInTheDocument();
  expect(screen.queryByTestId("archAmazonApiGateway64Svg")).toHaveClass(
    "shake"
  );
});

test("masked when correct", async () => {
  render(
    <Karuta title="" initialIconDict={testIcons} randomSort={dummySort} />
  );

  fireEvent.click(screen.getByTestId("archAlexaForBusiness64Svg"));

  expect(screen.queryByTestId("archAlexaForBusiness64Svg_mask")).toBeVisible();
  expect(
    screen.queryByTestId("archAmazonApiGateway64Svg_mask")
  ).not.toBeInTheDocument();
});

test("completion", async () => {
  render(
    <Karuta title="" initialIconDict={testIcons} randomSort={dummySort} />
  );

  fireEvent.click(screen.getByTestId("archAlexaForBusiness64Svg"));

  expect(screen.queryByTestId("archAlexaForBusiness64Svg_mask")).toBeVisible();
  expect(
    screen.queryByTestId("archAmazonApiGateway64Svg_mask")
  ).not.toBeInTheDocument();
  expect(screen.queryByTestId("completion")).not.toBeInTheDocument();

  fireEvent.click(screen.getByTestId("archAmazonApiGateway64Svg"));

  expect(screen.queryByTestId("archAlexaForBusiness64Svg_mask")).toBeVisible();
  expect(screen.queryByTestId("archAmazonApiGateway64Svg_mask")).toBeVisible();
  expect(screen.queryByTestId("completion")).toBeVisible();
});
