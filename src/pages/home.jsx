import React from "react";
import PaymentRecordChart from "@/components/widgetsCharts/PaymentRecordChart";
import PageHeader from "@/components/shared/pageHeader/PageHeader";
import Footer from "@/components/shared/Footer";
import ProjectDateLineMiscellaneous from "@/components/widgetsMiscellaneous/ProjectDateLineMiscellaneous.jsx";
import DeviceUseChart from "@/components/widgetsCharts/DeviceUseChart.jsx";

const Home = () => {
  return (
    <>
      <PageHeader></PageHeader>
      <div className="main-content">
        <div className="row">
          {/*<SiteOverviewStatistics />*/}
          <ProjectDateLineMiscellaneous title="Ticketing" viewOptions={true} />
          <ProjectDateLineMiscellaneous title="Supervision" />
          <PaymentRecordChart title="CMDB" />
          <DeviceUseChart title="Type de CI" />

          {/*<SalesMiscellaneous isFooterShow={true} dataList={projectsDataTwo} />*/}
          {/*<TasksOverviewChart />*/}
          {/*<LeadsOverviewChart chartHeight={315} />*/}
          {/*<LatestLeads title={"Latest Leads"} />*/}
          {/*<Schedule title={"Upcoming Schedule"} />*/}
          {/*<Project*/}
          {/*  cardYSpaceClass="hrozintioal-card"*/}
          {/*  borderShow={true}*/}
          {/*  title="Project Status"*/}
          {/*/>*/}
          {/*<TeamProgress title={"Team Progress"} footerShow={true} />*/}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Home;
