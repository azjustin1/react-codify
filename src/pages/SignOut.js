import React, { useState } from "react";
import ReactModalLogin from "react-modal-login";
import { Button, Modal } from "@material-ui/core";
import { facebookConfig, googleConfig } from "../configs/social-config";
import { useStateValue } from "../context/StateProvider";
import { ACTION_TYPE } from "../reducers/reducer";

import AceTextEditor from "../components/AceEditor";

function SignOut() {
  const [isOpen, setOpen] = useState(false);

  const [state, dispatch] = useStateValue();
  const handleLogin = () => {
    dispatch({ type: ACTION_TYPE.START_LOADING });
    setTimeout(() => {
      dispatch({ type: ACTION_TYPE.FINISH_LOADING });
    }, 3000);
  };

  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <div>
      {/* <button color="primary" onClick={handleOpen}>
        Click open Modal
      </button> */}
      <Button variant="contained" color="primary">
        Primary
      </Button>
      <Button variant="contained" color="secondary">
        Secondary
      </Button>
      <Modal open={isOpen} onClose={handleClose}>
        <div
          style={{
            margin: "auto",
            backgroundColor: "red",
            width: 800,
          }}>
          This is modal content
        </div>
      </Modal>
      <AceTextEditor />
      {/* <form onSubmit={handleSubmit}>
        <label htmlFor="">Email</label>
        <input value={data.email} onChange={e => setEmail(e.target.value)} />
        <label htmlFor="">Password</label>
        <input value={data.password} onChange={e => setPassword(e.target.value)} />
        <button class="element" type="submit">Login</button>
      </form>
      {loading ? <WaveLoading color="green" size="large" /> : result} */}
    </div>
  );
}

export default SignOut;
