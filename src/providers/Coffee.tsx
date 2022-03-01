import * as React from "react";

import data from "../data/all-coffee.json";
import { Coffee } from "../types";

export type CoffeeContextType = Record<string, Coffee[]>;

export const CoffeeContext = React.createContext({} as CoffeeContextType);

export const splitCoffee = (coffee: Coffee[]) => {
  const range = coffee.length / 6;
  const newCoffee = coffee.slice(0, range);
  const popularCoffee = coffee.slice(range, range * 2);
  const staffCoffee = coffee.slice(range * 2, range * 3);

  return [newCoffee, popularCoffee, staffCoffee];
};

const [newCoffee, popularCoffee, staffCoffee] = splitCoffee(data);

const coffee: CoffeeContextType = {
  all: data,
  popular: popularCoffee,
  new: newCoffee,
  alan: staffCoffee
};

export const CoffeeProvider: React.FC = (props) => {
  // const value = {
  //   coffee
  // } as CoffeeContextType;

  return (
    <CoffeeContext.Provider value={coffee}>
      {props.children}
    </CoffeeContext.Provider>
  );
};

export const useCoffee = () => {
  const context = React.useContext(CoffeeContext);
  if (!context) {
    throw new Error(`useCoffee must be used within a CoffeeContext`);
  }

  return context;
};
