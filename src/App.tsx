import * as React from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import Slider from "@mui/material/Slider";
import ProTip from "./ProTip";

// brain js plus api

// future planning is an app that tracks your company progress in time but with a twist
// calculate future plans based on pased events
// say for example that you have a campaine in an areathat you had already a campaine
// based on you tags(variable) the app will make an estimate on the success rate(so its calculateing the profit/success probablity  )

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

export default function App() {
  return (
    <Container maxWidth="sm">
      <div className="my-4">
        <Typography variant="h4" component="h1" gutterBottom>
          Create React App + Tailwind CSS example
        </Typography>
        <Slider
          className="my-4"
          defaultValue={30}
          classes={{ active: "shadow-none" }}
          componentsProps={{ thumb: { className: "hover:shadow-none" } }}
        />
        <ProTip />
        <Copyright />
      </div>
    </Container>
  );
}
