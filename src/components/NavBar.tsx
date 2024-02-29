import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

export default function DenseAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar
          variant="dense"
          sx={{ justifyContent: "center", flexDirection: "row" }}
        >
          {/* Keep IconButton commented or add it later, the Typography will remain centered */}
          <Typography variant="h5" color="inherit" component="div">
            Weatherio
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
