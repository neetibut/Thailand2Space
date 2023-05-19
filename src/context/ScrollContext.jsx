import { createContext, useContext, useRef, useCallback } from 'react';

const ScrollContext = createContext();

export const useScroll = () => {
  const context = useContext(ScrollContext);
  if (!context) {
    throw new Error('useScroll must be used within a ScrollProvider');
  }
  return context;
};

export const ScrollProvider = ({ children }) => {
  const sectionRef_about = useRef(null);
  const sectionRef_mission = useRef(null)
  const sectionRef_updates = useRef(null)
  const sectionRef_join = useRef(null)
  const sectionRef_invest = useRef(null)

  const scrollToAbout = useCallback(() => {
    if (sectionRef_about.current) {
      sectionRef_about.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, []);

  const scrollToMission = useCallback(() => {
    if (sectionRef_mission.current) {
        sectionRef_mission.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, []);

  const scrollToUpdates = useCallback(() => {
    if (sectionRef_updates.current) {
        sectionRef_updates.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, []);

  const scrollToJoin = useCallback(() => {
    if (sectionRef_join.current) {
        sectionRef_join.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, []);

  const scrollToInvest = useCallback(() => {
    if (sectionRef_invest.current) {
        sectionRef_invest.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, []);

  return (
    <ScrollContext.Provider 
        value={{ 
                sectionRef_about,
                scrollToAbout,
                sectionRef_mission,
                scrollToMission,
                sectionRef_updates,
                scrollToUpdates,
                sectionRef_join,
                scrollToJoin,
                sectionRef_invest,
                scrollToInvest }}>
      {children}
    </ScrollContext.Provider>
  );
};
