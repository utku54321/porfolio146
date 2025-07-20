import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

function ProjectCards(props) {
  const handleImageError = (e) => {
    e.target.onerror = null; // Prevents loop
    e.target.src = "/default-image.png"; // Fallback image in /public
  };

  return (
    <Card className="project-card-view">
      <Card.Img
        variant="top"
        src={props.imgPath}
        alt={`${props.title} cover`}
        onError={handleImageError}
      />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text style={{ textAlign: "justify" }}>
          {props.description}
        </Card.Text>

        {/* Download Buttons */}
        {props.files && props.files.map((file, idx) => (
          <div key={idx} style={{ marginBottom: "0.3rem" }}>
            <a
              href={file.path}
              download
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: "none" }}
              aria-label={`Download ${file.name}`}
            >
              <Button
                variant="primary"
                style={{ marginBottom: "0.2rem" }}
                size="sm"
              >
                Download {file.name}
              </Button>
            </a>
          </div>
        ))}
      </Card.Body>
    </Card>
  );
}

export default ProjectCards;
