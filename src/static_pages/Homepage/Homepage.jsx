import React, { useState } from "react";

import { Button, SectionBlock, HeroSectionBlock, HeaderBlock } from "../../ui";

export const Homepage = () => {
  return (
    <div>
      <HeroSectionBlock bgColor="gradient">
        <div>
          <HeaderBlock>Learning Music has never been Easier</HeaderBlock>
        </div>
        <div>
          {/* <Button color="yellow" size="md" onClick={() => console.log("hello")}>
            Keep in touch
          </Button> */}
        </div>
      </HeroSectionBlock>
      <SectionBlock bgColor="red">
        <div>
          <Button></Button>
        </div>
      </SectionBlock>
    </div>
  );
};
