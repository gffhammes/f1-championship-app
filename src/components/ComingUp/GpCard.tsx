import { Box, Stack, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";
import { getFormattedWeekendDates } from "../../helpers/getFormattedDate";
import { CountryFlag } from "../NextGp/CountryFlag";
import { IRace } from "../../interfaces";

type Props = {
  gpData: IRace;
};

const sxCardWrapper = {
  backgroundColor: "#E9E9E9",
  borderRadius: 2,
  p: 2,
};

const sxCountryFlag = {};

export const GpCard = ({ gpData }: Props) => {
  const formattedDate = getFormattedWeekendDates(gpData);

  return (
    <Box sx={sxCardWrapper}>
      <Stack direction="row" alignItems="flex-start" spacing={2}>
        <CountryFlag
          size="small"
          countryName={gpData.Circuit.Location.country}
        />

        <Box>
          <Typography fontSize={18} fontWeight={600} lineHeight={1}>
            {gpData.raceName}
          </Typography>
          <Typography
            fontSize={12}
            lineHeight={1}
            sx={{ mt: 0.5, color: "rgba(54, 54, 54, 0.8)" }}
          >
            {gpData.Circuit.circuitName}
          </Typography>
          <Typography
            fontSize={12}
            fontWeight={600}
            lineHeight={1}
            sx={{ mt: 1.25, color: "rgba(54, 54, 54, 0.8)" }}
          >
            {formattedDate}
          </Typography>
        </Box>
      </Stack>
    </Box>
  );
};
