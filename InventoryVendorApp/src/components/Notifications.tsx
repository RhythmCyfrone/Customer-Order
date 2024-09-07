import { CancelOutlined } from "@mui/icons-material";
import DoneAllIcon from "@mui/icons-material/DoneAll";
import { Box, IconButton, Paper } from "@mui/material";
import Typography from "@mui/material/Typography";
import { data } from "../../public/data/myData";
export default function Notifications({
  handleClose,
}: {
  handleClose: () => void;
}) {
  return (
    <Box sx={{ borderRadius: "21px" }} width={480}>
      <Box
        sx={{
          display: "flex",
          p: 2,
          color: "white",
          backgroundColor: "#3B82F6",
          justifyContent: "space-between",
        }}
      >
        <Box sx={{ display: "flex" }}>
          <Typography variant="h5" fontFamily={"Quicksand"}>
            Notifications
          </Typography>
          <Typography
            variant="subtitle1"
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: 24,
              height: 24,
              mt: 0.5,
              ml: 1,
              backgroundColor: "white",
              borderRadius: "50%",
              color: "#3B82F6",
            }}
            fontFamily={"Quicksand"}
          >
            2
          </Typography>
        </Box>
        <Box>
          <IconButton size="small">
            <DoneAllIcon sx={{ color: "white" }} />
          </IconButton>
          <IconButton size="small" onClick={handleClose}>
            <CancelOutlined sx={{ color: "white" }} />
          </IconButton>
        </Box>
      </Box>
      <Paper sx={{ p: 2, backgroundColor: "white" }}>
        {data.map((item) => (
          <Box
            key={item.id}
            sx={{
              borderRadius: 15,
              backgroundColor: "#EBF3FE",
              color: "black",
              p: 1,
              mb: 1,
            }}
          >
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <Typography sx={{ fontSize: 14 }} color="black">
                {item.raisedBy} Raised New Indent from&nbsp;
              </Typography>
              <Typography color="#3B82F6" sx={{ fontSize: 14 }}>
                {item.kitchenName}
              </Typography>
            </Box>
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <Typography>
                {item.date !== Date.now()
                  ? "Today"
                  : new Date(item.date).toLocaleDateString("en-IN", {
                      day: "2-digit",
                      month: "2-digit",
                      year: "numeric",
                    })}
              </Typography>
            </Box>
          </Box>
        ))}
      </Paper>
    </Box>
  );
}
