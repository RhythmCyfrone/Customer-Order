import {
  HistoryOutlined,
  InsertDriveFileOutlined,
  Storefront,
  VerifiedOutlined,
} from "@mui/icons-material/";
import WarningAmberRoundedIcon from "@mui/icons-material/WarningAmberRounded";
import { Box, Button, Link, Stack, Typography } from "@mui/material";
import { useState } from "react";
import { useAppDispatch } from "../App/hooks";
import { ListIcon, OrderIcon, VegIcon } from "../Assets/Icons/MainIcons";
import {
  AutoIcon,
  DeliveryIcon,
  InvoiceIcon,
  IssuedIcon,
} from "../Assets/Icons/SubIcons";
import MyAccordion from "./MyAccordion";
import { closeSidebar, openSidebar } from "../App/store/sidebarSlice";

export default function Sidebar() {
  const [selectedAccordion, setSelectedAccordion] = useState("");
  const dispatch = useAppDispatch();

  const handleAccordionChange = (accordionTitle: string) => {
    setSelectedAccordion((prev) =>
      prev === accordionTitle ? "" : accordionTitle,
    );
    if (selectedAccordion === accordionTitle) {
      dispatch(closeSidebar());
    } else {
      dispatch(openSidebar(accordionTitle));
    }
  };

  return (
    <Box
      height={"100vh"}
      width={360}
      sx={{
        backgroundColor: "white",
        boxShadow: "0px 4px 4px rgba(76, 183, 255, 0.25)",
      }}
    >
      <Box
        sx={{
          backgroundColor: "#3B82F6",
          height: 114,
          width: "100%",
          alignItems: "center",
        }}
      >
        <Link href="/">
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              pt: 1,
            }}
          >
            <img src="/Images/zuci-logo.png" width={146} />
          </Box>
        </Link>
        <Typography align="center" variant="subtitle2">
          Jubilee Hills
        </Typography>
        <Typography align="center" variant="subtitle1">
          Hot Kitchen
        </Typography>
      </Box>
      <Stack spacing={2} m={2}>
        <MyAccordion
          select={selectedAccordion === "Indent"}
          setSelect={() => handleAccordionChange("Indent")}
          title="Indent"
          titleIcon={ListIcon}
          children={[
            {
              title: "Draft",
              icon: InsertDriveFileOutlined,
            },
            {
              title: "Auto",
              icon: AutoIcon,
            },
            {
              title: "Raised",
              icon: Storefront,
            },
            {
              title: "Approved by HOD",
              icon: VerifiedOutlined,
            },
            {
              title: "Issued by Stores",
              icon: IssuedIcon,
            },
            {
              title: "History",
              icon: HistoryOutlined,
            },
          ]}
        />
        <MyAccordion
          select={selectedAccordion === "MVP Order Request Sheet"}
          setSelect={() => handleAccordionChange("MVP Order Request Sheet")}
          title="MVP Order Request Sheet"
          titleIcon={VegIcon}
          children={[
            {
              title: "Draft",
              icon: InsertDriveFileOutlined,
            },
            {
              title: "Auto",
              icon: AutoIcon,
            },
            {
              title: "Raised",
              icon: Storefront,
            },
            {
              title: "History",
              icon: HistoryOutlined,
            },
          ]}
        />
        <MyAccordion
          select={selectedAccordion === "Purchase Order"}
          setSelect={() => handleAccordionChange("Purchase Order")}
          title="Purchase Order"
          titleIcon={OrderIcon}
          children={[
            {
              title: "Draft",
              icon: InsertDriveFileOutlined,
            },
            {
              title: "Auto",
              icon: AutoIcon,
            },
            {
              title: "Confirm Invoice",
              icon: InvoiceIcon,
            },
            {
              title: "Confirm Delivery",
              icon: DeliveryIcon,
            },
            {
              title: "History",
              icon: HistoryOutlined,
            },
          ]}
        />
      </Stack>
      <Button
        variant="outlined"
        sx={{
          display: "flex",
          m: 2,
          my: 5,
          height: 40,
          width: "90%",
          backgroundColor: "#FFE1E1",
          border: "2px #FFB0B0 solid",
          borderRadius: 2,
          justifyContent: "space-between",
        }}
        color="error"
        startIcon={<WarningAmberRoundedIcon color="error" />}
        onClick={() => {}}
      >
        <Typography>Alert</Typography>
        <Typography
          sx={{
            backgroundColor: "#FE3737",
            px: 1,
            py: 0.5,
            color: "white",
            borderRadius: "50%",
          }}
        >
          05
        </Typography>
      </Button>
    </Box>
  );
}
