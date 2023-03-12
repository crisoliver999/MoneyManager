import { Grid, Box, Typography } from "@mui/material";
import NewAccountModal from "./NewAccountModal";
import accounts from "consts/accounts";
import { useState } from "react";

const DashboardAccountsOverview = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <Grid container spacing={1}>
        {accounts.map(({ icon, name, balance, currencySymbol, color }) => (
          <Grid item xs={2} key={`${name}${balance}`}>
            <Box
              display="flex"
              alignItems="center"
              borderRadius="1rem"
              backgroundColor={color}
              p="0.5rem"
              gap=".5rem"
              height="4rem"
              onClick={() => console.log("click")}
              sx={{ cursor: "pointer" }}
            >
              {icon}
              <Box display="flex" flexDirection="column">
                <Typography>{name}</Typography>
                <Typography>
                  {currencySymbol}
                  {balance}
                </Typography>
              </Box>
            </Box>
          </Grid>
        ))}
        <Grid item xs={2}>
          <Box
            borderRadius="1rem"
            display="flex"
            justifyContent="center"
            alignItems="center"
            p="0.5rem"
            border="3px grey dashed"
            onClick={() => setIsModalOpen(true)}
            sx={{ cursor: "pointer" }}
            height="4rem"
          >
            <Typography variant="h5">New Account</Typography>
          </Box>
        </Grid>
      </Grid>
      <NewAccountModal isOpen={isModalOpen} toggleIsOpen={setIsModalOpen} />
    </>
  );
};

export default DashboardAccountsOverview;
