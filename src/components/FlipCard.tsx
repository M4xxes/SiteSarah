import { CSSProperties, ReactNode, useState } from "react";

interface FlipCardProps {
  category?: string;
  title: string;
  price?: ReactNode;
  children: ReactNode;
  backgroundImage?: string;
}

export function FlipCard({ category, title, price, children, backgroundImage }: FlipCardProps) {
  const [flipped, setFlipped] = useState(false);

  return (
    <div
      className={`flip-card ${flipped ? "flipped" : ""}`}
      style={
        backgroundImage
          ? ({ ["--flip-card-bg" as string]: `url("${backgroundImage}")` } as CSSProperties)
          : undefined
      }
      aria-label={flipped ? "Carte retournée" : "Carte face avant"}
    >
      <div className="flip-card-inner">
        <div className="flip-card-front">
          {category && <div className="flip-card-badge">{category}</div>}
          <h3 className="flip-card-title flip-card-title--front">{title}</h3>
          {price && <div className="flip-card-front-price">{price}</div>}
          <button
            type="button"
            className="flip-card-more-btn"
            onClick={(event) => {
              event.stopPropagation();
              setFlipped(true);
            }}
          >
            Plus d’info
          </button>
        </div>
        <div className="flip-card-back">
          {category && <div className="flip-card-category">{category}</div>}
          <h3 className="flip-card-title">{title}</h3>
          {price && <div className="flip-card-price">{price}</div>}
          <div className="prose-text">{children}</div>
          <button
            type="button"
            className="flip-card-back-btn"
            onClick={(event) => {
              event.stopPropagation();
              setFlipped(false);
            }}
          >
            Retour
          </button>
        </div>
      </div>
    </div>
  );
}
