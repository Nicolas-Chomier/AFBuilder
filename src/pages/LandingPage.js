import React, { useState } from "react";
import { Grid, CardActions, Button } from "@mui/material";
import DoubleToggle from "../components/DoubleToggle";
import ReservedSlots from "../components/ReservedSlots";
import Selector from "../components/Selector";
import Title from "../components/Title";
import ToggleSwitch from "../components/ToggleSwitch";
import ElementPanel from "../components/ElementPanel";
import Array from "../components/Array";
import Number from "../components/Number";
// Logic
import publicDatas from "../data/front/public.json";
import { build } from "../library/build";
// JSON
const pub = JSON.parse(JSON.stringify(publicDatas));
// Datas importation
const ihmProface = pub.ihmProface;
const Instrumentations = pub.Instrumentations;
const ComposantsProcess = pub.ComposantsProcess;
const Vannes = pub.Vannes;
const Analyseurs = pub.Analyseurs;
const Machines = pub.Machines;
const Ressources = pub.Ressources;
// Get infos from front (elements array)
function fetchDatas() {
  const finalResults = [];
  finalResults.length = 0;
  var rows = document.getElementsByTagName("tbody")[0].rows;
  for (var i = 0; i < rows.length; i++) {
    const results = {};
    results["categorie"] = rows[i].getElementsByTagName("td")[0].innerText;
    results["id"] = rows[i].getElementsByTagName("td")[1].innerText;
    results["tag"] = rows[i].getElementsByTagName("td")[2].innerText;
    finalResults.push(results);
  }
  return finalResults;
}
// React JSX
const LandingPage = () => {
  const [resultProjectName, setResultProjectName] = useState("NoName");
  const [openAirStatus, setOpenAirStatus] = useState(false);
  const [selectedScreen, setSelectedScreen] = useState("LT4000");
  const [reservedSlots, setReservedSlots] = useState({
    NI: 0,
    NO: 0,
    AI: 0,
    AO: 0,
  });
  const [coefficient, setCoefficient] = useState(1);
  const [language, setLanguage] = useState(false);
  const [architectureSection, setArchitectureSection] = useState(false);
  const [DeviceListSection, setDeviceListSection] = useState(false);
  // Result from choice on different panels (false protect against empty entry when page build/refresh)
  const [config, setConfig] = useState(false);
  //
  const mainObject = {
    ProjectName: resultProjectName,
    OpenAir: openAirStatus,
    Screen: selectedScreen,
    Slots: reservedSlots,
    Coef: coefficient,
    language: language,
    architectureSection: architectureSection,
    DeviceListSection: DeviceListSection,
  };
  return (
    <Grid container spacing={2}>
      <Grid item xs={12} sm={6} md={6} lg={6}>
        <Title title={"Nom du projet"} result={setResultProjectName} />
      </Grid>
      <Grid item xs={12} sm={6} md={6} lg={6}>
        <Selector
          title={"Choix de l'ecran"}
          data={ihmProface}
          result={setSelectedScreen}
        />
      </Grid>
      <Grid item xs={12} sm={12} md={12} lg={12}>
        <ToggleSwitch title={"Open Air"} result={setOpenAirStatus} />
      </Grid>
      <Grid item xs={12} sm={12} md={12} lg={12}>
        <ReservedSlots title={"Espace réservés"} result={setReservedSlots} />
      </Grid>
      <Grid item xs={12} sm={6} md={6} lg={6}>
        <Number title={"Coeff"} result={setCoefficient} />
      </Grid>
      <Grid item xs={12} sm={6} md={6} lg={6}>
        <DoubleToggle
          LeftTitle={"Français"}
          RightTitle={"Anglais"}
          result={setLanguage}
        />
      </Grid>
      <Grid item xs={12} sm={6} md={6} lg={6}>
        <ToggleSwitch title={"Architecture"} result={setArchitectureSection} />
      </Grid>
      <Grid item xs={12} sm={6} md={6} lg={6}>
        <ToggleSwitch title={"Liste (I/O)"} result={setDeviceListSection} />
      </Grid>
      <Grid item xs={12} sm={6} md={6} lg={4}>
        <ElementPanel data={Instrumentations} output={setConfig} />
      </Grid>
      <Grid item xs={12} sm={6} md={6} lg={4}>
        <ElementPanel data={ComposantsProcess} output={setConfig} />
      </Grid>
      <Grid item xs={12} sm={6} md={6} lg={4}>
        <ElementPanel data={Vannes} output={setConfig} />
      </Grid>
      <Grid item xs={12} sm={6} md={6} lg={4}>
        <ElementPanel data={Analyseurs} output={setConfig} />
      </Grid>
      <Grid item xs={12} sm={6} md={6} lg={4}>
        <ElementPanel data={Machines} output={setConfig} />
      </Grid>
      <Grid item xs={12} sm={6} md={6} lg={4}>
        <ElementPanel data={Ressources} output={setConfig} />
      </Grid>
      <Grid item xs={12}>
        <Array item={config} />
      </Grid>
      <Grid item xs={12} sm={6} md={6} lg={6}>
        <CardActions sx={{ mb: 1, justifyContent: "center" }}>
          <Button
            variant="contained"
            onClick={() => {
              const mainArray = fetchDatas();
              build(mainObject, mainArray, 0);
            }}
          >
            Analyse Fonctionnelle
          </Button>
        </CardActions>
      </Grid>
      <Grid item xs={12} sm={6} md={6} lg={6}>
        <CardActions sx={{ mb: 1, justifyContent: "center" }}>
          <Button
            variant="contained"
            color="success"
            onClick={() => {
              const mainArray = fetchDatas();
              build(mainObject, mainArray, 1);
            }}
          >
            Chiffrage du Projet
          </Button>
        </CardActions>
      </Grid>
    </Grid>
  );
};
export default LandingPage;
