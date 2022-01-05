import "bootstrap/dist/css/bootstrap.min.css";
import * as React from "react";
import "./Home.module.scss";
import { IHomeProps } from "./IHomeProps";
import AppHeader from "./shared/headers/AppHeader";
import PageHeader from "./shared/headers/PageHeader";

interface IHomeStates {
    orgName: string;
    siteName: string;
}

export default class Home extends React.Component<IHomeProps, IHomeStates> {
    constructor(_props: any) {
        super(_props);
    }

    public render(): React.ReactElement<IHomeProps> {
        return (
            <div>
                <div className="container ms-Grid">
                    <AppHeader />
                    <PageHeader pageHeaderLabel="Test Page header" buttonLabel="Test Button level" />
                </div>
            </div>


        );
    }
}
