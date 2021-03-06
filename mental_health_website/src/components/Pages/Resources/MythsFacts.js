import React from "react";
import './css/MythsFacts.css';

export const MythsFacts = () => {
    return(
        <div className="thirdRow">
            <div className="grid-container-mf">
                <div className="grid-item-mf">
                    <div className="title">
                        <h1 className="title-mf">Myths and Facts about Mental Health</h1>
                    </div>
                </div>
                <div className="grid-item-mf">
                    <div className="container-mf">
                        <h1>MYTHS</h1>
                        <ul>
                            <li>Mental illness is incurable and lifelong.</li>
                            <li>Only certain types of people develop a mental illness.</li>
                            <li>Mental illness is caused by a personal weakness.</li>
                        </ul>
                    </div>
                </div>
                <div className="grid-item-mf">
                    <div className="container-mf">
                    <h1>FACTS</h1>
                        <ul>
                            <li>With the right kind of help, treated appropriately and early, most people recover fully and have no further episodes of illness.</li>
                            <li>Everyone is vulnerable to mental health problems.</li>
                            <li>A mental illness is not a character flaw. It is caused by a complex interplay of genetic, biological, social and environmental factors.</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MythsFacts;