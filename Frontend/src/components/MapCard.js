import * as React from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import SkipPreviousIcon from "@mui/icons-material/SkipPrevious";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import SkipNextIcon from "@mui/icons-material/SkipNext";
import "../css/MapCard.css";
export function MediaControlCardLeft() {
  const theme = useTheme();

  return (
    <Card
      sx={{ display: "flex", marginLeft: "20px", marginRight: "20px" }}
      style={{ marginTop: "20px" }}
    >
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        {/* <CardContent sx={{ flex: '1 0 auto' }}>
          <Typography component="div" variant="h5">
            Live From Space
          </Typography>
         
        </CardContent> */}

        <CardMedia
          component="img"
          sx={{ width: 350 }}
          image="https://images.unsplash.com/photo-1429044605642-68283f617432?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2874&q=80"
          alt="Live from space album cover"
        />
      </Box>
      <div className="text-card">
        <h2 className="heading">Switzerland is a heaven.</h2>
        <p className="paragraph">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel repellat
          consequatur harum soluta odit ratione nemo consectetur nobis.
          Consequatur et eveniet doloremque odio quia enim ullam fuga numquam
          fugiat minima.
        </p>
      </div>
    </Card>
  );
}

export function MediaControlCardRight() {
  const theme = useTheme();

  return (
    <Card
      sx={{ display: "flex", marginLeft: "20px", marginRight: "20px" }}
      style={{ marginTop: "20px" }}
    >
      <div className="left-text">
        <h2 className="heading">Switzerland is a heaven.</h2>
        <p className="paragraph">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel repellat
          consequatur harum soluta odit ratione nemo consectetur nobis.
          Consequatur et eveniet doloremque odio quia enim ullam fuga numquam
          fugiat minima.
        </p>
      </div>

      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <CardMedia
          component="img"
          sx={{ width: 392, objectFit: "cover" }}
          image="https://images.unsplash.com/photo-1527668752968-14dc70a27c95?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
        />
      </Box>
    </Card>
  );
}
