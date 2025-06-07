import { Link } from "react-router-dom";
import homeRepairServicesData from "../../lib/homeRepairServicesData";
import "./services.css";

export default function Services() {
  return (
    <div className="services-container">
      {homeRepairServicesData.map((service) => (
        <div key={service.key} className="service-card">
          <img
            src={service.image}
            alt={service.title}
            className="service-image"
          />
          <h3 className="service-title">{service.title}</h3>
          <p className="service-description">{service.shortDescription}</p>
          <Link
            to={`/services/${service.key}`}
            className="service-link"
          >
            Voir détails
          </Link>
        </div>
      ))}
    </div>
  );
}