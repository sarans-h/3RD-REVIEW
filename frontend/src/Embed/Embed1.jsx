import React, { useEffect, useState } from "react";

export function Marquee({ className, reverse, pauseOnHover = false, children, vertical = false, repeat = 4, speed = 20, ...props }) {
  return (
    <div
      {...props}
      style={{
        display: "flex",
        flexDirection: vertical ? "column" : "row",
        overflow: "hidden",
        padding: "0.5rem",
        position: "relative",
        width: "100%",
      }}
      className={`group ${className || ""}`}
    >
      <div
        style={{
          display: "flex",
          flexDirection: vertical ? "column" : "row",
          gap: "1rem",
          animation: `marquee ${speed}s linear infinite ${reverse ? "reverse" : "normal"}`,
          animationPlayState: pauseOnHover ? "paused" : "running",
        }}
        onMouseEnter={(e) => pauseOnHover && (e.currentTarget.style.animationPlayState = "paused")}
        onMouseLeave={(e) => pauseOnHover && (e.currentTarget.style.animationPlayState = "running")}
      >
        {Array(repeat).fill(0).map((_, i) => (
          <div key={i} style={{ display: "flex", flexDirection: "row" }}>
            {children}
          </div>
        ))}
      </div>
    </div>
  );
}

export function ReviewCard({ img, name, username, body }) {
  return (
    <figure
      style={{
        width: "16rem",
        border: "1px solid #e5e7eb",
        borderRadius: "0.75rem",
        overflow: "hidden",
        padding: "1rem",
        backgroundColor: "#fff",
        boxShadow: "0 1px 2px rgba(0,0,0,0.1)",
        margin: "0.5rem",
        cursor: "pointer",
        transition: "background-color 0.2s",
      }}
      onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#f9fafb")}
      onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#fff")}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          gap: "0.5rem",
        }}
      >
        <img
          style={{
            borderRadius: "50%",
            width: "32px",
            height: "32px",
          }}
          alt=""
          src={img}
        />
        <div>
          <figcaption
            style={{
              fontSize: "0.875rem",
              fontWeight: "500",
              color: "#1f2937",
            }}
          >
            {name}
          </figcaption>
          <p
            style={{
              fontSize: "0.75rem",
              fontWeight: "500",
              color: "#6b7280",
            }}
          >
            {username}
          </p>
        </div>
      </div>
      <blockquote
        style={{
          marginTop: "0.5rem",
          fontSize: "0.875rem",
          color: "#374151",
        }}
      >
        {body}
      </blockquote>
    </figure>
  );
}

function App() {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const productid = `6778402de1c712b51e7cc2fe`;

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        setLoading(true);

        const response = await fetch(
          `http://localhost:8080/api/review/6778402de1c712b51e7cc2fe/getallreviews`
        );
        if (!response.ok) {
          throw new Error("Failed to fetch reviews");
        }
        const data = await response.json();
        setReviews(data.reviews || []);
      } catch (error) {
        console.error("Error fetching reviews:", error);
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchReviews();
  }, [productid]);

  if (loading) return <div style={{ color: "#fff" }}>Loading reviews...</div>;
  if (error) return <div style={{ color: "#f87171" }}>Error: {error}</div>;
  if (!reviews.length) return <div style={{ color: "#fff" }}>No reviews found</div>;

  const firstRow = reviews.slice(0, Math.ceil(reviews.length / 2));
  const secondRow = reviews.slice(Math.ceil(reviews.length / 2));

  return (
    <div
      style={{
        height: "500px",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        border: "1px solid #e5e7eb",
        borderRadius: "0.75rem",
        overflow: "hidden",
        backgroundColor: "",
        position: "relative",
      }}
    >
      <style>{`
        @keyframes marquee {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-50%);
          }
        }
      `}</style>
      <div style={{ width: "100%", overflow: "hidden" }}>
        <Marquee pauseOnHover speed={40}>
          {firstRow.map((review) => (
            <ReviewCard
              key={review._id}
              img={`https://avatar.vercel.sh/${review.customerName}`}
              name={review.customerName}
              username={review.customerEmail}
              body={review.comment}
            />
          ))}
        </Marquee>
        <Marquee reverse pauseOnHover speed={40}>
          {secondRow.map((review) => (
            <ReviewCard
              key={review._id}
              img={`https://avatar.vercel.sh/${review.customerName}`}
              name={review.customerName}
              username={review.customerEmail}
              body={review.comment}
            />
          ))}
        </Marquee>
      </div>
    </div>
  );
}

export default App;
