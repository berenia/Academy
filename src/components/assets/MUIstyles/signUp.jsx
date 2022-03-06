import BgImage from "../../static/images/avatar/admin.gif";

export const Style = {
  Container: {
    backgroundImage: `url(${BgImage})`,
    backgroundSize: 'auto',
    backgroundRepeat: 'no-repeat',
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    width: { xs: "100%", sm: "80%", lg: "700px" },
   
  },
  IntroSide: {
    width: { xs: "40%", md: "40%" },
    height: "400px",
    backgroundImage:
      "linear-gradient(to top left, rgba(25,80,220,1), rgba(220,20,118,0.7))",
    color: "#fff",
    display: "flex",
    position: "relative",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    textAlign: 'center',
    padding: 2,
    zIndex: "2",
    "@keyframes right": {
      "0%": { backgroundColor: "#fff",color: "transparent", left: "0%" },
      "25%": { backgroundColor: "transparent", color: "transparent" },
      "50%": { backgroundColor: "#fff", color: "transparent" },
      "75%": { backgroundColor: "transparent" },
      "100%": { color: "#fff", left: "57%" },
    },
    "@keyframes left": {
      "0%": { backgroundColor: "#fff",color: "transparent", left: "57%" },
      "25%": { backgroundColor: "transparent", color: "transparent" },
      "50%": { backgroundColor: "#fff", color: "transparent" },
      "75%": { backgroundColor: "transparent" },
      "100%": { color: "#fff", left: "0%" },
    },
  },
  FormSide: {
    width: { xs: "60%", md: "60%" },
    backgroundColor: "#fff",
    color: '#fff',
    display: "flex",
    position: "relative",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    paddingBottom: '5px',
    marginRight: "20px",
    "@keyframes rRight": {
      "0% ": { backgroundColor: "white", color: "transparent", left: "-0%" },
      "25%": { backgroundColor: "transparent", color: "transparent" },
      "50%": { backgroundColor: "transparent", color: "transparent" },
      "75%": { backgroundColor: "#fff", color: "transparent" },
      "100%": {
        backgroundColor: "#fff",
        color: '#fff',
        left: "-44%",
        marginRight: "0px",
        marginLeft: "20px",
      },
    },
    "@keyframes rLeft": {
      "0% ": { backgroundColor: "white", color: "transparent", left: "-44%" },
      "25%": { backgroundColor: "transparent", color: "transparent" },
      "50%": { backgroundColor: "transparent", color: "transparent" },
      "75%": { backgroundColor: "#fff", color: "transparent" },
      "100%": {
        backgroundColor: "#fff",
        color: '#fff',
        left: "0%",
        marginRight: "20px",
        marginLeft: "0px",
      },
    },
  },

  Button: {
    color: "inherit",
    "&:hover": {
      backgroundColor: "#fff",
      color: "rgba(25,118,220,1)",
    },
  },
  switchButton: {
    border: "1px solid #fff",
    color: "#fff",
    "&:hover": {
      backgroundColor: "#fff",
      color: "rgba(25,118,220,1)",
    },
  },
};
