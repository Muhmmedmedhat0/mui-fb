import React from "react";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";

import Box from "@mui/material/Box";
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";

import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { Avatar, Stack, TextField } from "@mui/material";
import EmojiEmotionsIcon from "@mui/icons-material/EmojiEmotions";
import InsertPhotoIcon from "@mui/icons-material/InsertPhoto";
import VideocamIcon from "@mui/icons-material/Videocam";
import PersonAddAlt1Icon from "@mui/icons-material/PersonAddAlt1";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import DateRangeIcon from "@mui/icons-material/DateRange";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  height: 450,
  bgcolor: "background.paper",
  border: "0.5px solid #ccc",
  boxShadow: 24,
  p: 4,
  borderRadius: 4,
};

function Add() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <div>
        <Box onClick={handleOpen}>
          <Tooltip
            title="Add"
            sx={{
              position: "fixed",
              bottom: 20,
              left: { xs: "calc(50% - 25px)", md: "calc(7% - 25px)" },
            }}>
            <IconButton>
              <Box sx={{ "& > :not(style)": { m: 1 } }}>
                <Fab color="primary" aria-label="add">
                  <AddIcon />
                </Fab>
              </Box>
            </IconButton>
          </Tooltip>
        </Box>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description">
          <Box sx={style}>
            <Box>
              <Typography
                id="modal-modal-title"
                variant="h6"
                component="h4"
                textAlign={"center"}
                fontWeight={400}>
                Create Post
              </Typography>
              <Box
                id="modal-modal-description"
                sx={{
                  mt: 2,
                  display: "flex",
                  gap: 2,
                  alignAitem: "center",
                  marginBottom: 1,
                }}>
                <Avatar
                  alt="Trevor Henderson"
                  src="https://material-ui.com/static/images/avatar/7.jpg"
                />
                <Typography fontWeight={500} variant="h6">
                  Suzan Doe
                </Typography>
              </Box>
              <Box>
                <TextField
                  sx={{ width: "100%" }}
                  id="standard-multiline-static"
                  label="whats on your mind ?"
                  multiline
                  rows={7}
                  variant="standard"
                />
                <Stack direction="row" gap={8} mt={1}  mb={5}>
                  <EmojiEmotionsIcon htmlColor="gold" fontSize="large" />
                  <InsertPhotoIcon htmlColor="gray" fontSize="large" />
                  <VideocamIcon htmlColor="red" fontSize="large" />
                  <PersonAddAlt1Icon htmlColor="blue" fontSize="large" />
                </Stack>
                <ButtonGroup
                  fullWidth
                  variant="contained"
                  aria-label="outlined primary button group">
                  <Button sx={{ width: "900px" }}>Post</Button>
                  <Button>
                    <DateRangeIcon />
                  </Button>
                </ButtonGroup>
              </Box>
            </Box>
          </Box>
        </Modal>
      </div>
    </>
  );
}

export default Add;
