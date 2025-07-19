import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

function ProjectCards(props) {
  return (
    <Card className="project-card-view">
      <Card.Img variant="top" src={props.imgPath} alt="card-img" />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text style={{ textAlign: "justify" }}>
          {props.description}
        </Card.Text>

        {/* Only Download Button */}
        {props.files && props.files.map((file, idx) => (
          <div key={idx} style={{ marginBottom: "0.3rem" }}>
            <Button
              variant="primary"
              href={file.path}
              download
              target="_blank"
              style={{ marginBottom: "0.2rem" }}
            >
              Download {file.name}
            </Button>
          </div>
        ))}
      </Card.Body>
    </Card>
  );
}

export default ProjectCards;