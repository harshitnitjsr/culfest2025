import Image from "next/image";

export default function Sponsors() {
  const sponsors = [
    { name: "Swiggy", image: "/swiggy_logo.png" },
    { name: "Domino's", image: "/dominos_logo.png" },
    { name: "Hero MotoCorp", image: "/hero_logo.png" },
    { name: "Social House", image: "/social_house_logo.png" },
    { name: "Himalaya Hair Care", image: "/himalaya_hair_care_logo.png" },
    { name: "Sponsor 6", image: "/sponsor1.png" },
    { name: "Sponsor 7", image: "/sponsor2.png" },
    { name: "Sponsor 8", image: "/sponsor3.png" },
    { name: "Sponsor 9", image: "/sponsor4.png" },
    { name: "Sponsor 10", image: "/sponsor5.png" },
    { name: "Sponsor 11", image: "/sponsor1.png" },
    { name: "Sponsor 12", image: "/sponsor2.png" },
    { name: "Sponsor 13", image: "/sponsor3.png" },
    { name: "Sponsor 14", image: "/sponsor4.png" },
    { name: "Sponsor 15", image: "/sponsor5.png" },
    { name: "Sponsor 16", image: "/sponsor1.png" },
    { name: "Sponsor 17", image: "/sponsor2.png" },
    { name: "Sponsor 18", image: "/sponsor3.png" },
    { name: "Sponsor 19", image: "/sponsor4.png" },
    { name: "Sponsor 20", image: "/sponsor5.png" },
    { name: "Sponsor 21", image: "/sponsor1.png" },
  ];

  return (
    <div
      style={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "20px",
        backgroundColor: "#f9f9f9",
        minHeight: "100vh",
        backgroundImage: "url(/bg13.jpg)",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div style={{ position: "absolute", top: "20px", left: "20px" }}>
        <Image
          src="/culfest_logo.png"
          alt="Culfest 24 Logo"
          width={100}
          height={100}
          style={{ objectFit: "contain" }}
        />
      </div>
      <div
        style={{
          padding: "10px",
          border: "2px solid white",
          borderRadius: "6px",
          marginBottom: "20px",
          textAlign: "center",
        }}
      >
        <h1
          style={{
            fontSize: "2.5rem",
            margin: "0",
            color: "#fff",
            fontFamily: '"Arial", sans-serif',
          }}
        >
          Our Sponsors
        </h1>
      </div>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: "20px",
          maxWidth: "800px",
          margin: "0 auto",
        }}
      >
        {sponsors.slice(0, 12).map((sponsor, index) => (
          <div
            key={index}
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: "#fff",
              height: "150px",
              padding: "5px",
              border: "2px solid black",
              borderLeft: "10px solid black",
              width: "200px",
              marginLeft: "auto",
              marginRight: "auto",
              boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
            }}
          >
            <Image
              src={sponsor.image}
              alt={sponsor.name}
              width={150}
              height={80}
              style={{ objectFit: "contain" }}
            />
          </div>
        ))}
      </div>
      <div
        style={{
          marginTop: "20px",
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: "20px",
          maxWidth: "800px",
          margin: "0 auto",
        }}
      >
        {sponsors.slice(12).map((sponsor, index) => (
          <div
            key={index}
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: "#fff",
              height: "150px",
              padding: "5px",
              border: "2px solid black",
              borderLeft: "10px solid black",
              width: "200px",
              marginLeft: "auto",
              marginRight: "auto",
              boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
            }}
          >
            <Image
              src={sponsor.image}
              alt={sponsor.name}
              width={150}
              height={80}
              style={{ objectFit: "contain" }}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
