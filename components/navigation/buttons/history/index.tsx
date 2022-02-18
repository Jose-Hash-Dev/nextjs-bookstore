import React from "react";
import { useRouter } from "next/router";
import { Style } from "./style";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const History = () => {
  const router = useRouter();
  return (
    <Style>
      <ArrowBackIcon color="primary" onClick={() => router.back()} />
    </Style>
  );
}
export default History;
