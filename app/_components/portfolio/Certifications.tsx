import { PORTFOLIO_DATA } from "../../_constants";
import SectionContainer from "../layout/SectionContainer";
import CertificationsGrid from "./CertificationsGrid";

export default function Certifications() {
  const { certifications } = PORTFOLIO_DATA;

  return (
    <SectionContainer id="certifications" className="py-8 scroll-mt-20">
      <h3 className="text-2xl font-bold text-slate-100 mb-8 tracking-tight">
        Featured Certifications
      </h3>

      <CertificationsGrid certifications={certifications} />
    </SectionContainer>
  );
}
