import React from "react";

import Header from "../../src/components/header/Header";
import ProfileHero from "../../src/components/profile/ProfileHero";
import ProfileUser from "../../src/components/profile/ProfileUser";
import ProfileCollection from "../../src/components/profile/ProfileCollection";
import Footer from "../../src/components/footer/Footer";

import profileData from "../../data/profile.json";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";

export default function profile() {

  const router = useRouter();
  const id = router.query.id;

  useEffect(() => {
    // setProfile(profileData);
    console.log(profileData.nfts);
  }, [id]);
  return (
    <div>
      <Header />
      <ProfileHero image={profileData.avatar.url} />
      <ProfileUser
        name={profileData.username}
        avatar={profileData.avatar.url}
        info={profileData.info}
        verified={profileData.verified}
      />
      <ProfileCollection items={profileData.nfts}/>
      <Footer />
    </div>
  );
}
