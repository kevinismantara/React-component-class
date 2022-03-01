import * as React from "react";

import { CoffeeList } from "../components/CoffeeList";
import { Tabs } from "../components/backstage/Tabs";
import { CoffeeProvider, useCoffee } from "../providers/Coffee";

// import { createComponent } from "@workday/canvas-kit-react";
// import { Tabs, useTabsModel } from "@workday/canvas-kit-react";
// import { SecondaryButton } from "@workday/canvas-kit-react";
// import { starIcon } from "@workday/canvas-system-icons-web";

export const Home: React.FC = () => {
  const coffee = useCoffee();

  const viewData = [
    {
      title: "All",
      id: "all",
      content: <CoffeeList coffee={coffee.all} />
    },
    {
      title: "New",
      id: "new",
      content: <CoffeeList coffee={coffee.new} />
    },
    {
      title: "Popular",
      id: "popular",
      content: <CoffeeList coffee={coffee.popular} />
    },
    {
      title: "Staff Favorites",
      id: "alan",
      content: <CoffeeList coffee={coffee.alan} />
    }
  ];

  return (
    <>
      <Tabs items={viewData} />
    </>
  );
};

export const HomeContainer: React.FC = () => {
  return (
    <CoffeeProvider>
      <Home />
    </CoffeeProvider>
  );
};
