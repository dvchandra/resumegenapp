import React from "react";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
export default function SimpleCard() {
  return (
    <div>
      <Avatar
        alt="Remy Sharp"
        src="https://image.flaticon.com/icons/png/512/2922/2922506.png"
      />
      <Typography variant="h4" component="h4">
        welcome , User
      </Typography>
      <Card>
        <CardContent>
          <form noValidate autoComplete="off">
            <div>
              <TextField id="Fname" label="First Name" variant="outlined" />
              <TextField id="Fname" label="First Name" variant="outlined" />
            </div>
            <div>
              <TextField id="Fname" label="First Name" variant="outlined" />
              <TextField id="Fname" label="First Name" variant="outlined" />
            </div>
          </form>
        </CardContent>
        <CardActions></CardActions>
      </Card>
    </div>
  );
}
