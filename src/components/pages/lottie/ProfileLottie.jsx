import React from 'react';
import Lottie from 'lottie-react';
import ProfileJson from '../../../assets/lottiJson/Man_account_Icon.json';

export const ProfileLottie = () => {
  return (
    <Lottie
      animationData={ProfileJson}
      loop
      autoplay
      className="w-48 h-48"
    />
  );
};