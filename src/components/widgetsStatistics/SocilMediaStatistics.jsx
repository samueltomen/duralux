import getIcon from "@/utils/getIcon";

const socialMediaData = [
  {
    statut: "Hosts Up",
    numbers: "179",
    icon: "feather-arrow-up",
    color: "success",
  },
  {
    statut: "Services Ok",
    numbers: "2558",
    icon: "feather-arrow-up",
    color: "success",
  },
  {
    statut: "Hosts Down",
    numbers: "3",
    icon: "feather-arrow-down",
    color: "danger",
  },
  {
    statut: "Services Warning",
    numbers: "31",
    icon: "feather-alert-triangle",
    color: "warning",
  },
];

const SocilMediaStatistics = ({ name, status, value }) => {
  return (
    <>
      {socialMediaData.map(({ statut, numbers, icon, color }, index) => (
        <div key={index} className="col-xxl-3 col-md-6">
          <div
            className={`card card-body bg-${color} text-white position-relative`}
          >
            <h3 className="text-reset">{numbers}</h3>
            <span className="mt-2 text-capitalize">{statut} numbers</span>
            <div className="position-absolute top-50 end-0 translate-middle">
              <i className={`fs-1`}>{getIcon(icon)}</i>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default SocilMediaStatistics;
