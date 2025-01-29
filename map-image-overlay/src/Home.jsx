import React from 'react';

const Home = () => {
  return (
    <div style={{ fontFamily: 'Arial, sans-serif', backgroundColor: '#f4f4f4' }}>
      <header style={{ backgroundColor: '#333', color: 'white', padding: '10px 0', textAlign: 'center' }}>
        <h1>Introduction to Pittsburgh History</h1>
      </header>

      <main style={{ padding: '20px' }}>
        <section>
          <h2 style={{ color: '#2c3e50' }}>Overview of Pittsburgh</h2>
          <p style={{ fontSize: '1.1em', margin: '10px 0' }}>
            Pittsburgh, located in the state of Pennsylvania, is known for its rich industrial past, vibrant arts scene, and diverse cultural heritage. The city's history is deeply intertwined with the development of steel manufacturing, transportation, and innovation.
          </p>
        </section>

        <section>
          <h2 style={{ color: '#2c3e50' }}>Key Historical Events in Pittsburgh</h2>

          <h3 style={{ color: '#34495e' }}>Founding of Pittsburgh (1758)</h3>
          <p style={{ fontSize: '1.1em', margin: '10px 0' }}>
            Pittsburgh was founded in 1758 at the confluence of the Allegheny and Monongahela rivers, where the Ohio River begins. The area was originally a strategic military location, and Fort Pitt was built by the British during the French and Indian War.
          </p>

          <h3 style={{ color: '#34495e' }}>The Rise of the Steel Industry (Late 1800s - Early 1900s)</h3>
          <p style={{ fontSize: '1.1em', margin: '10px 0' }}>
            Pittsburgh's identity became closely linked to the steel industry in the late 19th and early 20th centuries. Major steel mills were established in the city, making Pittsburgh the steel capital of the world. The industry played a significant role in the city's growth and in the development of the U.S. economy during the industrial revolution.
          </p>

          <h3 style={{ color: '#34495e' }}>World War II and the War Effort (1940s)</h3>
          <p style={{ fontSize: '1.1em', margin: '10px 0' }}>
            During World War II, Pittsburgh's steel mills were vital to the U.S. war effort, producing weapons, ships, and tanks. The city’s industrial capacity played a key role in ensuring the Allied victory, cementing Pittsburgh’s importance as a center of manufacturing and production.
          </p>

          <h3 style={{ color: '#34495e' }}>Decline of the Steel Industry (1970s - 1980s)</h3>
          <p style={{ fontSize: '1.1em', margin: '10px 0' }}>
            By the late 20th century, Pittsburgh's steel industry began to decline due to foreign competition, changes in technology, and the loss of manufacturing jobs. This economic downturn led to significant challenges for the city, but also spurred a period of transformation.
          </p>

          <h3 style={{ color: '#34495e' }}>Pittsburgh's Economic Transformation (1990s - Present)</h3>
          <p style={{ fontSize: '1.1em', margin: '10px 0' }}>
            In the 1990s, Pittsburgh began to diversify its economy, moving away from heavy industry and toward sectors like healthcare, education, technology, and finance. The city has reinvented itself as a hub for innovation and research, with institutions like Carnegie Mellon University and the University of Pittsburgh leading the way.
          </p>

          <h3 style={{ color: '#34495e' }}>The Pittsburgh Renaissance (1990s)</h3>
          <p style={{ fontSize: '1.1em', margin: '10px 0' }}>
            In the 1990s, Pittsburgh underwent a "Renaissance," with the revitalization of its downtown area and the development of cultural institutions, including the Andy Warhol Museum, the Carnegie Museum, and PNC Park. The city’s shift from industrial powerhouse to cultural and tech center marked a new chapter in its history.
          </p>

          <h3 style={{ color: '#34495e' }}>21st Century Pittsburgh: Innovation and Sustainability</h3>
          <p style={{ fontSize: '1.1em', margin: '10px 0' }}>
            Today, Pittsburgh is recognized for its thriving tech industry, strong medical institutions, and sustainability initiatives. The city has become a leader in robotics, artificial intelligence, and healthcare research, ensuring a bright future for Pittsburgh as a city of innovation and education.
          </p>
        </section>
      </main>
    </div>
  );
};

export default Home;
