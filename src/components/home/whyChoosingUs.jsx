import { Grid, Typography } from "@mui/material";
import {
  FlatCard,
  FlatCardContent,
  FlatCardHeader,
} from "../assets/Berenia/FlatCard";
import WhyUsImage from "../static/images/jpg/whyus.png";

const school = [
  {
    id: 1,
    level: "Secondary",
    intro:
      "We provide avenue for secondary school students to explore real world skills and makes impact...",
  },
  {
    id: 2,
    level: "University",
    intro:
      "We provide avenue for University students to explore real world skills and makes impact...",
  },
  {
    id: 3,
    level: "Professional",
    intro:
      "We provide avenue for Professiona to explore real world skills and makes impact...",
  },
];

const TargetCard = (props) => {
  return (
    <FlatCard>
      <FlatCardHeader>{props.level}</FlatCardHeader>
      <FlatCardContent>{props.intro}</FlatCardContent>
    </FlatCard>
  );
};

const WhyChoosingUs = () => {
  return (
    <Grid
      container
      spacing={5}
      sx={{ justifyContent: 'center', alignItems: 'center', paddingLeft: { xs: 2, md: 0 }, }}
    >
      <Grid item xs={12} md={6} sx={{ width: "100%", marginTop: -10 }}>
        <img
          src={WhyUsImage}
          style={{
            width: '100%',
          }}
        />
      </Grid>

      <Grid item xs={12} md={6}>
        <Typography
          component="div"
          variant="h3"
          sx={{ fontWeight: 'bold', textAlign: "center", marginBottom: '40px', }}
        >
          Why Choosing Us
        </Typography>
        <Typography
          sx={{ padding: { xs: 0, md: 2 }, paddingTop: 2,  color: '#333' }}
        >
          We have Created System that will help you proficient in your skills
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat
        </Typography>
      </Grid>
      <Grid
        item
        md={12}
        sx={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-around",
        }}
        
        data-aos='fade-left'
        data-aos-delay='300'
        data-aos-offset='300'
        data-aos-duration='1000'
      >
        {school.map((target) => (
          <TargetCard
            key={target.level}
            level={target.level}
            intro={target.intro}
          />
        ))}
        ;
      </Grid>
    </Grid>
  );
};

export default WhyChoosingUs;
