import React from 'react';
import { Link } from "react-router-dom";
import BrawlBuddiesDemo from '../images/BrawlBuddiesDemo.png';
import WorkoutTrackerDemo from '../images/WorkoutTrackerDemo.png';
import HyperLoopDemo from '../images/HyperLoopDemo.png';
import AnimalClimberDemo from '../images/AnimalClimberDemo.png';
import EscapeTheCaveDemo from '../images/EscapeTheCaveDemo.png';
import ModuleSupportDemo from '../images/ModuleSupportDemo.jpg';
import "./ProjectDemo.css";

export default function ProjectDemo(props) {
    return (
        <div className="Projects-demo">
            <table>
                <tbody>
                <tr>
                    <td>
                        <Link to="/Projects" onClick={() => props.setIndex(0)}>
                            <div className="demo-tab">
                            <img src={BrawlBuddiesDemo} alt="Brawlbuddies"/>
                            <div className="break"></div>
                            <div className="demo-tab-description">
                                <p className="project-demo-title header">Brawlbuddies</p>
                            </div>
                            </div>
                        </Link>
                    </td>
                    <td>
                        <Link to="/Projects" onClick={() => props.setIndex(1)}>
                            <div className="demo-tab">
                            <img src={WorkoutTrackerDemo} alt="AnimalClimber"/>
                            <div className="break"></div>
                            <div className="demo-tab-description">
                                <p className="project-demo-title header">Workout Tracker</p>
                            </div>
                            </div>
                        </Link>
                    </td>
                </tr>
                <tr>
                    <td>
                        <Link to="/Projects" onClick={() => props.setIndex(2)}>
                            <div className="demo-tab">
                            <img src={HyperLoopDemo} alt="Hyperloop"/>
                            <div className="break"></div>
                            <div className="demo-tab-description">
                                <p className="project-demo-title header">The aCADemics Hyperloop</p>
                            </div>
                            </div>
                        </Link>
                    </td>
                    <td>
                        <Link to="/Projects" onClick={() => props.setIndex(3)}>
                            <div className="demo-tab">
                            <img src={ModuleSupportDemo} alt="Module Support"/>
                            <div className="break"></div>
                            <div className="demo-tab-description">
                                <p className="project-demo-title header">Module Supports</p>
                            </div>
                            </div>
                        </Link>
                    </td>
                </tr>
                <tr>
                    <td>
                        <Link to="/Projects" onClick={() => props.setIndex(4)}>
                            <div className="demo-tab">
                            <img src={AnimalClimberDemo} alt="AnimalClimber"/>
                            <div className="break"></div>
                            <div className="demo-tab-description">
                                <p className="project-demo-title header">The Animal Climber</p>
                            </div>
                            </div>
                        </Link>
                    </td>
                    <td>
                        <Link to="/Projects" onClick={() => props.setIndex(5)}>
                            <div className="demo-tab">
                                <img src={EscapeTheCaveDemo} alt="Escape The Cave"/>
                                <div className="break"></div>
                                <div className="demo-tab-description">
                                    <p className="project-demo-title header">Escape The Cave</p>
                                </div>
                            </div>
                        </Link>
                    </td>
                </tr>
                </tbody>
            </table>
        </div>
    )
}
