import {
  AddCircleOutlineOutlined,
  ArrowBackIosNew,
} from "@mui/icons-material/";
import {
  Avatar,
  Badge,
  Box,
  Breadcrumbs,
  Button,
  IconButton,
  Link,
  Popover,
  Stack,
} from "@mui/material";
import React from "react";
import { useAppSelector } from "../App/hooks";
import { NotificationIcon } from "../Assets/Icons/MainIcons";
import Notifications from "./Notifications";
import MyTable from "./Table";

export default function Main() {
  const breadcrumbs = [
    <Link
      underline="hover"
      key="1"
      color="inherit"
      href="/"
      sx={{ color: "black" }}
      onClick={handleBreadcrumbClick}
    >
      All Indents
    </Link>,
    // <Link
    //   underline="hover"
    //   key="2"
    //   color="inherit"
    //   onClick={handleBreadcrumbClick}
    // >
    //   Core
    // </Link>,
  ];
  function handleBreadcrumbClick(
    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
  ) {
    event.preventDefault();
    console.info("You clicked a breadcrumb.");
  }
  const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(
    null,
  );

  const handleNotificationClick = (
    event: React.MouseEvent<HTMLButtonElement>,
  ) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;
  const visibility = useAppSelector((state) => state.sidebar.open);

  return (
    <Box width={"80%"} m={5}>
      <Stack
        spacing={2}
        direction={"row"}
        sx={{ justifyContent: "end", alignItems: "center" }}
      >
        <IconButton onClick={handleNotificationClick}>
          <Badge badgeContent={2} color="primary">
            <NotificationIcon />
          </Badge>
        </IconButton>
        <Popover
          id={id}
          open={open}
          anchorEl={anchorEl}
          onClose={handleClose}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "right",
          }}
          transformOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
        >
          <Notifications handleClose={handleClose} />
        </Popover>
        <Avatar sizes="32" src="/Images/user-profile.png" />
      </Stack>
      {visibility && (
        <>
          <Stack direction={"row"} sx={{ alignItems: "center" }}>
            <IconButton>
              <ArrowBackIosNew sx={{ color: "black" }} />
            </IconButton>
            <Breadcrumbs separator={<ArrowBackIosNew fontSize="large" />}>
              {breadcrumbs}
            </Breadcrumbs>
          </Stack>
          <MyTable />
          <Button
            variant="outlined"
            startIcon={<AddCircleOutlineOutlined />}
            color="primary"
            sx={{ width: 200 }}
          >
            Add New Indent
          </Button>
        </>
      )}
    </Box>
  );
}
