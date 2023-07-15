import {
  Rating,
  Box,
  ListItemAvatar,
  ListItemText,
  Typography,
} from "@mui/material";
import "../css/RatingComp.css";
import { Avatar } from "@mui/material";
import { deepOrange } from "@mui/material/colors";
function RatingComp({ rate, username, desc }) {
  return (
    <div
      style={{
        background: "white",

        borderRadius: "10px",
        boxShadow: "0px 0px 30px silver",
        display: "flex",
        flexDirection: "column",
        margin: "10px 0px",
        width: "400px",
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          margin: "0px 0px",
          justifyContent: "space-between",
          borderBottom: "1px solid silver",
          padding: "5px 10px",
        }}
      >
        <Avatar
          sx={{ bgcolor: deepOrange[500], width: 42, height: 42 }}
          alt={"nns"}
          src={"nwse"}
        >
          {username[0]}
        </Avatar>

        <Typography
          style={{ fontSize: "14px", fontWeight: "bold", letterSpacing: "1px" }}
        >
          {username}
        </Typography>
        <div class="reviews">
          <Rating value={rate} readOnly></Rating>
        </div>
      </Box>

      <div
        style={{
          background: "floralwhite",
          marginTop: 0,
          display: "flex",
          paddingTop: "10px",
          borderRadius: " 0px 0px 0px 10px",
        }}
      >
        <p
          style={{
            display: "flex",
            fontSize: "15px",
            color: "black",
            alignItems: "center",

            marginLeft: "20px",
          }}
        >
          {desc}
        </p>
      </div>
    </div>
  );
}

export default RatingComp;
