import React from "react";
import BasicContainer from "~/components/layouts/BasicContainer";
import BasicLayout from "~/components/layouts/BasicLayout";
import BandungBarat from "~/template/bandungbarat/BandungBarat";
const BandungBaratIndex = () => {
  return (
    <BasicLayout>
      <BasicContainer>
        <BandungBarat />
      </BasicContainer>
    </BasicLayout>
  );
};

export default BandungBaratIndex;
