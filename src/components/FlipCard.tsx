import { ReactNode, useState } from "react";

interface FlipCardProps {
  category?: string;
  title: string;
  price?: ReactNode;
  children: ReactNode;
}

export function FlipCard({ category, title, price, children }: FlipCardProps) {
  const [flipped, setFlipped] = useState(false);
  return (
    <div
      className={`flip-card ${flipped ? "flipped" : ""}`}
      onClick={() => setFlipped((f) => !f)}
      onKeyDown={(e) => e.key === "Enter" && setFlipped((f) => !f)}
      role="button"
      tabIndex={0}
      aria-label={flipped ? "Revenir au titre" : "Voir la description"}
    >
      <div className="flip-card-inner">
        <div className="flip-card-front">
          {category && <div className="flip-card-badge">{category}</div>}
          <h3 className="flip-card-title flip-card-title--front">{title}</h3>
          {price && <div className="flip-card-front-price">{price}</div>}
          <p className="flip-card-hint">Survoler pour la description</p>
        </div>
        <div className="flip-card-back">
          {category && <div className="flip-card-category">{category}</div>}
          <h3 className="flip-card-title">{title}</h3>
          {price && <div className="flip-card-price">{price}</div>}
          <div className="prose-text">{children}</div>
        </div>
      </div>
    </div>
  );
}
