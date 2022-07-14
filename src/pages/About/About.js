import React from "react";
const about = {
  widte: "700px",
  textAlign: "center",
  fontFamily: "cursive",
  marginRight: "100px",
  marginLeft: "100px",
  fontSize: "xx-large",
  background: "yellow",
  border: "2.5px solid blue",
  borderRadius: "5%",
  marginTop: "25px",
};
const About = () => {
  return (
    <div style={about}>
      <p>
        The Ministry of Health reiterates the recommendation to avoid travel to
        Hubei Province, China - a recommendation issued by many other countries,
        too. Note that many other areas in China have been closed.
      </p>
      <p>
        The Ministry is being informed on this matter by international bodies
        and multiple professional agencies both in Israel and oversees, it holds
        ongoing delibrations, and shall inform the public on the latest
        developments.
      </p>
      <p>
        The Ministry of Health reports that over the weekend, 3 patients who had
        arrived from China, were screened for the coronavirus:
      </p>
      <p>
        The first patient in Hadassah tested negative with 100% certainty; the
        second patient is in Sheba and was tested positive for influenza; the
        third case involves a tourist from China who is confined in Beit Jala.
      </p>
      <p>
        We estimate that additional potential cases of coronavirus will be
        reported by travelers who will travel back from China, but assume that
        most of them would turn out to be other illnesses. In case a
        aornonavirus infection is verified, the Ministry shall issue a special
        release.
      </p>
    </div>
  );
};

export default About;
