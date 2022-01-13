import React, { useState, useEffect } from "react";
import Grid from "@material-ui/core/Grid";
import withWidth from "@material-ui/core/withWidth";
import Fade from "react-reveal/Fade";
import ProvidingCard from "../ProvidingCard";
import profession from "./Images/New-Text-Document.png";
import community from "./Images/New-Text-Document (1).png";
import curriculum from "./Images/New-Text-Document (2).png";

const Providing = (props) => {
  const [fade, setFade] = useState(false);

  useEffect(() => {
    setFade(true);
  }, []);

  const mobileProfessionContent = (
    <Fade bottom when={fade}>
      <ProvidingCard
        logo={profession}
        heading="Expert Teachers"
        text="Our instructors are more adept at monitoring student problems and assessing their level of understanding and progress, and they provide much more relevant, useful feedback.
We are experts in developing and testing hypotheses about learning difficulties or instructional strategies."
      />
    </Fade>
  );

  const professionContent = (
    <ProvidingCard
      logo={profession}
      heading="Expert Teachers"
      text="Our instructors are more adept at monitoring student problems and assessing their level of understanding and progress, and they provide much more relevant, useful feedback.
We are experts in developing and testing hypotheses about learning difficulties or instructional strategies."
    />
  );

  const mobileCommunityContent = (
    <Fade bottom when={fade}>
      <ProvidingCard
        logo={community}
        heading="Online Community"
        text='Feel like home, with a "family of invisible friends".'
      />
    </Fade>
  );

  const mobileCurriculumContent = (
    <Fade bottom when={fade}>
      <ProvidingCard
        logo={curriculum}
        heading="Flexible Curriculum"
        text="Our expert teachers design and curate the curriculum using best practices and careful consideration of how people learn and retain information with the ongoing tech trends in the professional domain. We've debated every facet of our methodology, from the order in which to teach concepts, the analogies used to clarify them and how exercises should be structured to deliver the maximum educational punch."
      />
    </Fade>
  );

  const communityContent = (
    <ProvidingCard
      logo={community}
      heading="Online Community"
      text='Feel like home, with a "family of invisible friends".'
    />
  );

  const curriculumContent = (
    <ProvidingCard
      logo={curriculum}
      heading="Flexible Curriculum"
      text="Our expert teachers design and curate the curriculum using best practices and careful consideration of how people learn and retain information with the ongoing tech trends in the professional domain. We've debated every facet of our methodology, from the order in which to teach concepts, the analogies used to clarify them and how exercises should be structured to deliver the maximum educational punch."
    />
  );

  return (
    <Grid container>
      {props.width === "xs" || props.width === "sm"
        ? mobileProfessionContent
        : professionContent}
      {props.width === "xs" || props.width === "sm"
        ? mobileCommunityContent
        : communityContent}
      {props.width === "xs" || props.width === "sm"
        ? mobileCurriculumContent
        : curriculumContent}
    </Grid>
  );
};

export default withWidth()(Providing);
