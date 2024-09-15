import React from "react";

// import BranchCounsellors from "@/components/index/branch-counsellors";
// import EventCard from "@/components/index/event-card";
// import ExecutiveCommittee from "@/components/index/executive-committee";
// import VisionMissionSection from "@/components/vm-section";
import DataCard from "@/components/dataCard";
import TopLogo from "@/components/topLogo";

export default function Home() {
  return (
    // <div>
    //   <VisionMissionSection />
    //   <BranchCounsellors />
    //   <EventCard />
    //   <ExecutiveCommittee />
    // </div>
    <div>
      <TopLogo data="#00629b[IEEE] NSBM-IEEE STUDENT BRANCH OF NSBM" />
      <DataCard
        data='IEEE Computer Society (sometimes abbreviated as the Computer Society or CS) is a professional
      society of the Institute of Electrical and Electronics Engineers (IEEE). Its purpose and scope are "to advance the theory,
      practice, and application of computer and information processing science and technology" and the "professional standing of its members".
      The CS is the largest of 39 technical societies organized under the IEEE Technical Activities Board.<br>
      The IEEE Computer Society sponsors workshops and conferences, publishes a variety of peer-reviewed literature,
      operates technical committees, and develops IEEE computing standards. It supports more than 200 chapters worldwide and participates
      in educational activities at all levels of the profession, including distance learning, accreditation of higher education programs
      in computer science, and professional certification in software engineering.|https://nsbmieee.org/_nuxt/image/cd440c.webp'
      />
      <TopLogo data="#702f8a[WIE] Affinity Group-IEEE WOMEN IN ENGINEERING AFFINITY GROUP OF NSBM" />
      <DataCard
        data="IEEE Women in Engineering (WIE) is a global platform of IEEE members and volunteers dedicated to advancing
      women engineers and scientists and empowering young girls throughout the world to pursue academic interests in engineering
      and scientific professions. Women in Engineering Affinity Group of NSBM (WIE NSBM) is one of the student branch chapters
      of the global network which uplifts the women in leadership roles in industry as well as international platforms.|https://nsbmieee.org/_nuxt/image/0eeb4d.webp"
      />
      <TopLogo data="#ffa300[Computer Society] NSBM-IEEE COMPUTER SOCIETY STUDENT BRANCH CHAPTER OF NSBM" />
      <DataCard
        data='IEEE Computer Society (sometimes abbreviated as the Computer Society or CS) is a professional society of the Institute
      of Electrical and Electronics Engineers (IEEE). Its purpose and scope are "to advance the theory, practice, and application of computer
      and information processing science and technology" and the "professional standing of its members". The CS is the largest of 39 technical
      societies organized under the IEEE Technical Activities Board.<br>
      The IEEE Computer Society sponsors workshops and conferences,
      publishes a variety of peer-reviewed literature, operates technical committees, and develops IEEE computing standards.
      It supports more than 200 chapters worldwide and participates in educational activities at all levels of the profession,
      including distance learning, accreditation of higher education programs in computer science, and professional certification in software
      engineering.|https://nsbmieee.org/_nuxt/image/c28475.webp'
      />
    </div>
  );
}
