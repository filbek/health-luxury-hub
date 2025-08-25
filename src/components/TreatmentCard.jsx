import React from 'react';
import { Link } from 'react-router-dom';

const TreatmentCard = ({ treatment }) => {
  return (
    <div className="treatment-card group">
      <div className="relative overflow-hidden">
        <img 
          src={treatment.image || "https://placehold.co/600x400/4fc3f7/ffffff?text=Treatment"} 
          alt={treatment.title}
          className="treatment-image transition-transform duration-500 group-hover:scale-110"
          crossOrigin="anonymous"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
          <div className="p-4 text-white">
            <p className="font-bold">{treatment.title}</p>
            <p className="text-sm">{treatment.shortDescription}</p>
          </div>
        </div>
      </div>
      <div className="treatment-content">
        <h3 className="treatment-title">{treatment.title}</h3>
        <p className="text-neutral-dark mb-3">{treatment.shortDescription}</p>
        <p className="treatment-price">
          {treatment.price === 'Price on Request' 
            ? 'Price on Request' 
            : `Starting from $${treatment.price.toLocaleString()}`
          }
        </p>
        <div className="treatment-features">
          <div className="treatment-feature">
            <i className="bi bi-calendar-check"></i>
            <span>{treatment.duration} Stay</span>
          </div>
          <div className="treatment-feature">
            <i className="bi bi-airplane"></i>
            <span>{treatment.tourIncluded}</span>
          </div>
          {treatment.includes && treatment.includes.slice(0, 2).map((item, index) => (
            <div key={index} className="treatment-feature">
              <i className="bi bi-check-circle"></i>
              <span>{item}</span>
            </div>
          ))}
        </div>
        <Link 
          to={`/treatments/${treatment.id}`} 
          className="btn btn-primary w-full mt-4"
        >
          View Details
        </Link>
      </div>
    </div>
  );
};

export default TreatmentCard;
