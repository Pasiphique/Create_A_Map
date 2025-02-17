import React from "react";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import { FaFlag, FaBaseballBall, FaIndustry, FaFootballBall, FaBuilding, FaCity } from "react-icons/fa";
import "react-vertical-timeline-component/style.min.css";

const PittsburghTimeline = () => {
  return (
    <div>
      <div>
        <h1>Pittsburgh: A Journey Through Time</h1>
        <p style={{fontFamily: 'sans-serif'}}>Pittsburgh, founded in 1758 at the confluence of the Allegheny and Monongahela Rivers, has a rich history shaped by industry, innovation, and transformation. Originally a vital military outpost, the city quickly grew into a thriving center for steel production during the Industrial Revolution, earning it the nickname "Steel City." Over the decades, Pittsburgh adapted to economic changes, shifting away from steel and embracing technology, healthcare, and education. Today, the city is a vibrant hub known for its universities, diverse culture, and strong sense of community, while still honoring its industrial roots.</p>
      </div>
     
      <VerticalTimeline>
        {/* 1. Battle of Bower Hill */}
        <VerticalTimelineElement
          className="vertical-timeline-element--battle"
          contentStyle={{ background: "#dc3545", color: "#fff" }}
          contentArrowStyle={{ borderRight: "7px solid #dc3545" }}
          date="1777"
          iconStyle={{ background: "#dc3545", color: "#fff" }}
          icon={<FaFlag />}
        >
          <h3 className="vertical-timeline-element-title">Battle of Bower Hill</h3>
          <p>Pittsburgh's first major conflict with British loyalists during the American Revolution.</p>
        </VerticalTimelineElement>

        {/* 2. Pittsburgh Post-Gazette Founded */}
        <VerticalTimelineElement
          className="vertical-timeline-element--newspaper"
          contentStyle={{ background: "#28a745", color: "#fff" }}
          contentArrowStyle={{ borderRight: "7px solid #28a745" }}
          date="1800s"
          iconStyle={{ background: "#28a745", color: "#fff" }}
          icon={<FaFlag />}
        >
          <h3 className="vertical-timeline-element-title">The Pittsburgh Post-Gazette Founded</h3>
          <p>One of the longest-running newspapers in the United States begins its publication.</p>
        </VerticalTimelineElement>

        {/* 3. Pittsburgh's First Railroad */}
        <VerticalTimelineElement
          className="vertical-timeline-element--railroad"
          contentStyle={{ background: "#ff5733", color: "#fff" }}
          contentArrowStyle={{ borderRight: "7px solid #ff5733" }}
          date="1845"
          iconStyle={{ background: "#ff5733", color: "#fff" }}
          icon={<FaIndustry />}
        >
          <h3 className="vertical-timeline-element-title">Pittsburgh's First Railroad</h3>
          <p>The Pittsburgh & Lake Erie Railroad begins operations, transforming transportation in the city.</p>
        </VerticalTimelineElement>

        {/* 4. Oil and Natural Gas Discovery */}
        <VerticalTimelineElement
          className="vertical-timeline-element--oil"
          contentStyle={{ background: "#ffcc00", color: "#000" }}
          contentArrowStyle={{ borderRight: "7px solid #ffcc00" }}
          date="1870s"
          iconStyle={{ background: "#ffcc00", color: "#000" }}
          icon={<FaIndustry />}
        >
          <h3 className="vertical-timeline-element-title">Oil and Natural Gas Discovery</h3>
          <p>Pittsburgh thrives with the discovery of oil and natural gas, bringing new industries to the region.</p>
        </VerticalTimelineElement>

        {/* 5. First Electric Streetcars */}
        <VerticalTimelineElement
          className="vertical-timeline-element--electric"
          contentStyle={{ background: "#6610f2", color: "#fff" }}
          contentArrowStyle={{ borderRight: "7px solid #6610f2" }}
          date="1900"
          iconStyle={{ background: "#6610f2", color: "#fff" }}
          icon={<FaIndustry />}
        >
          <h3 className="vertical-timeline-element-title">First Electric Streetcars</h3>
          <p>Pittsburgh introduces its first electric streetcars, modernizing the city's transportation system.</p>
        </VerticalTimelineElement>

        {/* 6. Pirates' First World Series */}
        <VerticalTimelineElement
          className="vertical-timeline-element--baseball"
          contentStyle={{ background: "#dc3545", color: "#fff" }}
          contentArrowStyle={{ borderRight: "7px solid #dc3545" }}
          date="1911"
          iconStyle={{ background: "#dc3545", color: "#fff" }}
          icon={<FaBaseballBall />}
        >
          <h3 className="vertical-timeline-element-title">Pittsburgh Pirates' First World Series Win</h3>
          <p>The Pittsburgh Pirates win their first World Series, cementing the city's legacy in sports.</p>
        </VerticalTimelineElement>

        {/* 7. The Great Depression's Impact */}
        <VerticalTimelineElement
          className="vertical-timeline-element--depression"
          contentStyle={{ background: "#ff5733", color: "#fff" }}
          contentArrowStyle={{ borderRight: "7px solid #ff5733" }}
          date="1930s"
          iconStyle={{ background: "#ff5733", color: "#fff" }}
          icon={<FaIndustry />}
        >
          <h3 className="vertical-timeline-element-title">Impact of the Great Depression</h3>
          <p>Pittsburgh's steel industry faces economic hardship during the Great Depression, leading to significant change.</p>
        </VerticalTimelineElement>

        {/* 8. Pittsburgh Steelers Founded */}
        <VerticalTimelineElement
          className="vertical-timeline-element--steelers"
          contentStyle={{ background: "#28a745", color: "#fff" }}
          contentArrowStyle={{ borderRight: "7px solid #28a745" }}
          date="1941"
          iconStyle={{ background: "#28a745", color: "#fff" }}
          icon={<FaFootballBall />}
        >
          <h3 className="vertical-timeline-element-title">Pittsburgh Steelers Founded</h3>
          <p>The Pittsburgh Steelers are founded, becoming one of the most successful teams in NFL history.</p>
        </VerticalTimelineElement>

        {/* 9. Urban Renewal in Pittsburgh */}
        <VerticalTimelineElement
          className="vertical-timeline-element--urbanrenewal"
          contentStyle={{ background: "#ffcc00", color: "#000" }}
          contentArrowStyle={{ borderRight: "7px solid #ffcc00" }}
          date="1960s"
          iconStyle={{ background: "#ffcc00", color: "#000" }}
          icon={<FaBuilding />}
        >
          <h3 className="vertical-timeline-element-title">Urban Renewal</h3>
          <p>Much of Pittsburgh's older architecture was demolished to make way for new infrastructure and development.</p>
        </VerticalTimelineElement>

        {/* 10. Steelers' Fourth Super Bowl Win */}
        <VerticalTimelineElement
          className="vertical-timeline-element--steelers"
          contentStyle={{ background: "#17a2b8", color: "#fff" }}
          contentArrowStyle={{ borderRight: "7px solid #17a2b8" }}
          date="1979"
          iconStyle={{ background: "#17a2b8", color: "#fff" }}
          icon={<FaFootballBall />}
        >
          <h3 className="vertical-timeline-element-title">Steelers' Fourth Super Bowl Win</h3>
          <p>The Pittsburgh Steelers won their fourth Super Bowl, solidifying their dominance in the NFL during the 1970s.</p>
        </VerticalTimelineElement>

        {/* 11. Steel Industry Decline */}
        <VerticalTimelineElement
          className="vertical-timeline-element--industry"
          contentStyle={{ background: "#dc3545", color: "#fff" }}
          contentArrowStyle={{ borderRight: "7px solid #dc3545" }}
          date="1980s"
          iconStyle={{ background: "#dc3545", color: "#fff" }}
          icon={<FaIndustry />}
        >
          <h3 className="vertical-timeline-element-title">Decline of the Steel Industry</h3>
          <p>Pittsburgh undergoes economic transformation as the steel industry declines, leading to a shift towards healthcare and technology.</p>
        </VerticalTimelineElement>

        {/* 12. Pittsburgh’s Revitalization */}
        <VerticalTimelineElement
          className="vertical-timeline-element--revitalization"
          contentStyle={{ background: "#6610f2", color: "#fff" }}
          contentArrowStyle={{ borderRight: "7px solid #6610f2" }}
          date="1990s"
          iconStyle={{ background: "#6610f2", color: "#fff" }}
          icon={<FaBuilding />}
        >
          <h3 className="vertical-timeline-element-title">Pittsburgh's Revitalization</h3>
          <p>Pittsburgh undergoes significant urban renewal, with new developments in technology, education, and healthcare.</p>
        </VerticalTimelineElement>

        {/* 13. Pittsburgh's Green City Movement */}
        <VerticalTimelineElement
          className="vertical-timeline-element--green"
          contentStyle={{ background: "#28a745", color: "#fff" }}
          contentArrowStyle={{ borderRight: "7px solid #28a745" }}
          date="2000s"
          iconStyle={{ background: "#28a745", color: "#fff" }}
          icon={<FaCity />}
        >
          <h3 className="vertical-timeline-element-title">Pittsburgh's Green City Movement</h3>
          <p>Pittsburgh becomes a model of sustainability, with green spaces, clean energy initiatives, and environmental awareness growing.</p>
        </VerticalTimelineElement>

        {/* 14. Pittsburgh’s Tech Boom */}
        <VerticalTimelineElement
          className="vertical-timeline-element--tech"
          contentStyle={{ background: "#6610f2", color: "#fff" }}
          contentArrowStyle={{ borderRight: "7px solid #6610f2" }}
          date="2010s"
          iconStyle={{ background: "#6610f2", color: "#fff" }}
          icon={<FaIndustry />}
        >
          <h3 className="vertical-timeline-element-title">Pittsburgh's Tech Boom</h3>
          <p>With companies like Google and Uber establishing offices, Pittsburgh becomes a hub for the tech industry.</p>
        </VerticalTimelineElement>
      </VerticalTimeline>

    </div>
  );
};

export default PittsburghTimeline;
