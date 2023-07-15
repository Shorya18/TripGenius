import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

export default function ActionAreaCard(props) {
  return (
    <Card sx={{ marginLeft: "20px", marginRight: "20px" }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={props.image}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Valley
          </Typography>
          <Typography variant="body2" color="text.secondary">
            <h4>Switzerland is a heaven.</h4>
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
