
import { Box, Card, Typography } from "@mui/material";
import { AlarmOn, CorporateFare, FactCheck } from "@mui/icons-material";
import CastForEducationIcon from "@mui/icons-material/CastForEducation";
import {
  FlatCard,
  FlatCardContent,
  FlatCardHeader,
  FlatCardIcon,
} from "../assets/Berenia/FlatCard";

const Resolution = () => {
  return (
    <Box sx={{ padding: { xs: 6, md: 15 }, paddingTop: { xs: 10, md: 12 } }}>
      <Typography
        variant="h3"
        component="div"
        sx={{ textAlign: "center", mb: 8, width: "100%", fontWeight: "bold" }}
      >
        Final resolution to get the skill <br />
        Its time to start the journey
      </Typography>
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          flexWrap: "wrap",
        }}
      >
        <FlatCard
          data-aos="fade-up"
          data-aos-easing="ease-in-out"
          data-aos-duration="500"
        >
          <FlatCardIcon>
            <CastForEducationIcon />
          </FlatCardIcon>
          <FlatCardHeader>Technology</FlatCardHeader>
          <FlatCardContent>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore
          </FlatCardContent>
        </FlatCard>

        <FlatCard
          data-aos="fade-up"
          data-aos-easing="ease-in-out"
          data-aos-duration="700"
        >
          <FlatCardIcon>
            <CorporateFare />
          </FlatCardIcon>
          <FlatCardHeader>Office</FlatCardHeader>
          <FlatCardContent>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore
          </FlatCardContent>
        </FlatCard>

        <FlatCard
          data-aos="fade-up"
          data-aos-easing="ease-in-out"
          data-aos-duration="900"
        >
          <FlatCardIcon>
            <FactCheck />
          </FlatCardIcon>
          <FlatCardHeader>Business</FlatCardHeader>
          <FlatCardContent>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore
          </FlatCardContent>
        </FlatCard>
      </div>
    </Box>
  );
};

export default Resolution;
