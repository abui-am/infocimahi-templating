import React from "react";
import BasicContainer from "~/components/layouts/BasicContainer";
import BasicLayout from "~/components/layouts/BasicLayout";
import { InfocimahiProvider } from "~/template/context/InfocimahiContext";
import InfocimahiTemplate from "~/template/infocimahi/Infocimahi";
const InfocimahiIndex = () => {
  return (
    <BasicLayout>
      <BasicContainer>
        <InfocimahiProvider>
          <InfocimahiTemplate />
        </InfocimahiProvider>
      </BasicContainer>
    </BasicLayout>
  );
};

export default InfocimahiIndex;
