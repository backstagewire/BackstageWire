export default function Home() {
  return (
    <main style={{ padding: "40px", maxWidth: "1000px", margin: "auto" }}>
      <h1 style={{ fontSize: "48px", fontWeight: "bold" }}>
        Backstage Wire
      </h1>

      <p style={{ fontSize: "18px", marginBottom: "40px" }}>
        Music news and the culture around it.
      </p>

      <section>
        <h2>Latest Stories</h2>

        <article style={{ marginTop: "20px" }}>
          <h3>Richmond’s Indie Scene Is Quietly Exploding</h3>
          <p>
            From DIY venues to viral TikTok moments, the next wave of artists is
            coming from unexpected places.
          </p>
        </article>

        <article style={{ marginTop: "20px" }}>
          <h3>Festival Season Is Back</h3>
          <p>
            Tour buses are rolling again and crowds are returning to the fields.
          </p>
        </article>

        <article style={{ marginTop: "20px" }}>
          <h3>New Music Friday Highlights</h3>
          <p>
            The releases everyone is talking about this week.
          </p>
        </article>
      </section>
    </main>
  );
}
