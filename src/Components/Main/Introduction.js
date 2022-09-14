import React from "react";

export default function Introduction() {
	return (
	<div className="introduction">
    	<h1 className="header">A little bit about myself. . .</h1>
    	<p className="text">
			I am a 3B Mechanical Engineering student at the University of Waterloo.
			I love a nice relaxing day of coding or skateboarding (Check out my
			skateboarding page{" "}
        <a
			href="https://www.instagram.com/kayne.skates/"
			target="blank"
			className="introduction-link"
        >
			here
        </a>
			!) but most of all, I love learning new things and applying them into my work! I am constantly looking for new programming languages to learn
			and new skills to develop so that I can create more awesome things.
			Check out the{" "}
        <a
			href="/projects"
			className="introduction-link"
        >
			projects
        </a>{" "}
			I have made so far!
		</p>
		<h1 className="header">My story, my goals</h1>
		<p className="text" style={{ marginBottom: 0 }}>
			Growing up in Richmond Hill, I watched my dad’s creativity unfold as he
			would be working on something new every week. Whether it was a
			renovation for the house, a new skateboard obstacle for my brother and
			me, or a fishing gadget for himself, my dad always kept himself busy. As
			a kid who couldn't even use a power drill (and I still struggle
			sometimes), I was amazed by his work and aspired to be creative like
			him. Now as a future engineer, I hold the same goal that I had as a kid
			- to explore my imagination and create amazing things.
		</p>
      	<h1 className="header">Skills</h1>
    </div>
	);
}
