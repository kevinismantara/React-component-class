import * as React from "react";

import { Flex } from "@workday/canvas-kit-labs-react/layout";
import { Coffee } from "../types";

import { Card } from "./Card";

type CoffeeProps = {
  coffee: Coffee[];
};

export const CoffeeList: React.FC<CoffeeProps> = ({ coffee }) => {
  return (
    <Flex as="main" flexDirection="column" flex={1} padding={0}>
      <Flex flexWrap="wrap" alignItems="flex-start">
        {coffee &&
          coffee.map((brew) => (
            <Card key={brew.id}>
              <Card.Image type={brew.img} alt={`${brew.name} coffee bag`} />
              <Card.Content>
                <Card.Heading>{brew.name}</Card.Heading>
                <Card.Body>{brew.flavorProfile}</Card.Body>
                <Card.Subtext>
                  ${brew.price} | {brew.bagWeight} oz.
                </Card.Subtext>
              </Card.Content>
            </Card>
          ))}
      </Flex>
    </Flex>
  );
};
