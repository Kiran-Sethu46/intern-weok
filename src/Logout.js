import React, { useState, useEffect } from "react";
import * as firebase from "firebase";
import { makeStyles } from "@material-ui/core/styles";
import {
  Button,
  CssBaseline,
  Paper,
  CardContent,
  Typography,
} from "@material-ui/core";
import { auth } from "./firebase";
const useStyles = makeStyles((theme) => ({
  card: {
    marginTop: theme.spacing(2),
    width: "90%",
    marginLeft: "auto",
    marginRight: "auto",
    justifyContent: "center",
    alignItems: "center",
  },
}));
function handleSignOut() {
  auth.signOut();
}
function Logout() {
  const classes = useStyles();
  return (
    <div>
      <CssBaseline />
      <Paper
        item
        alignContent="center"
        spacing={2}
        elevation={8}
        className={classes.card}
      >
        <CardContent>
          <Typography variant="subtitle1" component="h4">
            <h3>Hope you're day is going great !</h3>
          </Typography>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="secondary"
            className={classes.submit}
            onClick={handleSignOut}
          >
            Log Out
          </Button>
        </CardContent>
      </Paper>
    </div>
  );
}

export default Logout;
