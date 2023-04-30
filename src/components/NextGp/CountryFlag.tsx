import { Box } from "@mui/material";
import Image from "next/image";
import React from "react";

type Props = {
  countryName: string;
  size?: "normal" | "small";
};

const countryFlagDictionary: Record<string, string> = {
  USA: "US",
  Italy: "IT",
  Spain: "ES",
  Monaco: "MC",
  Canada: "CA",
};

export const CountryFlag = ({ countryName, size = "normal" }: Props) => {
  console.log(countryName);

  const sxSize =
    size === "small"
      ? {
          height: "2rem",
          width: "3rem",
          borderRadius: 1,
        }
      : {
          height: "4rem",
          width: "6rem",
          borderRadius: 2,
        };

  return (
    <Box
      sx={{
        position: "relative",
        border: "1px solid #bcbcbc",
        ...sxSize,
      }}
    >
      <Image
        src={`https://flagsapi.com/${countryFlagDictionary[countryName]}/flat/64.png`}
        alt={countryName}
        layout="fill"
        objectFit="cover"
        style={{
          borderRadius: "8px",
        }}
      />
    </Box>
  );
};
