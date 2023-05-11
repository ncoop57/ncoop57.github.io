import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/styles";
import { CardMedia, Divider, Paper, Typography } from "@material-ui/core";

const styles = theme => ({
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2
  },
  avatar: {
    margin: 10
  },
  bigAvatar: {
    width: 512,
    height: 512
  }
});

const About = props => {
  const { classes } = props;

  return (
    <div className="about">
      <Paper className={classes.root} elevation={1}>
        <CardMedia
          className="text-center"
          onError={e => {
            console.log("What", e);
          }}
        >
          <img src="./images/profile.jpg" alt="Nathan Cooper" width="25%" />
        </CardMedia>
        <Typography className="text-center" variant="headline" component="h3">
          I'm a nerd.
        </Typography>
        <Divider />
        <br />
        <Typography align="justify" component="p">
          Hi there, my name is Nathan Cooper. I am currently the Lead Research Scientist for the <a href="http://www.carper.ai/codeai">Code.AI</a> Team at <a href="http://www.stability.ai/">Stability.AI</a>.
          My work focuses on helping software developers by applying Deep Learning to Software Engineering problems such as code generation and bug fixing.
          I received my Ph.D. from the College of William and Mary in Computer Science in 2023 under the awesome advisement of Dr.
          <a href="http://www.cs.wm.edu/~denys/"> Denys Poshyvanyk</a>.
          I hope to eventually contribute to educating the world by helping creating the next
          generation of education tools such as the{" "}
          <a href="https://www.khanacademy.org/">Khan Academy</a> and the{" "}
          <a href="https://www.edx.org/">edX</a> platform that democratizes knowledge and education. It is my belief that personalized learning will be the future of education
          and I hope to contribute to that vision.
          I also hope to some of the most innocent, namely children who are subjected to
          some of the most ugly and cruel parts of the world, by helping victims of human trafficking,
          CSAM, and other forms of abuse with companies such as{" "}
          <a href="https://www.thorn.org/our-work-to-stop-child-sexual-exploitation/">Thorn</a>.


          <br />
          <br />

          As a hobby, I work on personal projects which you can
          find a list of, hopefully mostly complete, ones on my Projects page.
          Below you will find my resume if you are curious in any of my other
          experiences or accomplishments. If you have any questions or just want
          to say hi, feel free to connect via email at <a href="mailto:nathan.cooper@stability.ai">nathan.cooper@stability.ai</a>,
          Twitter <a href="https://twitter.com/ncooper57">@ncooper57</a>, or <a href="https://www.linkedin.com/in/nathan-cooper-820292106/">LinkedIn</a>!
        </Typography>

        <br />

        <iframe
          src="https://docs.google.com/gview?url=https://nathancooper.io/files/resume.pdf&embedded=true"
          style={{ width: "100%", height: 512 }}
          frameborder="0"
          title="resume"
        />
      </Paper>
    </div>
  );
};

About.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(About);
