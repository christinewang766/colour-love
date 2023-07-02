// @ts-ignore
import Saved from "../components/images/saved.svg";
// @ts-ignore
import ThemeStyles from "../styling/Theme.module.css";
import DropDown from "../components/DropDown";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logoutUser, selectUser } from "../components/redux/userSlice";
import { random } from "../components/redux/colourSlice";
import { useState } from "react";
import { ImExit } from "react-icons/im";
import { motion } from "framer-motion";
import { Button } from "react-bootstrap";
import Modal from "react-bootstrap/Modal";

/** FEATURES RANDOM/RGB PALETTE GENERATING BUTTONS */
export function Home() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  // @ts-ignore
  var username = user.username;

  /** RGB DROPDOWN */
  const colours = () => {
    return ["red", "green", "blue"];
  };
  const toggleDropDown = () => {
    setShowDropDown(!showDropDown);
  };
  const [show, setShow] = useState(false);
  const [showDropDown, setShowDropDown] = useState(false);

  /** *************************************************************************** */

  return (
    /** OUTER FRAME */
    <div className={ThemeStyles.outerFrame} style={{ background: "#DD517E" }}>
      {/** LOGOUT BUTTON */}

      <button
        style={{
          background: "none",
          border: "none",
          position: "fixed",
          left: "20px",
          top: "20px",
        }}
      >
        <ImExit
          size={40}
          onClick={() => {
            setShow(true);
          }}
        />
      </button>

      {/** INNER FRAME */}

      <div className={ThemeStyles.innerFrame} style={{ background: "#7A98ED" }}>
        {/** SPECIFIES LOGGED IN USER */}

        <h6
          style={{
            color: "#481D52",
            fontFamily: "monospace",
            fontWeight: "900",
            fontSize: "25px",
            textAlign: "left",
            marginBottom: "-5px",
          }}
        >
          {username}'s
        </h6>

        {/** SHAKE ANIMATION WHEN HOVERED OVER SAVED ICON */}

        <motion.div
          whileHover={{ rotate: 10 }}
          transition={{
            type: "spring",
            damping: 10,
            mass: 0.75,
            stiffness: 100,
          }}
        >
          <img src={Saved} onClick={() => navigate("saved")} />
        </motion.div>

        {/** SURPRISE ME BUTTON */}

        <motion.div
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          transition={{ type: "spring", stiffness: 400, damping: 17 }}
        >
          <button
            className={ThemeStyles.button}
            style={{ border: "5px solid #481D52" }}
            onClick={() => {
              dispatch(random());
              navigate("palette");
            }}
          >
            Surprise Me
          </button>
        </motion.div>

        {/** {red, green, blue} BUTTONS */}

        <motion.div
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          transition={{ type: "spring", stiffness: 400, damping: 17 }}
        >
          <button
            className={ThemeStyles.button}
            onClick={(): void => toggleDropDown()}
          >
            Random RGB
          </button>
        </motion.div>

        {showDropDown && (
          <DropDown
            colours={colours()}
            showDropDown={false}
            toggleDropDown={(): void => toggleDropDown()}
          />
        )}

        {/** CONFIRMATION POPUP ON LOGOUT */}

        <Modal
          show={show}
          onHide={() => {
            setShow(false);
          }}
          animation={false}
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
          <Modal.Header closeButton>
            <Modal.Title>Are you sure?</Modal.Title>
          </Modal.Header>
          <Modal.Body>You will have to login again.</Modal.Body>
          <Modal.Footer>
            <Button
              variant="secondary"
              onClick={() => {
                setShow(false);
              }}
            >
              Cancel
            </Button>
            <Button
              variant="primary"
              onClick={() => {
                dispatch(logoutUser);
                navigate("/");
                window.location.reload();
              }}
            >
              Logout
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    </div>
  );
}

export default Home;
