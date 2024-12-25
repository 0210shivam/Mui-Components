import { createTheme } from "@mui/material";
import typography from "./typography";
import Card from "./components/card/Card";
import Drawer from "./components/navigation/Drawer";
import CssBaseline from "./components/utils/CssBaseline";
import ListItemButton from "./components/lists/ListItemButton";
import ListItemIcon from "./components/lists/ListItemIcon";
import ListItemText from "./components/lists/ListItemText";
import Chip from "./components/chip/Chip";

const theme = createTheme({
   typography,
   components: {
      MuiCard: Card,
      MuiDrawer: Drawer,
      MuiCssBaseline: CssBaseline,
      // MuiDivider: Divider,
      MuiListItemButton: ListItemButton,
      MuiListItemIcon: ListItemIcon,
      MuiListItemText: ListItemText,
      // MuiChip: Chip
   }
})

export default theme;