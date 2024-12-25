import { Box, Card, Grid2, Stack, TextField, Typography } from "@mui/material";
import LinkChip from "./LinkChip";
import InstagramIcon from '../../assets/business/instagram.png';
import WhatsappIcon from '../../assets/business/whatsapp.png';
import FacebookIcon from '../../assets/business/facebook.png';
import LinkedInIcon from '../../assets/business/linkedin.png';
import GoogleIcon from '../../assets/business/google.png';
import { useState } from "react";

const MagicLink = () => {
  const [activeLink, setActiveLink] = useState(null);

  const data = [
    { id: 1, icon: InstagramIcon, title: "Instagram" },
    { id: 2, icon: WhatsappIcon, title: "Whatsapp" },
    { id: 3, icon: FacebookIcon, title: "Facebook" },
    { id: 4, icon: LinkedInIcon, title: "Linkedin" },
    { id: 5, icon: GoogleIcon, title: "Google" },
    // { id: 6, icon: GoogleIcon, title: "Google" },
    // { id: 7, icon: GoogleIcon, title: "Google" },
    // { id: 8, icon: GoogleIcon, title: "Google" },
    // { id: 9, icon: GoogleIcon, title: "Google" },
  ];

  const handleButtonClick = (id) => {
    setActiveLink(id === activeLink ? null : id); // Toggle active state
  };

  return (
    <Stack width={1} paddingX={{ xs: 0.4, lg: 0 }}>
      <Grid2 container spacing={3}>
        {data.map((item) => (
          <Grid2 item key={item.id}>
            <Box
              width={activeLink ? '100%' : 120}
              sx={{
                transition: "all 1s ease-in-out",
                boxShadow: activeLink === item.id ? "2px 3px 3px 1px rgba(80, 67, 29, 0.1)" : "none",
                borderRadius: 3,
                background:
                  activeLink === item.id
                    ? "linear-gradient(139deg, rgba(248, 217, 165, 0.06) 0%, rgba(254, 227, 186, 0.26) 100%)"
                    : "transparent",
                // transform: activeLink === item.id ? "scale(1.01)" : "scale(1)",
              }}
            >
              <LinkChip
                active={activeLink === item.id}
                onGo={() => handleButtonClick(item.id)}
                icon={item.icon}
                title={item.title}
              />
              {activeLink === item.id && (
                <Card
                  sx={{
                    padding: 1,
                    mt: 1,
                    boxShadow: "none",
                    "&:hover": { boxShadow: "none" },
                  }}
                >
                  <Typography variant="subtitle">Enter your link:</Typography>
                  <TextField
                    rows={2}
                    sx={{
                      "& .MuiOutlinedInput-root": {
                        borderRadius: 10,
                        borderColor: "text.secondary",
                        padding: 0,
                      },
                    }}
                    fullWidth
                    size="small"
                  />
                </Card>
              )}
            </Box>
          </Grid2>
        ))}
      </Grid2>
    </Stack>
  );
};

export default MagicLink;
