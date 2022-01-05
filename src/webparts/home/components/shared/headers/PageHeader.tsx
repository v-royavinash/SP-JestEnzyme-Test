import { Icon } from 'office-ui-fabric-react/lib/Icon';
import React from "react";
import styles from "./Header.module.scss";

export interface IPageHeaderProps {
    pageHeaderLabel: string;
    buttonLabel?: string;
}

const PageHeader = ({
    pageHeaderLabel,
    buttonLabel,
}: IPageHeaderProps) => {
    const pageIcon: string = require("../../../assets/images/company.png");
    const insertIcon: string = require("../../../assets/images/insert.png");

    return (
        <div className={styles.pageHeader}>
            <div className={styles.black}>
                <div
                    className={
                        buttonLabel
                            ? "ms-Grid-col ms-sm6"
                            : "ms-Grid-col ms-sm12"
                    }
                >
                    <span className={styles.leftBannner}>
                        <Icon aria-label="SkypeArrow" iconName="SkypeArrow" className={`${styles.backBtn}`} />
                        <span className={styles.bannerImage}>
                            <img
                                className={styles.bannerIcon}
                                src={pageIcon}
                                alt="pageIcon"
                            />
                        </span>
                        <span className={styles.bannerLabel}>
                            {pageHeaderLabel}
                        </span>
                    </span>
                </div>

                {buttonLabel ? (
                    <div className="ms-Grid-col ms-sm6">
                        <span
                            className={styles.pageHeaderButton}
                        >
                            <span className={styles.pageHeaderButtonLabel}>
                                {buttonLabel}
                            </span>
                            <img
                                className={styles.pageHeaderButtonIcon}
                                src={insertIcon}
                                alt="insertIcon"
                            />
                        </span>
                    </div>
                ) : null}
            </div>
        </div>
    );
};

export default PageHeader;
