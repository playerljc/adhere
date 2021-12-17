import React, { useState, useEffect } from 'react';
import { v1 } from 'uuid';
import { Skeleton } from 'antd';

import { Empty } from 'antd';

import Sector from './components/Sector';
import StackedSector from './components/StackedSector';
import Circle from './components/Circle';
import Carousel from './components/Carousel';
import { statusColor, legendColor, legendItem, everyLengthConfig } from './config';

import styles from './index.less';

import { data } from './data';

const Windmill = ({
  resData = undefined,
  circleBgColor = '#fff',
  showCarousel = true,
  legendTop = 40,
  size = 'normal',
  ...others
}) => {
  const defaultIndex = 0;
  const [persons, setPersons] = useState([]);
  const [activePerson, setActivePerson] = useState(null);
  const [loading, setLoading] = useState(false);

  const radiusLists = {
    normal: [68, 105, 252, 278, 304, 322, 325],
    small: [68, 105, 228, 253, 278, 290, 293],
  };

  const radius = radiusLists[size];

  const rendomSize = (num) => {
    const arr = [radius[4], radius[3], radius[2]];
    if (num >= 50) {
      return arr[0];
    }
    if (num < 50 && num > 20) {
      return arr[1];
    }
    return arr[2];
  };

  const handleItemData = (item) => {
    if (!item) {
      return { detail: {}, key: v1(), collaborator: [], projects: [] };
    }
    const { collaborator, projects, ...detail } = item;
    if (!collaborator || !projects) {
      return { detail, key: v1(), collaborator: [], projects: [] };
    }
    const collaboratorIds = collaborator.map((i) => i.id);
    const newProjects = new Array(collaboratorIds.length + 1).fill().map(() => []);
    projects.forEach((i) => {
      const index = collaboratorIds.indexOf(i.collaboratorId);
      if (index > -1) {
        newProjects[index].push({ ...i, key: v1() });
      } else {
        newProjects[newProjects.length - 1].push({ ...i, key: v1() });
      }
    });
    const newCollaborator = collaborator.map((p, pidx) => ({
      ...p,
      projectsLength: newProjects[pidx].length,
      key: v1(),
    }));
    if (newProjects[newProjects.length - 1].length > 0) {
      newCollaborator.push({
        name: '',
        projectsLength: newProjects[newProjects.length - 1].length,
        key: v1(),
      });
    }
    return {
      collaborator: newCollaborator,
      projects: newProjects.flat(),
      detail,
      key: v1(),
    };
  };

  useEffect(() => {
    if (resData !== undefined) {
      if (!resData) {
        return;
      }
      const result = handleItemData(resData);
      setPersons([result]);
      setActivePerson(result);
      return;
    }
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      const personsList = data.map((item) => {
        return handleItemData(item);
      });
      setPersons(personsList);
      setActivePerson(personsList[defaultIndex]);
    }, 300);
  }, [resData]);

  const renderDetails = () => {
    const { projects } = activePerson;
    const numbers = projects.length;
    const minAngle = 360 / numbers;
    return projects.map((i, idx) => (
      <Sector
        size={radius[6]}
        color={statusColor[i.status]}
        detail={i}
        lineWidth={24}
        key={i.key}
        angle={minAngle}
        rotate={idx * minAngle - 1.5}
        {...everyLengthConfig[activePerson.projects.length]?.details}
        {...others}
      />
    ));
  };
  const renderProjects = () => {
    const { projects } = activePerson;
    const amounts = projects.map((i) => Number(i.status === 1 ? i.yme : i.sme));
    const numbers = projects.length;
    const minAngle = 360 / numbers;
    return projects.map((i, idx) => (
      <StackedSector
        angle={minAngle}
        showAnimate
        rotate={idx * minAngle}
        size={rendomSize(amounts[idx])}
        key={i.key}
        data={i}
        {...everyLengthConfig[activePerson.projects.length]?.projects}
        {...others}
      />
    ));
  };
  const renderCollaborator = () => {
    const { collaborator = [] } = activePerson;
    const numbers =
      collaborator.length === 0
        ? 1
        : collaborator?.map((i) => i.projectsLength)?.reduce((a, b) => a + b);
    const minAngle = 360 / numbers;
    let rotate = 0;
    return collaborator.map((i) => {
      const angle = minAngle * i.projectsLength;
      rotate += angle;
      return (
        <Sector
          angle={angle}
          rotate={rotate - angle}
          size={radius[1]}
          showAnimate
          key={i.key}
          lineWidth={collaborator.length === 1 ? 0 : undefined}
          textHeight={37}
          texts={[i]}
          onClick={() => {
            i.id && window.open(`/person/${i.id}?occType=1`);
          }}
          textColors={['#fff']}
          color={legendColor[1]}
          {...everyLengthConfig[activePerson.projects.length]?.collaborator}
          {...others}
        />
      );
    });
  };
  const renderPerson = () => {
    const { detail } = activePerson;
    return (
      <Circle
        detail={detail}
        size={radius[0]}
        onClick={(v) => {
          if (!window.location.pathname.startsWith('/person')) {
            v.pplId && window.open(`/person/${v.pplId}?occType=1`);
          }
        }}
        onCompanyClick={(v) => {
          v.envId && window.open(`/company/${v.envId}?entType=1`);
        }}
        {...others}
      />
    );
  };
  const renderLegend = () => {
    const { detail, collaborator, projects } = activePerson;
    if (!detail || !collaborator.length || !projects.length) {
      return null;
    }
    const legends = legendItem.map((i) => (
      <div className={styles.legendItem} key={v1()}>
        <i className={styles.color} style={{ backgroundColor: i.color }} />
        <span>{i.name}</span>
      </div>
    ));
    return (
      <div className={styles.legend} style={{ top: legendTop }}>
        {legends}
      </div>
    );
  };
  const renderResult = () => {
    if (!activePerson) {
      return null;
    }
    return (
      <>
        {showCarousel && (
          <Carousel
            data={persons}
            defaultIndex={defaultIndex}
            onChange={(item) => {
              setActivePerson(item);
            }}
          />
        )}
        {renderDetails()}
        <Circle size={radius[5]} color={circleBgColor} {...others} />
        {renderProjects()}
        {renderCollaborator()}
        {renderPerson()}
        {renderLegend()}
      </>
    );
  };
  if (loading) {
    return new Array(2).fill().map((i, idx) => <Skeleton key={idx} active />);
  }
  if (!activePerson) {
    return <Empty className={styles.empty} />;
  }
  return <div className={styles.container}>{renderResult()}</div>;
};

export default Windmill;
