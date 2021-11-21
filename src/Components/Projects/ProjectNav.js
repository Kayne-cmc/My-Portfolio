import React from 'react';
import { Link } from 'react-router-dom';
import './ProjectNav.css';

function scrollToTop() {
    window.scrollBy(0,-document.body.scrollHeight);
}

export default function ProjectNav() {
    return (
        <div className="projectNav">
            <ul>
                <span>
                    <i className="fas fa-angle-left" />
                    <li><a href="/Projects/#Brawlbuddies">Brawlbuddies</a></li>
                </span>
                <span>
                    <i className="fas fa-angle-left" />
                    <li><a href="/Projects/#Workout-tracker">Workout Tracker</a></li>
                </span>
                <span>
                    <i className="fas fa-angle-left" />
                    <li><a href="/Projects/#Hyperloop">The aCADemics Hyperloop</a></li>
                </span>
                <span>
                    <i className="fas fa-angle-left" />
                    <li><a href="/Projects/#Module-supports">Module Supports</a></li>
                </span>
                <span>
                    <i className="fas fa-angle-left" />
                    <li><a href="/Projects/#Animal-climber">The Animal Climber</a></li>
                </span>
                <span>
                    <i className="fas fa-angle-left" />
                    <li><a href="/Projects/#Escape-the-cave">Escape The Cave</a></li>
                </span>
                <span>
                    <i className="fas fa-angle-left" />
                    <li><Link to="/Projects" onClick={scrollToTop}>Back To Top</Link></li>
                </span>
            </ul>
        </div>
    )
}
