import React from "react";

export interface IStausIconProps {
    iconName: string;
}

const StausIcon = ({ iconName }: IStausIconProps) => {
    const inprogressIcon: string = require("../../../assets/images/inprogress.png");
    const completedIcon: string = require("../../../assets/images//completed.png");
    const notstartedIcon: string = require("../../../assets/images//notstarted.png");

    return (
        <React.Fragment>
            {
                {
                    inprogress: (
                        <img src={inprogressIcon} />
                    ),
                    completed: (
                        <img src={completedIcon} />
                    ),
                    notstarted: (
                        <img src={notstartedIcon} />
                    ),
                }[iconName]
            }
        </React.Fragment>
    );
};

export default StausIcon;
