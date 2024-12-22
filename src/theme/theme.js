import { createTheme } from "@mui/material";
import typography from "./typography";
import Card from "./components/card/Card";
import Drawer from "./components/navigation/Drawer";
import CssBaseline from "./components/utils/CssBaseline";
import Divider from "./components/utils/Divider";

const theme = createTheme({
   typography,
   components: {
      MuiCard: Card,
      MuiDrawer: Drawer,
      MuiCssBaseline: CssBaseline,
      MuiDivider: Divider
   }
})

export default theme;