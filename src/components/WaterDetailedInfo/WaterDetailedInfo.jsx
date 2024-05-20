// src/components/WaterDetailedInfo.jsx
import { UserPanel } from '../UserPanel/UserPanel';
import { DailyInfo } from '../DailyInfo/DailyInfo';
import { MonthInfo } from '../MonthInfo/MonthInfo';
import css from './WaterDetailedInfo.module.css';

export const WaterDetailedInfo = ({ username, openModal }) => {
  return (
    <section className={css.sectionDetailed}>
      <UserPanel username={username} openModal={openModal} />
      <DailyInfo openModal={openModal} />
      <MonthInfo />
    </section>
  );
};
