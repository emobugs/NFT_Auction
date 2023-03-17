import Header from"../../../src/components/header/Header";
import ProfileHero from "../../../src/components/profile/ProfileHero";
import ProfileUser from "../../../src/components/profile/ProfileUser";
import ProfileCollection from "../../../src/components/profile/ProfileCollection";
import Footer from "../../../src/components/footer/Footer";

import { useRouter } from "next/router";
import { useState, useEffect } from "react";

import styles from "./index.module.scss"

export default function profile() {
  const [profile, setProfile] = useState({});
  const [profileFilters, setProfileFilters] = useState([]);

  const router = useRouter();
  const id = router.query.id;

  useEffect(async () => {
    if (id) {
      const response = await fetch(`${process.env.apiUrl}/users/${id}`);
      if (response.ok) {
        const data = await response.json();
        setProfile(data.user);
        setProfileFilters(data.filters);
      }
    }
  }, [id]);

      return (
        <div className={styles['wrapper']}>
          <Header />
          {profile.avatar && <ProfileHero image={profile.avatar.url} />}
          <ProfileUser
            name={profile.username}
            avatar={profile.avatar ? profile.avatar.url : ''}
            info={profile.info}
            verified={profile.verified}
          />
          <ProfileCollection items={profile.nfts} filters={profileFilters} />
          <Footer />
        </div>
      );
}
