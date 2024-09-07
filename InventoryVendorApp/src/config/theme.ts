import { createTheme } from "@mui/material";

export const myTheme = createTheme({
  palette: {
    primary: {
      main: "#3B82F6",
    },
    secondary: {
      main: "#6B7280",
    },
    error: {
      main: "#EF4444",
    },
    warning: {
      main: "#F59E0B",
    },
    info: {
      main: "#6366F1",
    },
    success: {
      main: "#10B981",
    },
    background: {
      default: "#F9FAFB",
      paper: "#F9FAFB",
    },
    text: {
      primary: "#111827",
      secondary: "#6B7280",
    },
  },
  components: {
    // MuiAccordion: {
    //   styleOverrides: {
    //     root: {
    //       borderRadius: 8,
    //       "&:before": {
    //         backgroundColor: "white",
    //       },
    //       backgroundColor: "#EBF3FE",
    //     },
    //   },
    // },
    // MuiAccordionSummary: {
    //   styleOverrides: {
    //     root: {
    //       backgroundColor: "#EBF3FE",
    //       "&.Mui-expanded": {
    //         backgroundColor: "#3B82F6",
    //         borderRadius: 6,
    // color: "white",
    //         "& .MuiTypography-root": {
    //           color: "white",
    //         },
    //       },
    //     },
    //   },
    // },

    // MuiCollapse: {
    //   styleOverrides: {
    //     entered: {
    //       backgroundColor: "#EBF3FE",
    //     },
    //   },
    // },

    MuiTableHead: {
      styleOverrides: {
        root: {
          backgroundColor: "#3B82F6",
        },
      },
    },
    MuiTypography: {
      styleOverrides: {
        h1: {
          fontSize: "3rem",
        },
        subtitle1: {
          color: "white",
        },
        subtitle2: {
          color: "white",
        },
      },
    },
  },
});
