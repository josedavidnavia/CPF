import React from "react";
import { useNavigate } from "react-router-dom";
import "./dashboard.css";

interface DashboardProps {
  poems: {
    id: string;
    title: string;
    excerpt: string;
  }[];
  onViewPoem: (id: string) => void;
}

const Dashboard: React.FC<DashboardProps> = ({ poems, onViewPoem }) => {
  const navigate = useNavigate();

  const handleViewPoem = (id: string) => {
    onViewPoem(id);
    navigate(`/poem/${id}`);
  };

  return (
    <div className="dashboard">
      <h1 className="dashboard-title">Poem Dashboard</h1>
      <div className="poem-list">
        {poems.map((poem) => (
          <div key={poem.id} className="poem-card">
            <h2 className="poem-title">{poem.title}</h2>
            <p className="poem-excerpt">{poem.excerpt}...</p>
            <button className="poem-button" onClick={() => handleViewPoem(poem.id)}>
              Read More
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
