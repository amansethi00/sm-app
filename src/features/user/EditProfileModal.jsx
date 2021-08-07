import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import { Button, TextField } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import { updateBio, updateUser } from "./userSlice";
import { useNavigate } from "react-router-dom";
const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    zIndex: "21324324333332 !important",
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    zIndex: 21324324333332,
    display: "flex",
    flexFlow: "column wrap",
  },
}));

export const EditProfileModal = ({ open, setOpen, bio }) => {
  const classes = useStyles();
  const user = useSelector((state) => state.user);
  const [input, setInput] = useState(bio);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleClose = () => {
    setOpen(false);
  };
  const formHandler = (e) => {
    e.preventDefault();
    const usernameAndBio = {
      bio: input,
      username: user.username,
    };
    dispatch(updateBio(usernameAndBio));
    setOpen(false);
    setTimeout(() => window.location.reload(), 1000);
  };
  return (
    <Modal
      aria-labelledby="transition-modal-title"
      aria-describedby="transition-modal-description"
      className={classes.modal}
      open={open}
      onClose={handleClose}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500,
      }}
    >
      <Fade in={open}>
        <div className={classes.paper}>
          <h2 id="transition-modal-title">Edit Profile</h2>
          <form onSubmit={(e) => formHandler(e)}>
            <TextField
              id="filled-secondary"
              label="bio"
              variant="filled"
              color="primary"
              defaultValue={input}
              onChange={(e) => setInput(e.target.value)}
              autoComplete="off"
              multiline
            />
            <br />
            <br />
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <Button
                style={{ borderRadius: "2rem" }}
                variant="contained"
                color="primary"
                type="submit"
              >
                Save
              </Button>
              <Button
                onClick={() => setOpen(false)}
                style={{ borderRadius: "2rem" }}
                variant="contained"
              >
                Cancel
              </Button>
            </div>
          </form>
        </div>
      </Fade>
    </Modal>
  );
};
