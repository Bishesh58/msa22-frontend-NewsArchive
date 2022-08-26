import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { Provider } from "react-redux";
import { store } from "../app/store";
import SidebarRow from "../components/sidebar/SidebarRow";
import {
  HeartIcon,
  DesktopComputerIcon,
  BeakerIcon,
  VideoCameraIcon,
  OfficeBuildingIcon,
  SupportIcon,
} from "@heroicons/react/outline";

//sidebar components technology
test("renders SidearRow Technology", () => {
  render(
    <Provider store={store}>
      <SidebarRow Icon={DesktopComputerIcon} title="Technology" />
    </Provider>
  );

  const SidebarRowElement = screen.getByText("Technology");
  expect(SidebarRowElement).toBeInTheDocument();
});


//sidebar components Business
test("renders SidearRow Business", () => {
  render(
    <Provider store={store}>
      <SidebarRow Icon={OfficeBuildingIcon} title="Business" />
    </Provider>
  );
  const SidebarRowElement = screen.getByText("Business");
  expect(SidebarRowElement).toBeInTheDocument();
});

//sidebar components Entertainment
test("renders SidearRow Entertainment", () => {
  render(
    <Provider store={store}>
      <SidebarRow Icon={VideoCameraIcon} title="Entertainment" />
    </Provider>
  );
  const SidebarRowElement = screen.getByText("Entertainment");
  expect(SidebarRowElement).toBeInTheDocument();
});

//sidebar components health
test("renders SidearRow Health", () => {
  render(
    <Provider store={store}>
      <SidebarRow Icon={HeartIcon} title="Health" />
    </Provider>
  );
  const SidebarRowElement = screen.getByText("Health");
  expect(SidebarRowElement).toBeInTheDocument();
});

//sidebar components Science
test("renders SidearRow Science", () => {
  render(
    <Provider store={store}>
      <SidebarRow Icon={BeakerIcon} title="Science" />
    </Provider>
  );
  const SidebarRowElement = screen.getByText("Science");
  expect(SidebarRowElement).toBeInTheDocument();
});

//sidebar components Sports
test("renders SidearRow Sports", () => {
  render(
    <Provider store={store}>
      <SidebarRow Icon={SupportIcon} title="Sports" />
    </Provider>
  );
  const SidebarRowElement = screen.getByText("Sports");
  expect(SidebarRowElement).toBeInTheDocument();
});
