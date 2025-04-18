import React from "react";
import styles from "./BuildingDashboard.module.css";
import { buildingDashboardItems } from "../../constants/building-dashboard";
import BuildingDashboardItem from "../BuildingDashboardItem/BuildingDashboardItem";
import { Link } from "react-router-dom";
import Button from "../Button/Button";
import { FaPlus } from "react-icons/fa6";

type BuildingDashboardProps = {
  floorsCount: number;
  buildingId: string;
};

const BuildingDashboard: React.FC<BuildingDashboardProps> = ({
  floorsCount,
  buildingId,
}) => {
  return (
    <div className={styles.buildingDashboard}>
      <nav>
        {buildingDashboardItems.map((item) => (
          <BuildingDashboardItem
            key={item.label}
            label={item.label}
            className={"active"}
          />
        ))}
      </nav>
      <div className={styles.content}>
        <div className={styles.contentHeader}>
          <h3>Floors ({floorsCount})</h3>
          <Button  text="Create new floor" icon={FaPlus}/>
        </div>
        <Link to={`/buildings/floors/${buildingId}`}>
          <img
            className={styles.floorImage}
            src="/assets/images/add-a-floor.png"
            alt="floor-image"
          />
        </Link>
        {floorsCount === 0 && (
          <p>There are no floors created for this building.</p>
        )}
      </div>
    </div>
  );
};

export default BuildingDashboard;
