import { useEffect, useState } from "react";

import LandingPage from "./features/landing/LandingPage";
import AdmissionScoreGuidePage from "./features/seo/AdmissionScoreGuidePage";
import ExamPreparationGuidePage from "./features/seo/ExamPreparationGuidePage";
import GuidesHubPage from "./features/seo/GuidesHubPage";
import UniversityComparisonGuidePage from "./features/seo/UniversityComparisonGuidePage";
import UniversitySelectionGuidePage from "./features/seo/UniversitySelectionGuidePage";

function resolveView(hash) {
  if (hash === "#guide-university-selection") return "guide";
  if (hash === "#guide-exam-preparation") return "prep";
  if (hash === "#guide-admission-score") return "score";
  if (hash === "#guide-university-comparison") return "comparison";
  if (hash === "#guides") return "hub";
  return "home";
}

export default function App() {
  const [view, setView] = useState(() => {
    if (typeof window === "undefined") return "home";
    return resolveView(window.location.hash);
  });

  useEffect(() => {
    const onHashChange = () => {
      setView(resolveView(window.location.hash));
    };

    window.addEventListener("hashchange", onHashChange);
    return () => window.removeEventListener("hashchange", onHashChange);
  }, []);

  if (view === "guide") {
    return <UniversitySelectionGuidePage />;
  }

  if (view === "prep") {
    return <ExamPreparationGuidePage />;
  }

  if (view === "score") {
    return <AdmissionScoreGuidePage />;
  }

  if (view === "comparison") {
    return <UniversityComparisonGuidePage />;
  }

  if (view === "hub") {
    return <GuidesHubPage />;
  }

  return <LandingPage />;
}
