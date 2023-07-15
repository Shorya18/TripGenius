import * as React from "react";
import { useState, useEffect } from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import Avatar from "@mui/material/Avatar";
import IconButton, { IconButtonProps } from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import RatingComp from "./RatingComp";
// import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from "@mui/icons-material/Share";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import Rating from "@mui/material/Rating";
import { Box, Button, Paper, Snackbar, TextField } from "@mui/material";
import Axios from "axios";
import CloseIcon from "@mui/icons-material/Close";
import CommentIcon from "@mui/icons-material/Comment";

interface ExpandMoreProps extends IconButtonProps {
  expand: boolean;
}

const ExpandMore = styled((props: ExpandMoreProps) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

function LocationCard2({ name, description, id, user, url }) {
  const [imgUrl, setImgUrl] = useState(url);
  const [ratings, setRating] = useState([]);
  const [expanded, setExpanded] = useState(false);
  const [ratingVal, setRatingVal] = useState(0);
  const [descVal, setDescVal] = useState("");
  const [isAdded, setIsAdded] = useState(false);
  const btnstyle = { margin: "8px 0" };

  const handleExpandClick = async () => {
    await getRating();
    setExpanded(!expanded);
  };
  function handleClose() {
    setIsAdded(false);
  }
  const action = (
    <React.Fragment>
      <Button color="secondary" size="small" onClick={handleClose}>
        UNDO
      </Button>
      <IconButton
        size="small"
        aria-label="close"
        color="inherit"
        onClick={handleClose}
      >
        <CloseIcon fontSize="small" />
      </IconButton>
    </React.Fragment>
  );
  function displayRatings() {
    return (
      <Typography
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        {ratings.map((rating) => {
          return (
            <RatingComp
              rate={rating.rating}
              username={rating.username}
              desc={rating.desc}
            />
          );
        })}
      </Typography>
    );
  }
  function handleDescValChange(e) {
    setDescVal(e.target.value);
  }
  function onSubmit() {
    const netRating = {
      rating: ratingVal,
      desc: descVal,
      user: curUser,
      id: id,
    };
    setDescVal("");
    Axios.defaults.withCredentials = true;
    Axios({
      method: "POST",
      withCredentials: true,
      data: {
        netRating,
      },
      url: "http://localhost:4000/add/rating",
    })
      .then((res) => {
        if (res.data.authenticated) {
          setExpanded(false);
          setIsAdded(true);
        }
      })
      .catch((err) => {
        console.log(err);
      });
    getRating();
  }
  const [isLoggedIn, setisLoggedIn] = useState(false);
  const [curUser, setUser] = useState("test");
  async function getRating() {
    await Axios({
      method: "POST",
      withCredentials: true,
      data: {
        id: id,
      },
      url: "http://localhost:4000/getRating",
    })
      .then((res) => {
        console.log(res.data);
        setRating(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
    console.log(ratings);
  }
  async function getUser() {
    await Axios({
      method: "GET",
      withCredentials: true,
      url: "http://localhost:4000/getUser",
    })
      .then((res) => {
        setisLoggedIn(res.data.loggedIn);
        setUser(res.data.user);
      })
      .catch((err) => {
        console.log(err);
        setisLoggedIn(false);
      });
  }
  useEffect(() => {
    setImgUrl(url);
    getUser();
  }, []);

  const [imageSelected, setImageSelected] = useState("");
  const [loaded, setLoaded] = useState(false);
  const uploadImage = async () => {
    const formData = new FormData();
    formData.append("file", imageSelected);
    formData.append("upload_preset", "kzcpfrtm");
    // Axios.withCredentials = false;
    console.log(id);
    await Axios.post(
      "https://api.cloudinary.com/v1_1/dm0ingrek/image/upload",
      formData
    )
      .then(async (res) => {
        console.log(id, res.data.url);
        setImgUrl(res.data.url);
        await Axios({
          method: "POST",
          url: "http://localhost:4000/add/image",
          data: {
            url: res.data.url,
            id: id,
          },
        }).then((response) => {
          console.log(res.data.url);
          if (!imgUrl) setImgUrl(res.data.url);
          if (response.authenticated) setLoaded(true);
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };
  function handleLoading() {
    setLoaded(false);
  }
  return (
    <div
      style={{
        display: "flex",
        flexBasis: "row",
        background: "white",
        margin: "40px",
        height: "78vh",
        boxShadow: "0px 0px 50px silver",
      }}
    >
      <Box
        style={{
          width: "55%",
          padding: "10px",
          background: "snow",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column" }}>
          <Box>
            <p style={{ fontSize: "22px", marginBottom: 0 }}>{name}</p>
            <p style={{ fontSize: "14px" }}>{`posted by ${user}`}</p>

            <img
              style={{
                height: "50vh",
                width: "100%",
                objectFit: "cover",
                borderRadius: "3px",
                boxShadow: "0px 0px 40px #ofofof",
              }}
              src={
                imgUrl ||
                url ||
                "https://districts.ecourts.gov.in/sites/default/files/u806/rohini.JPG"
              }
            />
            <p>{description}</p>
          </Box>

          <div>
            <form>
              <input
                type="file"
                onChange={(event) => {
                  setImageSelected(event.target.files[0]);
                }}
              />
              <Button variant="contained" onClick={uploadImage}>
                Upload Image
              </Button>
            </form>
          </div>
        </div>
      </Box>
      <div
        style={{
          width: "45%",
          padding: "20px",
          boxSizing: "border-box",
          overflow: "hidden",
          overflowY: "scroll",
          background: "whitesmoke",
        }}
      >
        <Box>
          <Typography paragraph>Rate this Place</Typography>
          <Typography paragraph></Typography>
          <Typography className="rating-form">
            <Typography paragraph>
              <Rating
                name="simple-controlled"
                value={ratingVal}
                onChange={(e, newVal) => {
                  setRatingVal(newVal);
                }}
              />
            </Typography>
            <div>
              <input
                style={{
                  width: "80%",
                  color: "silver",
                  border: "none",
                  padding: "12px 8px",
                  border: "1px solid silver",
                  borderRadius: "5px",
                }}
                placeholder="Leave your thoughts :)"
                maxRows={4}
                value={descVal}
                onChange={handleDescValChange}
                variant="filled"
              />
            </div>
            <Button
              type="submit"
              onClick={onSubmit}
              color="primary"
              variant="contained"
              style={btnstyle}
              disabled={!isLoggedIn}
            >
              Submit
            </Button>
            <Typography paragraph style={{ fontSize: "20px" }}>
              Comments
            </Typography>
            <Typography>{displayRatings()}</Typography>
          </Typography>
        </Box>
      </div>
    </div>
  );
}

export default LocationCard2;
