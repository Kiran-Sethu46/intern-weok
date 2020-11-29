import { CardContent, CssBaseline, Paper, Typography } from "@material-ui/core";
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import "./AdminPage.css";

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
function AdminPage({ company, name, dob, phone, email }) {
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
            <h3>Email</h3>
          </Typography>
          <div className="adminPage">
            <h5>{company}</h5>
            <h5>{name}</h5>
            <h5>{dob}</h5>
            <h5>{phone}</h5>
            <h5>{email}</h5>
          </div>
        </CardContent>
      </Paper>
    </div>
  );
}

export default AdminPage;
