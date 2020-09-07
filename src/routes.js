/*!

=========================================================
* Material Dashboard React - v1.9.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-dashboard-react
* Copyright 2020 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/material-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
// @material-ui/icons
import Dashboard from "@material-ui/icons/Dashboard";
import Person from "@material-ui/icons/Person";
import ArtTrack from "@material-ui/icons/ArtTrack";
import LibraryBooks from "@material-ui/icons/LibraryBooks";
import BubbleChart from "@material-ui/icons/BubbleChart";
import LocationOn from "@material-ui/icons/LocationOn";
import Notifications from "@material-ui/icons/Notifications";
import Unarchive from "@material-ui/icons/Unarchive";
import Language from "@material-ui/icons/Language";
// core components/views for Admin layout
import UserProfile from "views/UserProfile/UserProfile.js";
import Qualifications from "views/Qualifications/Qualifications.js";
import Experience from "views/Experience/Experience.js";
import LifeFinder_clab from "views/LifeFinder_clab/LifeFinder_clab.js";
import TerrainCanvas from "views/TerrainCanvas/TerrainCanvas.js";
import MusicLooper from "views/MusicLooper/MusicLooper.js";
import AudioQualityTest from "views/AudioQualityTest/AudioQualityTest.js";
import Portfolio from "views/Portfolio/Portfolio.js";
// core components/views for RTL layout

const dashboardRoutes = [
  {
    path: "/user",
    component: UserProfile,
  },
  {
    path: "/qualifications",
    component: Qualifications,
  },
  {
    path: "/experience",
    component: Experience,
  },
  {
    path: "/Portfolio",
    component: Portfolio,
  },
  {
    path: "/TerrainCanvas",
    component: TerrainCanvas,
  },
  {
    path: "/MusicLooper",
    component: MusicLooper,
  },
  // {
  //   path: "/LifeFinder_clab",
  //   component: LifeFinder_clab,
  // },
];

export const dashboardRoutesTree = [
  {
    path: "/user",
    name: "User Profile",
    icon: Person,
    component: UserProfile,
    child :undefined
  },
  {
    path: "/qualifications",
    name: "Qualifications",
    icon: "content_paste",
    component: Qualifications,
    child :undefined
  },
  {
    path: "/experience",
    name: "Experience",
    icon: LibraryBooks,
    component: Experience,
    child :undefined
  },
  {
    path: "/Portfolio",
    name: "Portfolio",
    icon: ArtTrack,
    component: Portfolio,
    child : [
      {
        path: "/TerrainCanvas",
        name: "3D Terrain Canvas",
        icon: LocationOn,
        component: TerrainCanvas,
      },
      {
        path: "/MusicLooper",
        name: "Music Looper",
        icon: LocationOn,
        component: MusicLooper,
      },
      // {
      //   path: "/LifeFinder_clab",
      //   name: "LifeFinder C-lab",
      //   icon: LocationOn,
      //   component: LifeFinder_clab,
      // },
    ]
  },
];

export default dashboardRoutes;
